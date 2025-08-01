import { cn } from "@/common/utils";
import Image from "next/image";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

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
        className
      )}
    >
      <h2 className="text-accent font-mono font-semibold text-lg">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="w-screen h-full p-5 pt-20 pb-20">
      <div className="w-full md:w-200 mx-auto h-full space-y-8">
        <ProfilePicture />

        {/* Now & Past - side by side */}
        <div className="flex gap-6 w-full">
          <div className="flex-1">
            <Section title="now">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>
                  lead engineer @{" "}
                  <Link href="https://mistral.ai">mistral ai</Link>
                </span>
              </div>
            </Section>
          </div>

          <div className="flex-1">
            <Section title="past">
              <div className="space-y-2 text-sm">
                <div>
                  founding engineer @{" "}
                  <Link href="https://userled.io">userled</Link>
                </div>
                <div>
                  senior backend @ <Link href="https://paxos.com">paxos</Link>
                </div>
                <div>
                  platform engineer @{" "}
                  <Link href="https://www.thoughtmachine.net/">
                    thought machine
                  </Link>
                </div>
                <div>
                  java dev @{" "}
                  <Link href="https://www.moogsoft.com/">moogsoft</Link>
                </div>
              </div>
            </Section>
          </div>
        </div>

        <Section title="bio">
          <div className="space-y-4">
            <p>
              Hello there! I&apos;m a full-stack engineer with 7+ years of
              experience building scalable systems. I work primarily with
              Golang, TypeScript and Python and I&apos;m currently focused on AI
              agents, graph systems, and distributed architecture.
            </p>
            <p className="text-foreground/70">
              Bristol Computer Science graduate, based in London. Active in
              open-source and always learning something new.
            </p>
          </div>
        </Section>

        <Section title="projects">
          <div className="grid gap-4">
            <div className="border-l-2 border-accent/30 pl-4 space-y-1">
              <h3 className="font-mono text-accent font-medium">summd</h3>
              <p className="text-sm text-foreground/80">
                Chrome extension that lets you search and digest YouTube videos.
                Built with React and OpenAI API because apparently watching
                videos normally wasn&apos;t efficient enough.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4 space-y-1">
              <h3 className="font-mono text-accent font-medium">gitnotes</h3>
              <p className="text-sm text-foreground/80">
                Automatic release notes generated from code changes. Private and
                ongoing, like most side projects that started as &apos;just a
                quick weekend thing&apos; three months ago.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4 space-y-1">
              <h3 className="font-mono text-accent font-medium">ai research</h3>
              <p className="text-sm text-foreground/80">
                Published dissertation on Continual Reinforced Deep Learning.
                Proof that neural networks can learn continuously without
                forgetting everything (unlike me with names).
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4 space-y-1">
              <h3 className="font-mono text-accent font-medium">
                userled backend
              </h3>
              <p className="text-sm text-foreground/80">
                Multi-region SaaS platform serving millions of requests daily.
                Built with Golang, Kafka, and an unhealthy amount of Kubernetes
                YAML. Somehow stays running despite my best efforts.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4 space-y-1">
              <h3 className="font-mono text-accent font-medium">open source</h3>
              <p className="text-sm text-foreground/80">
                Active contributor to various projects. Occasionally fixing bugs
                I didn&apos;t create (those are the good days).
              </p>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

function ProfilePicture() {
  return (
    <div className="flex items-center gap-6 bg-card-background/30 rounded-lg p-6 border border-border/20">
      <div className="w-24 h-24 rounded-lg overflow-hidden ring-1 ring-accent/20">
        <Image
          src="/profile.png"
          width={96}
          height={96}
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          martin<span className="text-accent">.dimitrov</span>
        </h1>
        <p className="text-foreground/60 text-lg">
          lead engineer, moustache owner
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="https://github.com/martin-dimi">github</Link>
          <Link href="https://linkedin.com/in/mitchdimitrov">linkedin</Link>
          <Link href="mailto:martin.dimi97@gmail.com">email</Link>
        </div>
      </div>
    </div>
  );
}
