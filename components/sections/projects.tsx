import ProjectCard from "./project-cards";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-auto-mt-16 py-20 md:py-24">
      <div className="mx-auto w-full max-w-300 px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-2">
          <p className="uppercase text-primary font-semibold text-xs tracking-widest">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold tracking-tigbht md:text-4xl text-foreground">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6 md:grid-cols-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
