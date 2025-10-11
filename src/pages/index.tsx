import type { ComponentProps, FC, ReactNode, SVGProps } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { SpoonOSLogo } from "../components/shared/spoon-os-logo";
import styles from "./index.module.css";
import { GradientCard } from "../components/shared/gradient-card";
import { Card1Brain } from "../svgs/card-1-brain";
import { Card2Atom } from "../svgs/card-2-atom";
import { Card3Cube } from "../svgs/card-3-cube";

// TODO: font family
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  // static/img/landing-bg.jpg
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

  return (
    <>
      <Head>
        <title>{`${siteConfig.title} - Code Cook Book`}</title>
        <meta
          name="description"
          content="SpoonOS Core Developer Framework - Agentic OS for the Sentient Economy. Build powerful AI agents with Web3 integration."
        />
      </Head>

      {/* landing page container */}
      <div className="bg-black min-h-screen max-w-screen">
        {/* header */}
        {/* TODO: hover style */}
        <header className="h-[110px] flex items-center mb-10 justify-center">
          <div
            className="flex justify-between items-center max-w-[1568px] w-full mx-20"
            style={{
              borderBottom: "1px solid white",
            }}
          >
            <h1 className="flex gap-[18px] items-end">
              <SpoonOSLogo className="size-12" />
              <a href="/" className="text-white">
                SpoonOS
              </a>
            </h1>

            <div className="flex gap-[46px] items-center text-2xl font-medium">
              <Link
                href="docs/getting-started/installation/"
                className="text-white"
              >
                Document
              </Link>
              <a
                href="https://github.com/XSpoonAi/spoon-core"
                target="_blank"
                className="text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* main */}
        <main className="flex flex-col">
          <h2 className="text-white mx-auto text-4xl">SpoonOS</h2>

          <h2 className="flex flex-col text-[100px] font-bold bg-[linear-gradient(92.67deg,#58FF98_0%,#59FF98_8.04%,#5AFF9A_15.48%,#5DFF9C_22.42%,#61FEA0_28.94%,#66FEA4_35.13%,#6CFDAA_41.1%,#73FDB0_46.93%,#7AFCB6_52.71%,#83FBBE_58.54%,#8CFAC6_64.51%,#96F9CF_70.71%,#A1F8D9_77.23%,#ACF7E3_84.16%,#B8F6ED_91.6%,#C4F5F8_99.64%)] bg-clip-text text-transparent mx-auto mt-7 mb-8">
            <span className="text-center">Agentic OS for a</span>
            <span className="text-center">Sentient Economy</span>
          </h2>

          {/* TODO: hover style */}
          <div className="flex gap-5 mx-auto">
            {/* Get Started */}
            <Link
              href="docs/getting-started/quick-start/"
              className="relative inline-block rounded-[50px] px-[30px] py-3 text-2xl font-medium text-[#B1FFCF] bg-transparent hover:no-underline"
              style={{
                position: "relative",
                zIndex: 0,
              }}
            >
              Get Started
              <span className={styles.gradientBorder} />
            </Link>

            {/* Quick Install */}
            <Link
              href="docs/getting-started/installation/"
              className="relative inline-block rounded-[50px] px-[30px] py-3 text-2xl font-medium text-[#B1FFCF] bg-transparent  hover:no-underline"
              style={{
                position: "relative",
                zIndex: 0,
              }}
            >
              Quick Install
              <span className={styles.gradientBorder} />
            </Link>
          </div>
        </main>

        <section className="flex max-w-[1172px] gap-5 mx-auto justify-between mt-[150px] mb-[250px]">
          {cards.map((v, i) => (
            <GradientCard
              key={i}
              title={v.title}
              description={v.description}
              Icon={v.icon}
            />
          ))}
        </section>
      </div>
    </>
  );
}
