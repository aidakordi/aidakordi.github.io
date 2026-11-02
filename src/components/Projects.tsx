import { useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../types";
import { ProjectDialog } from "./ProjectDialog";
import { Highlighted, Section, SectionHeading } from "./ui";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="work">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="selected work" title="Projects" />
        <p className="max-w-[440px] text-[15px] text-muted">
          Company work is described at a high level to respect confidentiality. Open any project for the full story.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setSelected(p)} />
        ))}
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

function ProjectCard({ project: p, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-line-2">
      <div className="flex h-[132px] flex-col justify-between border-b border-line bg-surface-2 px-[22px] py-5 font-mono text-[13px] text-muted">
        <div className="flex justify-between gap-3">
          <span
            className={`rounded-md border px-2 py-0.5 text-[11.5px] tracking-[0.04em] uppercase ${
              p.inProgress ? "border-accent/40 text-accent" : "border-line-2 text-fg-2"
            }`}
          >
            {p.kindLabel}
          </span>
          <span>{p.inProgress ? "In progress" : p.when}</span>
        </div>
        <div className="leading-[1.7] break-words text-fg-2">
          {p.flow.map((line) => (
            <div key={line}>
              <Highlighted text={line} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3.5 p-6">
        <h3 className="text-[21px] leading-tight">{p.title}</h3>
        <p className="text-[15px] text-muted">{p.summary}</p>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="rounded-md bg-chip px-2.5 py-1 font-mono text-xs text-fg-2">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-1.5">
          <button
            type="button"
            onClick={onOpen}
            className="cursor-pointer py-1.5 text-[15px] font-medium text-accent underline-offset-4 hover:underline"
            aria-label={`Read the full story: ${p.title}`}
          >
            Read the full story →
          </button>
        </div>
      </div>
    </article>
  );
}
