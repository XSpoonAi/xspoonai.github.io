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
import { SpoonOSText } from '../components/shared/spoon-os-text';

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
        label: 'SpoonOS',
        href: 'https://spoonai.io',
      },
      {
        label: 'Examples',
        href: 'https://xspoonai.github.io/docs/examples/intent-graph-demo/',
      },
      {
        label: 'Blog',
        href: 'https://x.com/SpoonOS_ai/articles',
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
        <header className="relative mb-4 flex h-[56px] items-center justify-center bg-[#091A1080] backdrop-blur-[10px] xs:mb-6 xs:h-[60px] sm:mb-8 sm:h-[68px] md:mb-10 md:h-[74px]">
          {/* border */}
          <span className="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-[rgba(47,135,81,0)] via-[#1D5432] to-[rgba(65,186,111,0)]" />
          <div className="flex h-full w-full max-w-[1568px] items-center justify-between px-3 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <h1 className="my-auto flex h-full items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
              <SpoonOSLogo className="h-[16px] w-12 xs:h-[18px] xs:w-14 sm:h-[20px] sm:w-16" />
              <a href="/" className="hidden xs:block">
                <SpoonOSText />
              </a>
            </h1>

            <div className="flex items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-[46px]">
              <Link
                href="docs/getting-started/installation/"
                className="text-xs font-medium text-[#D9D9D9] hover:text-white hover:no-underline xs:text-sm sm:text-sm md:text-base"
              >
                <span className="hidden xs:inline">Document</span>
                <span className="xs:hidden">Docs</span>
              </Link>
              <a
                href="https://github.com/XSpoonAi/spoon-core"
                target="_blank"
                className="text-xs font-medium text-[#D9D9D9] hover:text-white hover:no-underline xs:text-sm sm:text-sm md:text-base"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <main className="relative mt-6 flex min-h-[600px] flex-col overflow-hidden xs:mt-8 sm:mt-12 md:mt-16 md:min-h-[800px] lg:mt-20 lg:min-h-[1000px] xl:min-h-[1333px]">
          <img
            src="/img/home-bg.jpg"
            alt=""
            className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[url('/img/home-bg.jpg')] bg-cover bg-center opacity-20"
          />
          <h2 className="z-50 mx-auto mb-4 mt-2 flex flex-col bg-[linear-gradient(92.67deg,#58FF98_0%,#59FF98_8.04%,#5AFF9A_15.48%,#5DFF9C_22.42%,#61FEA0_28.94%,#66FEA4_35.13%,#6CFDAA_41.1%,#73FDB0_46.93%,#7AFCB6_52.71%,#83FBBE_58.54%,#8CFAC6_64.51%,#96F9CF_70.71%,#A1F8D9_77.23%,#ACF7E3_84.16%,#B8F6ED_91.6%,#C4F5F8_99.64%)] bg-clip-text px-3 text-[24px] font-bold text-transparent xs:mb-5 xs:mt-3 xs:px-4 xs:text-[28px] sm:mb-6 sm:mt-5 sm:text-[40px] md:mb-8 md:mt-7 md:text-[56px] lg:text-[72px] xl:text-[88px] 2xl:text-[100px]">
            <span className="text-center font-sans leading-tight">Agentic OS for a</span>
            <span className="text-center font-sans leading-tight">Sentient Economy</span>
          </h2>

          <div className="mx-auto -mt-2 mb-20 flex flex-col gap-2 px-3 xs:-mt-4 xs:mb-24 xs:gap-3 xs:px-4 sm:-mt-6 sm:mb-32 sm:flex-row sm:gap-4 md:mb-40 md:gap-5 lg:mb-48">
            <Link
              href="docs/getting-started/quick-start/"
              className="relative inline-block rounded-[50px] bg-transparent px-3 py-1.5 text-center text-sm font-medium text-[#B1FFCF] transition-all hover:text-[#B1FFCFB2] hover:no-underline hover:shadow-[inset_0_0_20px_5px_#58FF9880] xs:px-4 xs:py-2 xs:text-base sm:px-5 sm:py-2.5 sm:text-lg md:px-6 md:py-3 md:text-xl lg:px-[30px] lg:text-2xl"
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
              className="relative inline-block rounded-[50px] bg-transparent px-3 py-1.5 text-center text-sm font-medium text-[#B1FFCF] transition-all hover:text-[#B1FFCFB2] hover:no-underline hover:shadow-[inset_0_0_20px_5px_#58FF9880] xs:px-4 xs:py-2 xs:text-base sm:px-5 sm:py-2.5 sm:text-lg md:px-6 md:py-3 md:text-xl lg:px-[30px] lg:text-2xl"
              style={{
                position: 'relative',
                zIndex: 10,
              }}
            >
              Quick Install
              <span className={styles.gradientBorder} />
            </Link>
          </div>

          <section className="mx-auto mb-8 flex max-w-[1172px] flex-col justify-between gap-4 px-3 xs:mb-10 xs:gap-5 xs:px-4 sm:gap-6 sm:px-6 md:px-8 lg:flex-row lg:gap-5 lg:px-8 xl:px-10">
            {cards.map((v, i) => (
              <GradientCard key={i} title={v.title} description={v.description} Icon={v.icon} />
            ))}
          </section>

          <footer className="md:mt-30 relative z-10 mx-auto mb-4 flex h-auto min-h-[240px] w-[calc(100%-1rem)] max-w-7xl flex-col justify-between rounded-[8px] bg-[#08231280] px-3 pb-4 pt-5 text-white backdrop-blur-[10px] xs:mb-6 xs:min-h-[260px] xs:w-[calc(100%-1.5rem)] xs:rounded-[10px] xs:px-4 xs:pb-5 xs:pt-6 sm:mb-8 sm:mt-20 sm:min-h-[280px] sm:w-[calc(100%-3rem)] sm:px-5 sm:pb-8 sm:pt-7 md:mb-10 md:min-h-[296px] md:w-[calc(100%-4rem)] md:px-6 md:pb-10 md:pt-8 lg:mt-40">
            <div className="mx-auto flex w-full max-w-[630px] flex-col items-center justify-center gap-4 text-white xs:gap-5 sm:gap-6 md:flex-row md:items-start md:justify-between">
              {footerLinks.map(v => (
                <div
                  key={v.title}
                  className="flex flex-col items-center gap-2 xs:gap-2.5 sm:gap-3 md:items-start"
                >
                  <h3 className="mb-1 text-sm font-bold text-[#D9D9D9] xs:mb-1.5 xs:text-base sm:mb-2 sm:text-base">
                    {v.title}
                  </h3>
                  <div className="flex flex-col items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:items-start md:gap-3">
                    {v.items.map(x => (
                      <a
                        key={x.label}
                        href={x.href}
                        className="text-center text-xs font-medium text-[#D9D9D9] hover:text-white hover:no-underline xs:text-sm sm:text-sm md:text-left md:text-base"
                        target={x.internal ? '_self' : '_blank'}
                      >
                        {x.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <footer className="mx-auto mt-4 flex h-auto w-full max-w-[630px] flex-col items-center gap-3 text-[#D9D9D9] xs:mt-5 xs:gap-3.5 sm:mt-6 sm:gap-4 md:mt-8 md:h-8 md:flex-row md:justify-between md:gap-0">
              <span className="text-center text-[10px] xs:text-xs sm:text-xs md:text-left md:text-sm">{`Copyright © ${new Date().getFullYear()} SpoonAi. Built with SpoonOS.`}</span>
              <div className="flex gap-4 xs:gap-5 sm:gap-8 md:gap-10">
                {socialsLinks.map((v, i) => (
                  <a
                    key={i}
                    href={v.link}
                    target="_blank"
                    className="transition-opacity hover:opacity-80"
                  >
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
