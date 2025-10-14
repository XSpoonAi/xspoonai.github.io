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
import '@fontsource/dm-sans';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/400-italic.css';
import { DiscordLogo, YoutubeLogo, XLogo } from '../components/shared/social-logos';

const socialsLinks = [
  {
    icon: DiscordLogo,
    link: 'https://discord.com/invite/G6y3ZCFK4h',
  },
  {
    icon: YoutubeLogo,
    link: 'https://www.youtube.com/@SpoonOS_ai',
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
        <title>{`${siteConfig.title} - Code Cookbook`}</title>
        <meta
          name="description"
          content="SpoonOS Core Developer Framework - Agentic OS for the Sentient Economy. Build powerful AI agents with Web3 integration."
        />
      </Head>

      <div className="max-w-screen min-h-screen bg-[#020402] font-sans">
        <header
          className="mb-6 flex h-[60px] items-center justify-center sm:mb-10 sm:h-[74px]"
          style={{
            borderBottom: '0.5px solid white',
          }}
        >
          <div className="flex h-full w-full max-w-[1568px] items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20">
            <h1 className="flex gap-2 items-center my-auto h-full sm:gap-3">
              <SpoonOSLogo className="size-6 sm:size-8" />
              <a href="/" className="text-lg text-white sm:text-xl">
                SpoonOS
              </a>
            </h1>

            <div className="flex items-center gap-4 sm:gap-8 md:gap-[46px]">
              <Link
                href="docs/getting-started/installation/"
                className="text-sm font-medium text-[#D9D9D9] hover:text-white hover:no-underline sm:text-base"
              >
                Document
              </Link>
              <a
                href="https://github.com/XSpoonAi/spoon-core"
                target="_blank"
                className="text-sm font-medium text-[#D9D9D9] hover:text-white hover:no-underline sm:text-base"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <main
          className="mt-10 flex min-h-[800px] flex-col sm:mt-16 md:mt-20 md:min-h-[1000px] lg:min-h-[1333px]"
          style={{
            backgroundImage: 'url("/img/home-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h2 className="mx-auto mb-3 text-3xl text-white sm:mb-6 sm:text-4xl md:text-5xl">
            SpoonOS
          </h2>

          <h2 className="mx-auto mb-6 mt-4 flex flex-col bg-[linear-gradient(92.67deg,#58FF98_0%,#59FF98_8.04%,#5AFF9A_15.48%,#5DFF9C_22.42%,#61FEA0_28.94%,#66FEA4_35.13%,#6CFDAA_41.1%,#73FDB0_46.93%,#7AFCB6_52.71%,#83FBBE_58.54%,#8CFAC6_64.51%,#96F9CF_70.71%,#A1F8D9_77.23%,#ACF7E3_84.16%,#B8F6ED_91.6%,#C4F5F8_99.64%)] bg-clip-text px-4 text-[32px] font-bold text-transparent sm:mb-8 sm:mt-7 sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px]">
            <span className="font-sans text-center">Agentic OS for a</span>
            <span className="font-sans text-center">Sentient Economy</span>
          </h2>

          <div className="flex flex-col gap-3 px-4 mx-auto sm:flex-row sm:gap-5">
            <Link
              href="docs/getting-started/quick-start/"
              className="relative inline-block rounded-[50px] bg-transparent px-4 py-2 text-center text-lg font-medium text-[#B1FFCF] transition-all hover:text-[#B1FFCFB2] hover:no-underline hover:shadow-[inset_0_0_20px_5px_#58FF9880] sm:px-6 sm:py-3 sm:text-xl md:px-[30px] md:text-2xl"
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
              className="relative inline-block rounded-[50px] bg-transparent px-4 py-2 text-center text-lg font-medium text-[#B1FFCF] transition-all hover:text-[#B1FFCFB2] hover:no-underline hover:shadow-[inset_0_0_20px_5px_#58FF9880] sm:px-6 sm:py-3 sm:text-xl md:px-[30px] md:text-2xl"
              style={{
                position: 'relative',
                zIndex: 10,
              }}
            >
              Quick Install
              <span className={styles.gradientBorder} />
            </Link>
          </div>

          <section className="mx-auto mt-16 flex max-w-[1172px] flex-col justify-between gap-6 px-4 sm:mt-24 md:mt-[128px] lg:flex-row lg:gap-5 lg:px-8">
            {cards.map((v, i) => (
              <GradientCard key={i} title={v.title} description={v.description} Icon={v.icon} />
            ))}
          </section>

          <footer className="relative z-10 mx-auto mb-6 mt-24 flex h-auto min-h-[296px] w-[calc(100%-2rem)] max-w-7xl flex-col justify-between rounded-[10px] bg-[#08231280] px-4 pb-6 pt-6 text-white backdrop-blur-[10px] sm:mb-10 sm:mt-40 sm:w-[calc(100%-4rem)] sm:px-6 sm:pb-10 sm:pt-8 lg:mt-[250px]">
            <div className="mx-auto flex w-full max-w-[630px] flex-col items-center justify-center gap-6 text-white md:flex-row md:items-start md:justify-between">
              {footerLinks.map(v => (
                <div className="flex flex-col items-center md:items-start">
                  <h3 className="mb-2 font-bold text-[#D9D9D9]">{v.title}</h3>
                  <div className="flex flex-col gap-2 items-center md:items-start">
                    {v.items.map(x => (
                      <a
                        href={x.href}
                        className="text-center text-sm font-medium text-[#D9D9D9] hover:text-white hover:no-underline sm:text-base md:text-left"
                        target={x.internal ? '_self' : '_blank'}
                      >
                        {x.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <footer className="mx-auto mt-6 flex h-auto w-full max-w-[630px] flex-col items-center gap-4 text-[#D9D9D9] sm:mt-8 md:h-8 md:flex-row md:justify-between md:gap-0">
              <span className="text-xs text-center sm:text-sm md:text-left">{`Copyright © ${new Date().getFullYear()} SpoonAi. Built with SpoonOS.`}</span>
              <div className="flex gap-6 sm:gap-10">
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
