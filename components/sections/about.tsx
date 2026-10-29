import Image from "next/image";

import { skillGroups } from "@/data/skills";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20 md:py-24">
      <div className="mx-auto w-full max-w-300 px-5 md:px-8 grid grid-cols-4 gap-10 md:grid-cols-12 md:gap-6">
        <div className="col-span-4 aspect-4/5 max-w-sm rounded-2xl bg-placeholder relative overflow-hidden ">
          <Image
            src="/images/Ernie-Profile.jpg"
            alt="Ernie Hernandez front end developer"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-4 md:col-span-7 md:col-start-6">
          <div className="mb-12 flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A bit about me
            </h2>
          </div>
          <div className="flex flex-col gap-4 text-muted-foreground">
            <p>
              I'm a front end engineer who cares about the details: how a page
              loads, how it reads with a screen reader, and how it feels on a
              cheap phone.
            </p>
            <p>
              Lately I've led design system work and performance projects.
              Outside work, I hike and tinker with generative art.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
