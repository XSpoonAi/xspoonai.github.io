import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const toolkitSidebars: SidebarsConfig = {
  toolkitSidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Crypto',
      collapsed: false,
      items: [
        'crypto/data-tools',
        'crypto/powerdata',
        'crypto/solana',
        'crypto/evm',
        'crypto/neo',
      ],
    },
    {
      type: 'category',
      label: 'Data Platforms',
      collapsed: false,
      items: [
        'data-platforms/chainbase',
        'data-platforms/thirdweb',
        'data-platforms/desearch',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: false,
      items: [
        'security/token-risk',
        'security/approvals',
        'security/address-risk',
        'security/dapp-phishing',
        'security/internals',
      ],
    },
    {
      type: 'category',
      label: 'GitHub Intelligence',
      collapsed: false,
      items: [
        'github/analysis-tools',
        'github/provider',
      ],
    },
    {
      type: 'category',
      label: 'Social Media',
      collapsed: false,
      items: [
        'social-media/index',
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      collapsed: false,
      items: [
        'storage/aioz',
        'storage/oort',
        'storage/foureverland',
      ],
    },
  ],
};

export default toolkitSidebars;
