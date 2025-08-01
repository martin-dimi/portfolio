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

export default function Home() {
  return (
    <main className="w-screen h-full p-5 pt-20 pb-20">
      <div className="w-full md:w-200 mx-auto h-full space-y-8">
        <ProfilePicture />

        <div className="flex gap-4 w-full">
          <Card className="flex-1 border-l-4 border-l-accent">
            <CardTitle>now</CardTitle>
            <CardBody>
              <ul
                role="list"
                className="list-disc list-inside ml-1 marker:text-accent"
              >
                <li>
                  lead engineer @
                  <Link href="https://mistral.ai">Mistral AI</Link>
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card className="flex-1">
            <CardTitle>past</CardTitle>
            <CardBody>
              <ul
                role="list"
                className="list-disc list-inside ml-1 marker:text-accent"
              >
                <li>
                  founding engineer @
                  <Link href="https://userled.io">userled</Link>
                </li>
                <li>
                  senior backend dev @
                  <Link href="https://userled.com">paxos</Link>
                </li>

                <li>
                  platform engineer @
                  <Link href="https://www.thoughtmachine.net/">TM</Link>
                </li>

                <li>
                  java dev @
                  <Link href="https://www.moogsoft.com/">moogsoft</Link>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>

        <Card>
          <CardTitle>bio</CardTitle>
          <CardBody>
            <p className="mb-4">
              Hello there! I&apos;m a full-stack engineer with 7+ years of
              experience building scalable systems. I work primarily with
              Golang, Typescript and Python and I&apos;m currently focused on AI
              agents, graph systems, and distributed architecture.
            </p>
            <p>
              Bristol Computer Science graduate, based in London. Active in
              open-source and always learning something new.
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardTitle>projects</CardTitle>
          <CardBody>
            <ul className="space-y-3 list-disc list-inside text-foreground/80 marker:text-accent">
              <li>
                <strong className="text-foreground">Summd:</strong> Chrome
                extension that lets you search and digest YouTube videos because
                apparently watching them normally wasn&apos;t efficient enough.
                Built with Vite, React, and the eternal quest for productivity
                optimization.
              </li>
              <li>
                <strong className="text-foreground">GitNotes:</strong> Automatic
                release notes generated directly from code changes. Private and
                ongoing, like most side projects that started as &apos;just a
                quick weekend thing&apos; three months ago.
              </li>
              <li>
                <strong className="text-foreground">AI Research Paper:</strong>{" "}
                Published dissertation on Continual Reinforced Deep Learning.
                Proof that you can make neural networks learn continuously
                without forgetting everything they knew before (unlike me with
                names).
              </li>
              <li>
                <strong className="text-foreground">
                  Multi-Region SaaS Backend:
                </strong>{" "}
                Built at Userled - serves millions of requests daily with
                Golang, Kafka, and an unhealthy amount of Kubernetes YAML.
                Features agentic AI constructions and somehow stays running
                despite my best efforts.
              </li>
              <li>
                <strong className="text-foreground">
                  Open Source Contributions:
                </strong>{" "}
                Very active in the community, contributing to various projects
                and occasionally fixing bugs I didn&apos;t create (those are the
                good days).
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}

function CardTitle({ children }: PropsWithChildren) {
  return <h1 className="font-bold text-xl mb-4 text-accent">{children}</h1>;
}

function CardBody({ children }: PropsWithChildren) {
  return <div className="text-foreground/80">{children}</div>;
}

function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "bg-card-background rounded-2xl p-10 border-border border-2 flex justify-start items-start flex-col hover:border-accent/50 transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="flex items-center gap-6">
      <div className="w-32 h-32 rounded-full bg-gray-300 ring-2 ring-accent/20">
        <Image
          src="/profile.png"
          width={128}
          height={128}
          alt="Profile Picture"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          Martin <span className="text-accent">Dimitrov</span>
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
