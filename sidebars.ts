import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  tutorialSidebar: [
    'intro',
    'getting-started-guide',
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'agents',
        'tools',
        'builtin-tools',
        'mcp-protocol',
        'llm-providers',
        'graph-system',
      ],
    },
    {
      type: 'category',
      label: 'User Interface',
      items: [
        'cli',
        'openrouter',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'building-agents',
        'custom-tools',
        'web3-integration',
        'prompt-caching',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/basic-agent',
        'examples/trading-bot',
        'examples/web3-agent',
        'examples/graph-workflows',
        'examples/custom-tools',
      ],
    },
  ],
};

export default sidebars;
