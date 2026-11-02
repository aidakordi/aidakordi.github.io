import { Section, SectionHeading } from "./ui";

const facts = [
  { value: "2+ years", label: "professional full-stack experience" },
  { value: "B.Eng.", label: "Computer Engineering, Concordia" },
  { value: "Award", label: "Honorable Mention, Android app design" },
];

export function About() {
  return (
    <Section id="about">
      <div className="flex flex-wrap gap-x-16 gap-y-12">
        <div className="min-w-0 flex-[1_1_280px]">
          <SectionHeading eyebrow="about" title="A bit about me" />
        </div>
        <div className="flex max-w-[680px] min-w-0 flex-[2_1_520px] flex-col gap-5 text-lg leading-[1.7] text-fg-2">
          <p>
            I'm a full-stack developer at Delmar International in Montréal, where I build company web applications
            across the whole stack: React and TypeScript on the front end, Java and Spring Boot services on the back
            end, and Oracle SQL underneath.
          </p>
          <p>
            I care about code that stays easy to change. I design reusable components, write tests at multiple levels,
            and I'm currently leading the move of a legacy enterprise Java application to a modular Spring Boot
            microservices architecture. I use AI tools like Claude Code and Cursor every day, and I've built AI
            automation that helps my team review code faster.
          </p>
          <div className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.value} className="flex flex-col gap-1 rounded-xl border border-line bg-surface p-5">
                <strong className="font-display text-[28px] leading-tight text-fg">{f.value}</strong>
                <span className="text-sm leading-snug text-muted">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
