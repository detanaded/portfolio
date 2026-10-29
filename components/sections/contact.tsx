import { Button } from "../ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-20 md:py-24">
      <div className="mx-auto max-width-[1200px] px-5 md:px-8">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-secondary p-8 md:items-center md:p-16 md:text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let's build something together.
          </h2>
          <p className="max-w-lg text-muted-foreground">
            I'm open to front end and design systems roles. My inbox is always
            open.
          </p>
          <Link href="mailto:ernie.servellon@gmail.com">
            <Button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-all hover:-translate-y-0.5 bg-primary text-primary-foreground hover:opacity-90 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Mail /> ernie.servellon@gmail.com
            </Button>
          </Link>
          <div className="flex gap-8">
            <Link
              href="https://github.com/detanaded/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <GithubIcon className="bg-red" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ernie-hernandez"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
