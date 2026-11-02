import { timeline } from "../data/profile";
import { Section, SectionHeading } from "./ui";

export function Experience() {
  return (
    <Section id="experience">
      <div className="flex flex-wrap gap-x-16 gap-y-12">
        <div className="min-w-0 flex-[1_1_280px]">
          <SectionHeading eyebrow="experience" title="Experience & education" />
        </div>
        <div className="flex min-w-0 flex-[2_1_520px] flex-col">
          {timeline.map((entry) => (
            <div
              key={entry.title}
              className="flex flex-wrap gap-x-8 gap-y-2.5 border-b border-line py-7 first:pt-0 last:border-b-0"
            >
              <div className="flex-[0_0_150px] font-mono text-sm text-muted tabular-nums">{entry.when}</div>
              <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-2.5">
                <h3 className="text-[21px] font-medium">{entry.title}</h3>
                <div className="text-[15px] text-fg-2">{entry.org}</div>
                <ul className="arrow-list m-0 mt-1.5 flex max-w-[680px] list-none flex-col gap-2.5 p-0 text-[15.5px] text-fg-2">
                  {entry.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
