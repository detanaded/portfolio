import { Button } from "../ui/button";
import { LinkedinIcon } from "../icons/linkedin";
import { GithubIcon } from "../icons/github";

import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-211.5 flex flex-col gap-8">
        <span className="inline-flex animate-bounce-pause motion-reduce:animate-none w-fit shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground md:text-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
          Open to new roles
        </span>

        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          I build fast, accessible interfaces people enjoy using.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Front end engineer with 4 years shipping React and TypeScript
          products.
        </p>

        <div className="flex flex-col md:flex-row  gap-3">
          <Button className="px-7 py-6 rounded-lg border border-input hover:-translate-y-0.5">
            View projects
          </Button>
          <Button className="px-7 py-6 rounded-lg bg-muted-background text-foreground border border-input hover:bg-secondary hover:-translate-y-0.5">
            Contact Me
          </Button>
        </div>
        <div className="flex gap-8">
          <Link
            href="https://github.com/detanaded/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 w-11  rounded-full text-muted-foreground  transition-colors hover:bg-secondary duration-300"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ernie-hernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 w-11 rounded-full text-muted-foreground transition-colors hover:bg-secondary duration-300"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
