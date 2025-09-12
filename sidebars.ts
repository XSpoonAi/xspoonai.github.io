import {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * SpoonOS Cookbook Documentation Sidebar Configuration
 *
 * Organized following DeepWiki/LangChain pattern:
 * - Progressive learning path from basics to advanced
 * - Task-oriented how-to guides
 * - Comprehensive API reference
 * - Practical examples and troubleshooting
 */

const sidebars: SidebarsConfig = {
  // Main documentation sidebar with hierarchical structure
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/configuration',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: '🧠 Core Concepts',
      collapsed: false,
      items: [
        'core-concepts/agents',
        'core-concepts/tools',
        'core-concepts/llm-providers',
        'core-concepts/mcp-protocol',
        'core-concepts/graph-system',
      ],
    },
    {
      type: 'category',
      label: '📖 How-To Guides',
      collapsed: false,
      items: [
        'how-to-guides/build-first-agent',
        'how-to-guides/add-custom-tools',
      ],
    },
    {
      type: 'category',
      label: '📚 API Reference',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'LLM System',
          items: [
            'api-reference/llm/index',
            'api-reference/llm/llm-manager',
            'api-reference/llm/provider-interface',
            'api-reference/llm/config-manager',
          ],
        },
        {
          type: 'category',
          label: 'Graph System',
          items: [
            'api-reference/graph/index',
            'api-reference/graph/state-graph',
            'api-reference/graph/graph-agent',
            'api-reference/graph/base-node',
          ],
        },
        {
          type: 'category',
          label: 'Agents',
          items: [
            'api-reference/agents/base-agent',
          ],
        },
        {
          type: 'category',
          label: 'Tools',
          items: [
            'api-reference/tools/base-tool',
            'api-reference/tools/builtin-tools',
          ],
        },
        {
          type: 'category',
          label: 'CLI',
          items: [
            'api-reference/cli/commands',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '💡 Examples',
      collapsed: true,
      items: [
        'examples/comprehensive-graph-demo',
        'examples/graph-crypto-analysis',
        'examples/mcp-spoon-search-agent',
      ],
    },
    {
      type: 'category',
      label: '🔧 Troubleshooting',
      collapsed: true,
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/debugging',
        'troubleshooting/performance',
      ],
    },
  ],
};

export default sidebars;
