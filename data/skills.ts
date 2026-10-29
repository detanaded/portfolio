export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    items: ["React", "Typescript", "Next.js", "Tailwind CSS", "Tanstack"],
  },
  {
    title: "Craft",
    items: [
      "Design systems",
      "Web performance",
      "Accessibility (WCAG)",
      "Animation",
    ],
  },
  {
    title: "Tooling",
    items: ["Vite", "Vitest", "Playwright", "Figma", "CI/CD"],
  },
];
