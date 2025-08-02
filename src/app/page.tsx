import { cn } from "@/common/utils";
import Image from "next/image";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

export default function Home() {
  return (
    <main className="w-screen h-full p-5 pt-20 pb-20">
      <div className="w-full md:w-200 mx-auto h-full space-y-8">
        <ProfilePicture />

        {/* Now & Past - side by side */}
        <div className="flex gap-6 w-full">
          <Section title="now" className="flex-1">
            <ul className="space-y-2 list-disc list-inside">
              <li>
                lead engineer @ 🤫
                {/* <Link href="https://mistral.ai">mistral.ai</Link> */}
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
            Hello there! Welcome to my website! I&apos;m Martin, a software
            engineer with over 7 years of professional experience building
            systems across the stack.
            <br />
            <br />
            I&apos;ve built backend systems, website frameworks and developer
            tools. These days, I&apos;m particularly focused on AI systems -
            diving deep into LLMs, RAG architectures, and transformers,
            exploring how these technologies can solve real problems.
            <br />
            <br />
            When I&apos;m not at my day job, you&apos;ll find me building
            something on the side. Whether it&apos;s experimenting with new
            frameworks, contributing to open source, or working on projects that
            scratch my own itch, there&apos;s always something brewing.
          </p>
        </Section>

        <Section title="projects">
          <ul className="list-disc list-inside space-y-2 marker:text-accent">
            <li className="space-y-1">
              <span className="text-accent">summd</span>
              <p className="text-sm ml-4">
                Chrome extension that lets you search and digest YouTube videos
                with over a 100 customers.
              </p>
            </li>

            <li className="space-y-1">
              <span className="text-accent">ai research</span>
              <p className="text-sm ml-4">
                Published dissertation on Continual Reinforced Deep Learning.
                Proof that neural networks can learn continuously without
                forgetting everything (unlike me with names).
              </p>
            </li>

            <li className="space-y-1">
              <span className="text-accent">open source</span>
              <p className="text-sm ml-4">
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

function ProfilePicture() {
  return (
    <div className="flex items-center gap-6">
      <div className="w-32 h-32 relative rounded-sm overflow-hidden border-1 border-accent">
        <Image
          src="/profile.png"
          width={128}
          height={128}
          alt="Profile Picture"
          className="object-cover w-full h-full scale-125"
        />
      </div>

      <div className="space-y-2 -mt-3">
        <h1 className="text-4xl font-bold">
          martin<span className="text-accent">.dimitrov</span>
        </h1>
        <p className="text-foreground/60 text-lg">Lead engineer @🤫</p>
        <div className="flex gap-4 text-sm pt-1 text-foreground/60">
          <Link href="https://github.com/martin-dimi">github</Link>
          <Link href="https://linkedin.com/in/mitchdimitrov">linkedin</Link>
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
        "space-y-4 bg-card-background/30 rounded-lg p-6 border border-border/20",
        className,
      )}
    >
      <h2 className="text-accent font-mono font-semibold text-lg">{title}</h2>
      {children}
    </section>
  );
}
