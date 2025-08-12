import { cn } from "@/common/utils";
import { ConsoleLogs } from "@/common/console-logs";
import { KonamiCheatCode } from "@/common/konami-cheat-code";
import Image from "next/image";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

export default function Home() {
  return (
    <main className="w-screen h-full p-4 sm:p-5 pt-12 sm:pt-20 pb-12 sm:pb-20">
      <ConsoleLogs />
      <KonamiCheatCode />
      <div className="w-full md:w-200 mx-auto h-full space-y-6 sm:space-y-8">
        <ProfilePicture />

        {/* Now & Past - stack on mobile, side by side on desktop */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
          <Section title="now" className="flex-1">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                lead engineer @{" "}
                <Link href="https://mistral.ai">mistral.ai</Link>
              </li>
            </ul>
          </Section>

          <Section title="past" className="flex-1">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                founding engineer @{" "}
                <Link href="https://userled.io">userled</Link>
              </li>
              <li>
                senior backend @ <Link href="https://paxos.com">paxos</Link>
              </li>
              <li>
                platform engineer @{" "}
                <Link href="https://www.thoughtmachine.net/">
                  thought machine
                </Link>
              </li>
              <li>
                java dev @{" "}
                <Link href="https://www.moogsoft.com/">moogsoft</Link>
              </li>
            </ul>
          </Section>
        </div>

        <Section title="bio">
          <p>
            <HelloThere /> I&apos;m Martin, a senior software engineer with over
            7 years of experience building and scaling systems across the full
            stack. I&apos;ve had the privilege of leading engineering teams and
            architecting solutions that serve millions of users.
            <br />
            <br />
            My expertise spans backend systems, web applications, and developer
            tooling. Currently, I&apos;m deep in the AI space, working with
            LLMs, RAG architectures, and transformer models to solve complex
            problems at scale.
            <br />
            <br />
            Outside of work, I contribute to open source projects and build
            tools that scratch my own itch. Usually involves way too much coffee
            and questionable commit messages at 2am.
          </p>
        </Section>

        <Section title="projects">
          <ul className="list-disc list-inside space-y-2 marker:text-accent">
            <li className="space-y-1">
              <span className="text-accent font-mono">summd</span>
              <p className="text-sm ml-3.5">
                Chrome extension that lets you search and digest YouTube videos
                with over a 100 customers.
              </p>
            </li>

            <li className="space-y-1">
              <span className="text-accent font-mono">ai-research</span>
              <p className="text-sm ml-3.5">
                Published dissertation on Continual Reinforced Deep Learning.
                Proof that neural networks can learn continuously without
                forgetting everything (unlike me with names).
              </p>
            </li>

            <li className="space-y-1">
              <span className="text-accent font-mono">open-source</span>
              <p className="text-sm ml-3.5">
                Active contributor to various projects. Occasionally fixing bugs
                I didn&apos;t create (those are the good days).
              </p>
            </li>
          </ul>
        </Section>
      </div>
    </main>
  );
}

function HelloThere() {
  return (
    <span className="group relative inline-block cursor-pointer">
      <span className="font-mono text-foreground/70 transition-all duration-300 group-hover:text-accent group-hover:scale-105 inline-block">
        Hello there!
      </span>
      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card-background border border-border/40 px-2 py-1 rounded text-xs font-mono text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        General Kenobi! ⚔️
      </span>
    </span>
  );
}

function ProfilePicture() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
      <div className="w-24 h-24 sm:w-32 sm:h-32 relative rounded-sm overflow-hidden border-1 border-accent">
        <Image
          src="/profile.png"
          width={128}
          height={128}
          alt="Profile Picture"
          className="object-cover w-full h-full scale-125"
          priority
        />
      </div>

      <div className="space-y-2 -mt-0 sm:-mt-3 text-center sm:text-left">
        <h1 className="text-2xl sm:text-4xl font-bold">
          martin<span className="text-accent">.dimitrov</span>
          <span className="animate-pulse text-accent text-lg sm:text-2xl">
            _
          </span>
        </h1>
        <p className="text-foreground/60 text-base sm:text-lg">
          Lead engineer @{" "}
          <Link href="https://mistral.ai">
            <span className="underline font-medium hover:text-accent transition-colors">
              mistral.ai
            </span>
          </Link>
        </p>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-sm pt-1 text-foreground/60 font-mono">
          <Link href="https://github.com/martin-dimi">github</Link>
          <span className="text-foreground/40">|</span>
          <Link href="https://linkedin.com/in/mitchdimitrov">linkedin</Link>
          <span className="text-foreground/40">|</span>
          <Link href="mailto:martin.dimi97@gmail.com">email</Link>
        </div>
      </div>
    </div>
  );
}

function Link({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <NextLink
      target="_blank"
      href={href}
      className="underline font-medium hover:text-accent transition-colors"
    >
      {children}
    </NextLink>
  );
}

function Section({
  title,
  children,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <section
      className={cn(
        "space-y-3 sm:space-y-4 bg-card-background/30 rounded-lg p-4 sm:p-6 border border-border/20",
        className
      )}
    >
      <h2 className="text-accent font-mono font-semibold text-base sm:text-lg">
        {title}
      </h2>
      {children}
    </section>
  );
}
