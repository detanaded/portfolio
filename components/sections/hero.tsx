import { Button } from "../ui/button";
import { LinkedinIcon } from "../icons/linkedin";
import { GithubIcon } from "../icons/github";
export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-211.5 flex flex-col gap-8">
        <span className="inline-flex w-fit shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
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
          <Button>View projects</Button>
          <Button className="bg-muted-background hover:">Contact Me</Button>
        </div>
        <div className="flex gap-8">
          <GithubIcon />
          <LinkedinIcon />
        </div>
      </div>
    </section>
  );
}
