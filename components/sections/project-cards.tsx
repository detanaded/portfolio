import Image from "next/image";
import type { Project } from "@/types/project";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../icons/github";

type ProjectCardProps = Omit<Project, "id">;

export default function ProjectCard({
  title,
  description,
  stack,
  // image,
  liveUrl,
  repoUrl,
}: ProjectCardProps) {
  return (
    <div className="col-span-4">
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg focuse-within:ring-2 focusin-within:ring-ring">
        <div className="aspect-video bg-placeholder"></div>
        {/* <Image
          src={image}
          alt={title}
          width={600}
          height={200}
          className="w-full h-62 object-fill"
        /> */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((techstack) => (
              <span
                className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                key={techstack}
              >
                {techstack}
              </span>
            ))}
          </div>

          <div className=" flex gap-6">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center  rounded-sm text-sm font-semibold text-primary underline-offset-4 hover:underline outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Live
                <ArrowUpRight className="w-4 h-4  translate-y-0.5" />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-primary underline-offset-4 hover:underline outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Code <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
