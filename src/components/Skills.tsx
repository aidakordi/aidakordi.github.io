import { skillGroups } from "../data/profile";
import { Section, SectionHeading } from "./ui";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="skills" title="What I work with" />
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {skillGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-[26px]">
            <h3 className="text-lg">{group.title}</h3>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {group.skills.map((s) => (
                <li
                  key={s.name}
                  className={`rounded-full border border-line-2 px-[13px] py-[7px] text-sm ${s.familiar ? "text-fg-2" : "text-fg"}`}
                >
                  {s.name}
                  {s.familiar && " (familiar)"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
