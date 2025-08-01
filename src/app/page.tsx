import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Home() {
  return (
    <main className="w-screen h-screen p-5">
      <div className="w-200 mx-auto h-full space-y-8">
        <ProfilePicture />
        <Card>
          <CardTitle>bio</CardTitle>
          <CardBody>
            <p className="mb-4">
              I&apos;m a Founding Engineer at Userled, where I&apos;ve been
              turning coffee into scalable systems and leading a team of 10
              engineers to build a SaaS product that somehow achieved $1.5M ARR
              without breaking too often.
            </p>
            <p className="mb-4">
              With 7+ years of experience across the backend engineering
              spectrum, I&apos;ve worked everywhere from fintech (Paxos, Thought
              Machine) to AI infrastructure. I speak fluent Golang, Kubernetes,
              and PostgreSQL, with a PhD in making distributed systems behave
              themselves. Currently obsessed with AI agents, graph systems, and
              convincing microservices to play nicely together.
            </p>
            <p>
              Bristol Computer Science graduate with First-Class Honours, though
              I learned more about debugging from production incidents than any
              textbook. Based in London, very active in open-source when not
              explaining why the database is slow again (it&apos;s always the
              queries).
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardTitle>projects</CardTitle>
          <CardBody>
            <ul className="space-y-3 list-disc list-inside text-foreground/80">
              <li>
                <strong>Summd:</strong> Chrome extension that lets you search
                and digest YouTube videos because apparently watching them
                normally wasn&apos;t efficient enough. Built with Vite, React,
                and the eternal quest for productivity optimization.
              </li>
              <li>
                <strong>GitNotes:</strong> Automatic release notes generated
                directly from code changes. Private and ongoing, like most side
                projects that started as &apos;just a quick weekend thing&apos;
                three months ago.
              </li>
              <li>
                <strong>AI Research Paper:</strong> Published dissertation on
                Continual Reinforced Deep Learning. Proof that you can make
                neural networks learn continuously without forgetting everything
                they knew before (unlike me with names).
              </li>
              <li>
                <strong>Multi-Region SaaS Backend:</strong> Built at Userled -
                serves millions of requests daily with Golang, Kafka, and an
                unhealthy amount of Kubernetes YAML. Features agentic AI
                constructions and somehow stays running despite my best efforts.
              </li>
              <li>
                <strong>Open Source Contributions:</strong> Very active in the
                community, contributing to various projects and occasionally
                fixing bugs I didn&apos;t create (those are the good days).
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}

function CardTitle({ children }: PropsWithChildren) {
  return <h1 className="font-bold text-xl mb-4">{children}</h1>;
}

function CardBody({ children }: PropsWithChildren) {
  return <div className="text-foreground/80">{children}</div>;
}

function Card({ children }: PropsWithChildren) {
  return (
    <div className="bg-card-background rounded-2xl p-10 border-border border-2 flex justify-start items-start flex-col">
      {children}
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="flex items-center gap-6">
      <div className="w-32 h-32 rounded-full bg-gray-300">
        <Image
          src="/profile.png"
          width={128}
          height={128}
          alt="Profile Picture"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Martin Dimitrov</h1>
        <p className="text-foreground/60 text-lg">
          founding engineer, system whisperer
        </p>
        <div className="flex gap-4 text-sm">
          <Link
            target="_blank"
            href="https://github.com/martin-dimi"
            className="hover:text-accent transition-colors"
          >
            github
          </Link>
          <Link
            target="_blank"
            href="https://linkedin.com/in/mitchdimitrov"
            className="hover:text-accent transition-colors"
          >
            linkedin
          </Link>
          <Link
            target="_blank"
            href="mailto:martin.dimi97@gmail.com"
            className="hover:text-accent transition-colors"
          >
            email
          </Link>
        </div>
      </div>
    </div>
  );
}
