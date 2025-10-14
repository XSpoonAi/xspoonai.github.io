import type { FC, ReactNode, SVGProps } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { SpoonOSLogo } from '../components/shared/spoon-os-logo';
import styles from './index.module.css';
import { GradientCard } from '../components/shared/gradient-card';
import { Card1Brain } from '../svgs/card-1-brain';
import { Card2Atom } from '../svgs/card-2-atom';
import { Card3Cube } from '../svgs/card-3-cube';
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/400.css'; // Specify weight
import '@fontsource/dm-sans/400-italic.css'; // Specify weight and style
import { DiscordLogo, NeoLogo, XLogo } from '../components/shared/social-logos';

const socialsLinks = [
  {
    icon: DiscordLogo,
    link: 'https://discord.com/invite/G6y3ZCFK4h',
  },
  {
    icon: NeoLogo,
    // TODO: neo logo?
    link: 'https://discord.com/invite/G6y3ZCFK4h',
  },
  {
    icon: XLogo,
    link: 'https://x.com/SpoonOS_ai',
  },
] as const;

const cards: Array<{
  title: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  description: string;
}> = [
  {
    icon: Card1Brain,
    title: `Intelligent \n Agents`,
    description:
      'Build powerful ReAct agents with reasoning and action capabilities. Support for multiple LLM providers including OpenAI, Anthropic, and DeepSeek.',
  },
  {
    icon: Card2Atom,
    title: 'Web3 \n Native',
    description:
      'First-class Web3 integration with blockchain tools, DeFi protocols, and decentralized infrastructure. Built for the sentient economy.',
  },
  {
    icon: Card3Cube,
    title: 'Extensible \n Architecture',
    description:
      'Modular tool system with MCP protocol support. Easy to extend with custom tools and integrate with external APIs and services.',
  },
] as const;

const footerLinks: Array<{
  title: string;
  items: Array<{ label: string; href: string; internal?: boolean }>;
}> = [
  {
    title: 'Documentation',
    items: [
      {
        label: 'Getting Started',
        href: 'docs/getting-started/quick-start/',
        internal: true,
      },
      {
        label: 'Installation',
        href: 'docs/getting-started/installation/',
        internal: true,
      },
      {
        label: 'Configuration',
        href: 'docs/getting-started/configuration/',
        internal: true,
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/XSpoonAi/spoon-core',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/G6y3ZCFK4h',
      },
      {
        label: 'Issues',
        href: 'https://github.com/XSpoonAi/spoon-core/issues',
      },
    ],
  },
  {
    title: 'More',
    items: [
      {
        label: 'SpoonOS Landing',
        href: 'https://spoonai.io',
      },
      {
        label: 'Examples',
        href: 'https://github.com/XSpoonAi/spoon-core/tree/main/examples',
      },
    ],
  },
] as const;

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <title>{`${siteConfig.title} - Code Cook Book`}</title>
        <meta
          name="description"
          content="SpoonOS Core Developer Framework - Agentic OS for the Sentient Economy. Build powerful AI agents with Web3 integration."
        />
      </Head>

      <div className="max-w-screen min-h-screen bg-[#020402] font-sans">
        <header
          className="mb-10 flex h-[74px] items-center justify-center"
          style={{
            borderBottom: '0.5px solid white',
          }}
        >
          <div className="mx-20 flex h-full w-full max-w-[1568px] items-center justify-between">
            <h1 className="my-auto flex h-full items-center gap-3">
              <SpoonOSLogo className="size-8" />
              <a href="/" className="text-xl text-white">
                SpoonOS
              </a>
            </h1>

            <div className="flex items-center gap-[46px]">
              <Link
                href="docs/getting-started/installation/"
                className="font-medium text-[#D9D9D9] hover:text-white hover:no-underline"
              >
                Document
              </Link>
              <a
                href="https://github.com/XSpoonAi/spoon-core"
                target="_blank"
                className="font-medium text-[#D9D9D9] hover:text-white hover:no-underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <main
          className="mt-20 flex min-h-[1333px] flex-col"
          style={{
            backgroundImage: 'url("/img/home-bg.jpg")',
            backgroundSize: '100% 100%',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* TODO: image? */}
          <h2 className="mx-auto mb-6 text-5xl text-white">SpoonOS</h2>

          <h2 className="mx-auto mb-8 mt-7 flex flex-col bg-[linear-gradient(92.67deg,#58FF98_0%,#59FF98_8.04%,#5AFF9A_15.48%,#5DFF9C_22.42%,#61FEA0_28.94%,#66FEA4_35.13%,#6CFDAA_41.1%,#73FDB0_46.93%,#7AFCB6_52.71%,#83FBBE_58.54%,#8CFAC6_64.51%,#96F9CF_70.71%,#A1F8D9_77.23%,#ACF7E3_84.16%,#B8F6ED_91.6%,#C4F5F8_99.64%)] bg-clip-text text-[100px] font-bold text-transparent">
            <span className="text-center font-sans">Agentic OS for a</span>
            <span className="text-center font-sans">Sentient Economy</span>
          </h2>

          {/* TODO: font OPPO Sans 4.0 */}
          <div className="mx-auto flex gap-5">
            <Link
              href="docs/getting-started/quick-start/"
              className="relative inline-block rounded-[50px] bg-transparent px-[30px] py-3 text-2xl font-medium text-[#B1FFCF] transition-all hover:text-[#B1FFCFB2] hover:no-underline hover:shadow-[inset_0_0_20px_5px_#58FF9880]"
              style={{
                position: 'relative',
                zIndex: 10,
              }}
            >
              Get Started
              <span className={styles.gradientBorder} />
            </Link>

            <Link
              href="docs/getting-started/installation/"
              className="relative inline-block rounded-[50px] bg-transparent px-[30px] py-3 text-2xl font-medium text-[#B1FFCF] transition-all hover:text-[#B1FFCFB2] hover:no-underline hover:shadow-[inset_0_0_20px_5px_#58FF9880]"
              style={{
                position: 'relative',
                zIndex: 10,
              }}
            >
              Quick Install
              <span className={styles.gradientBorder} />
            </Link>
          </div>

          <section className="mx-auto mt-[128px] flex max-w-[1172px] justify-between gap-5">
            {cards.map((v, i) => (
              <GradientCard key={i} title={v.title} description={v.description} Icon={v.icon} />
            ))}
          </section>

          <footer className="relative z-10 mx-auto mb-10 mt-[250px] flex h-[296px] w-full max-w-7xl flex-col justify-between rounded-[10px] bg-[#08231280] pb-10 pt-8 text-white backdrop-blur-[10px]">
            <div className="mx-auto flex w-[630px] justify-center gap-[128px] text-white">
              {footerLinks.map(v => (
                <div className="flex flex-1 flex-col">
                  <h3 className="font-bold text-[#D9D9D9]">{v.title}</h3>
                  <div className="flex flex-col gap-2">
                    {v.items.map(x => (
                      <a
                        href={x.href}
                        className="text-nowrap font-medium text-[#D9D9D9] hover:text-white hover:no-underline"
                        target={x.internal ? '_self' : '_blank'}
                      >
                        {x.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <footer className="mx-auto flex h-8 w-[644px] items-center justify-between text-[#D9D9D9]">
              <span>{`Copyright © ${new Date().getFullYear()} SpoonAi. Built with SpoonOS.`}</span>
              <div className="flex gap-10">
                {/* TODO: neo link and neo logo? */}
                {socialsLinks.map(v => (
                  <a href={v.link} target="_blank">
                    <v.icon />
                  </a>
                ))}
              </div>
            </footer>

            <span className={styles.footerGradientBorder}></span>
          </footer>
        </main>
      </div>
    </>
  );
}
