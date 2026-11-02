import type { SkillGroup, TimelineEntry } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Front end",
    skills: ["React", "TypeScript", "JavaScript", "Redux", "React Query", "Context API", "Tailwind CSS", "HTML", "CSS"].map(
      (name) => ({ name }),
    ),
  },
  {
    title: "Back end & APIs",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "Microservices" },
      { name: "Python" },
      { name: "C#", familiar: true },
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "JUnit", "Mockito", "pytest", "Maven"].map((name) => ({ name })),
  },
  {
    title: "Databases",
    skills: [
      { name: "Oracle SQL" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "SQL Server", familiar: true },
    ],
  },
  {
    title: "AI-assisted development",
    skills: ["Claude Code", "Cursor", "GitHub Copilot", "Agentic workflows"].map((name) => ({ name })),
  },
  {
    title: "Tools & cloud",
    skills: ["Git", "GitHub", "Bitbucket", "Jira", "Postman", "Azure", "Linux", "Bash", "Agile / Scrum"].map((name) => ({
      name,
    })),
  },
];

export const timeline: TimelineEntry[] = [
  {
    when: "Mar 2024 – Now",
    title: "Full-Stack Software Developer",
    org: "Delmar International Inc. · Montréal, QC",
    points: [
      "Build full-stack web applications with React and TypeScript, backed by Java/Spring Boot REST APIs and Oracle SQL.",
      "Lead the modernization of a legacy enterprise Java application into modular Spring Boot microservices, reducing technical debt and improving performance.",
      "Design reusable React components with hooks, Context, Redux and React Query, delivered as responsive UIs with Tailwind CSS.",
      "Write automated tests with Jest, React Testing Library, JUnit and Mockito, verified through Maven builds.",
      "Find and fix defects across UI, API and database layers through root-cause analysis.",
      "Take part in code and design reviews, sprint planning and estimation, and onboard new team members.",
    ],
  },
  {
    when: "2018 – 2023",
    title: "Bachelor of Engineering, Computer Engineering",
    org: "Concordia University · Montréal, QC",
    points: [
      "Coursework in Data Structures & Algorithms, Databases and Software Engineering.",
      "Honorable Mention Award for Android application design (2021).",
    ],
  },
];
