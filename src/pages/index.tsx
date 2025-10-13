import type { FC, ReactNode, SVGProps } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { SpoonOSLogo } from "../components/shared/spoon-os-logo";
import styles from "./index.module.css";
import { GradientCard } from "../components/shared/gradient-card";
import { Card1Brain } from "../svgs/card-1-brain";
import { Card2Atom } from "../svgs/card-2-atom";
import { Card3Cube } from "../svgs/card-3-cube";
import "@fontsource/dm-sans"; // Defaults to weight 400
import "@fontsource/dm-sans/400.css"; // Specify weight
import "@fontsource/dm-sans/400-italic.css"; // Specify weight and style
import { DiscordLogo, NeoLogo, XLogo } from "../components/shared/social-logos";

const socialsLinks = [
  {
    icon: DiscordLogo,
    link: "https://discord.com/invite/G6y3ZCFK4h",
  },
  {
    icon: NeoLogo,
    // TODO: neo logo?
    link: "https://discord.com/invite/G6y3ZCFK4h",
  },
  {
    icon: XLogo,
    link: "https://x.com/SpoonOS_ai",
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const cards: Array<{
    title: string;
    icon: FC<SVGProps<SVGSVGElement>>;
    description: string;
  }> = [
    {
      icon: Card1Brain,
      title: `Intelligent \n Agents`,
      description:
        "Build powerful ReAct agents with reasoning and action capabilities. Support for multiple LLM providers including OpenAI, Anthropic, and DeepSeek.",
    },
    {
      icon: Card2Atom,
      title: "Web3 \n Native",
      description:
        "First-class Web3 integration with blockchain tools, DeFi protocols, and decentralized infrastructure. Built for the sentient economy.",
    },
    {
      icon: Card3Cube,
      title: "Extensible \n Architecture",
      description:
        "Modular tool system with MCP protocol support. Easy to extend with custom tools and integrate with external APIs and services.",
    },
  ];

  const footerLinks: Array<{
    title: string;
    items: Array<{ label: string; href: string; internal?: boolean }>;
  }> = [
    {
      title: "Documentation",
      items: [
        {
          label: "Getting Started",
          href: "docs/getting-started/quick-start/",
          internal: true,
        },
        {
          label: "Installation",
          href: "docs/getting-started/installation/",
          internal: true,
        },
        {
          label: "Configuration",
          href: "docs/getting-started/configuration/",
          internal: true,
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          label: "GitHub",
          href: "https://github.com/XSpoonAi/spoon-core",
        },
        {
          label: "Discord",
          href: "https://discord.gg/G6y3ZCFK4h",
        },
        {
          label: "Issues",
          href: "https://github.com/XSpoonAi/spoon-core/issues",
        },
      ],
    },
    {
      title: "More",
      items: [
        {
          label: "SpoonOS Landing",
          href: "https://spoonai.io",
        },
        {
          label: "Examples",
          href: "https://github.com/XSpoonAi/spoon-core/tree/main/examples",
        },
      ],
    },
  ] as const;

  return (
    <>
      <Head>
        <title>{`${siteConfig.title} - Code Cook Book`}</title>
        <meta
          name="description"
          content="SpoonOS Core Developer Framework - Agentic OS for the Sentient Economy. Build powerful AI agents with Web3 integration."
        />
      </Head>

      <div className="bg-[#020402] min-h-screen max-w-screen font-sans">
        <header
          className="h-[74px] flex items-center justify-center mb-10"
          style={{
            borderBottom: "0.5px solid white",
          }}
        >
          <div className="flex justify-between items-center max-w-[1568px] w-full mx-20 h-full">
            <h1 className="flex gap-3 items-center h-full my-auto">
              <SpoonOSLogo className="size-8" />
              <a href="/" className="text-white text-xl">
                SpoonOS
              </a>
            </h1>

            <div className="flex gap-[46px] items-center">
              <Link
                href="docs/getting-started/installation/"
                className="text-[#D9D9D9] hover:text-white hover:no-underline font-medium"
              >
                Document
              </Link>
              <a
                href="https://github.com/XSpoonAi/spoon-core"
                target="_blank"
                className="text-[#D9D9D9] hover:text-white hover:no-underline font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <main
          className="flex flex-col min-h-[1333px] mt-20"
          style={{
            backgroundImage: 'url("/img/home-bg.jpg")',
            backgroundSize: "100% 100%",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* TODO: image? */}
          <h2 className="text-white mx-auto text-5xl mb-6">SpoonOS</h2>

          <h2 className="flex flex-col text-[100px] font-bold bg-[linear-gradient(92.67deg,#58FF98_0%,#59FF98_8.04%,#5AFF9A_15.48%,#5DFF9C_22.42%,#61FEA0_28.94%,#66FEA4_35.13%,#6CFDAA_41.1%,#73FDB0_46.93%,#7AFCB6_52.71%,#83FBBE_58.54%,#8CFAC6_64.51%,#96F9CF_70.71%,#A1F8D9_77.23%,#ACF7E3_84.16%,#B8F6ED_91.6%,#C4F5F8_99.64%)] bg-clip-text text-transparent mx-auto mt-7 mb-8">
            <span className="text-center font-sans">Agentic OS for a</span>
            <span className="text-center font-sans">Sentient Economy</span>
          </h2>

          {/* TODO: font OPPO Sans 4.0 */}
          <div className="flex gap-5 mx-auto">
            <Link
              href="docs/getting-started/quick-start/"
              className="relative inline-block rounded-[50px] px-[30px] py-3 text-2xl font-medium text-[#B1FFCF] bg-transparent hover:no-underline hover:text-[#B1FFCFB2] hover:shadow-[inset_0_0_20px_5px_#58FF9880] transition-all"
              style={{
                position: "relative",
                zIndex: 10,
              }}
            >
              Get Started
              <span className={styles.gradientBorder} />
            </Link>

            <Link
              href="docs/getting-started/installation/"
              className="relative inline-block rounded-[50px] px-[30px] py-3 text-2xl font-medium text-[#B1FFCF] bg-transparent  hover:no-underline hover:text-[#B1FFCFB2] hover:shadow-[inset_0_0_20px_5px_#58FF9880] transition-all"
              style={{
                position: "relative",
                zIndex: 10,
              }}
            >
              Quick Install
              <span className={styles.gradientBorder} />
            </Link>
          </div>

          <section className="flex max-w-[1172px] gap-5 mx-auto justify-between mt-[128px]">
            {cards.map((v, i) => (
              <GradientCard
                key={i}
                title={v.title}
                description={v.description}
                Icon={v.icon}
              />
            ))}
          </section>

          <footer className="flex flex-col mx-auto text-white mt-[250px] relative z-10 max-w-7xl w-full h-[296px] mb-10 pt-8 pb-10 justify-between backdrop-blur-[10px] bg-[#08231280] rounded-[10px]">
            <div className="flex gap-[128px] text-white justify-center w-[630px] mx-auto">
              {footerLinks.map((v) => (
                <div className="flex flex-col flex-1">
                  <h3 className="text-[#D9D9D9] font-bold">{v.title}</h3>
                  <div className="flex flex-col gap-2">
                    {v.items.map((x) => (
                      <a
                        href={x.href}
                        className="text-[#D9D9D9] hover:text-white hover:no-underline font-medium text-nowrap"
                        target={x.internal ? "_self" : "_blank"}
                      >
                        {x.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* TODO: border and shadow */}
            {/* <span className={styles.footerGradientBorder}></span> */}

            <footer className="text-[#D9D9D9] w-[644px] mx-auto flex justify-between h-8 items-center">
              <span>
                {`Copyright © ${new Date().getFullYear()} SpoonAi. Built with SpoonOS.`}
              </span>
              <div className="flex gap-10">
                {/* TODO: neo link and neo logo? */}
                {socialsLinks.map((v) => (
                  <a href={v.link} target="_blank">
                    <v.icon />
                  </a>
                ))}
              </div>
            </footer>
          </footer>
        </main>
      </div>
    </>
  );
}
