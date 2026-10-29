import Image from "next/image";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
