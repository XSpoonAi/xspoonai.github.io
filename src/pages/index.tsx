import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { SpoonOSLogo } from "../components/shared/spoon-os-logo";

// TODO: font family
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

      {/* landing page container */}
      <div className="bg-black min-h-screen max-w-screen">
        {/* header */}
        {/* TODO: hover style */}
        <header className="h-[110px] flex items-center">
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
      </div>
    </>
  );
}
