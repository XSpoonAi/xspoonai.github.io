#!/usr/bin/env node

/**
 * Generate Markdown API docs for the Python package `spoon_ai` into
 * docs/api-reference/auto/, one file per module/package.
 *
 * Works in two modes:
 *  - Mono-repo: if ../core exists, add it to PYTHONPATH and traverse source for modules.
 *  - Standalone cookbook repo: relies on installed spoon-ai-sdk (top-level spoon_ai only).
 */

const { spawnSync } = require('node:child_process');
const { existsSync, rmSync, mkdirSync, writeFileSync, readdirSync, readFileSync, writeFileSync: fsWrite } = require('node:fs');
const path = require('node:path');

let modulesGlobal = [];

function discoverModules(packageRoot, packageName) {
  const modules = new Set([packageName]);
  function walk(dir, prefix) {
    const entries = readdirSync(dir, { withFileTypes: true });
    const isPkg = entries.some((e) => e.isFile() && e.name === '__init__.py');
    if (!isPkg) return;
    modules.add(prefix);
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, `${prefix}.${entry.name}`);
      } else if (entry.isFile() && entry.name.endsWith('.py') && entry.name !== '__init__.py') {
        modules.add(`${prefix}.${entry.name.replace(/\.py$/, '')}`);
      }
    }
  }
  walk(packageRoot, packageName);
  return Array.from(modules).sort();
}

function renderModule({ pythonBin, env, cookbookRoot, searchPath, moduleName, outputDir }) {
  const moduleParts = moduleName.split('.');
  const isPackage = modulesGlobal.some((m) => m.startsWith(moduleName + '.'));
  const outputFile = isPackage
    ? path.join(outputDir, ...moduleParts, 'index.md')
    : path.join(outputDir, ...moduleParts) + '.md';
  mkdirSync(path.dirname(outputFile), { recursive: true });

  const yaml = `
loaders:
  - type: python
    search_path:
${searchPath.map((p) => `      - ${p.replace(/\\\\/g, '/')}`).join('\n')}
    packages:
      - ${moduleName}
renderer:
  type: markdown
  filename: ${outputFile.replace(/\\\\/g, '/')}
  render_toc: true
  descriptive_module_title: true
  descriptive_class_title: true
  code_headers: true
`.trimStart();

  const configPath = path.join(outputDir, `${moduleParts.join('_')}.pydoc.yaml`);
  writeFileSync(configPath, yaml, 'utf8');

  const args = ['-m', 'pydoc_markdown.main', configPath];
  const res = spawnSync(pythonBin, args, { cwd: cookbookRoot, env, stdio: 'inherit' });
  if (res.status !== 0) {
    console.error(`Failed to render ${moduleName}`);
    process.exit(res.status ?? 1);
  }

  // Remove the temporary config to keep tree clean.
  try {
    require('node:fs').rmSync(configPath);
  } catch (err) {
    // ignore cleanup errors
  }

  // Escape symbols in non-code lines to appease MDX/JSX parser.
  const relPath = outputFile
    .replace(path.join(cookbookRoot, 'docs', 'api-reference') + path.sep, '')
    .replace(/\\/g, '/');
  const slugBase = `/api-reference/${relPath.replace(/index\\.md$/, '').replace(/\\.md$/, '')}`;

  const content = readFileSync(outputFile, 'utf8').split('\n');
  let inCode = false;
  for (let i = 0; i < content.length; i++) {
    const line = content[i];
    if (line.trim().startsWith('```')) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    if (line.trim().startsWith('<a ')) continue; // keep anchors
    const escaped = line
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;');
    content[i] = escaped;
  }
  const frontmatter = [
    '---',
    `id: ${moduleName.replace(/\\./g, '-')}`,
    `slug: ${isPackage ? `${slugBase}/index` : slugBase}`,
    `title: ${moduleName}`,
    '---',
    '',
  ];
  fsWrite(outputFile, [...frontmatter, ...content].join('\n'), 'utf8');
}

function run() {
  const cookbookRoot = path.resolve(__dirname, '..');
  const coreDir = path.resolve(cookbookRoot, '..', 'core');
  const packageRoot = path.join(coreDir, 'spoon_ai');
  const apiRefDir = path.join(cookbookRoot, 'docs', 'api-reference');
  const outputDir = apiRefDir; // place generated files directly here

  // Clean API reference directory to replace legacy docs.
  if (existsSync(apiRefDir)) {
    rmSync(apiRefDir, { recursive: true, force: true });
  }
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(path.join(outputDir, '.gitkeep'), '');

  const env = { ...process.env };
  const venvPython = path.resolve(cookbookRoot, '..', '.venv', 'Scripts', 'python.exe');
  const pythonBin = existsSync(venvPython) ? venvPython : 'python';
  if (existsSync(venvPython)) {
    const scriptsPath = path.dirname(venvPython);
    env.PATH = `${scriptsPath}${path.delimiter}${env.PATH || ''}`;
  }
  if (existsSync(coreDir)) {
    const sep = process.platform === 'win32' ? ';' : ':';
    env.PYTHONPATH = env.PYTHONPATH ? `${coreDir}${sep}${env.PYTHONPATH}` : coreDir;
  }

  const searchPath = [cookbookRoot];
  let modules = ['spoon_ai'];
  if (existsSync(packageRoot)) {
    searchPath.unshift(coreDir);
    modules = discoverModules(packageRoot, 'spoon_ai');
  }
  modulesGlobal = modules; // for render helper

  console.log(`Rendering ${modules.length} module(s) to ${outputDir}`);
  modules.forEach((mod) =>
    renderModule({ pythonBin, env, cookbookRoot, searchPath, moduleName: mod, outputDir })
  );

  // Write an index page that links to all modules.
  const indexLines = [
    '# SpoonOS API Reference (auto-generated)',
    '',
    'Generated from spoon_ai sources. Each module below has its own page.',
    '',
  ];
  modules.forEach((mod) => {
    const relPath = mod.replace(/\./g, '/');
    const isPkg = modules.some((m) => m.startsWith(mod + '.'));
    indexLines.push(`- [${mod}](./${relPath}${isPkg ? '/' : '.md'})`);
  });
  writeFileSync(path.join(outputDir, 'index.md'), indexLines.join('\n'), 'utf8');
}

run();
