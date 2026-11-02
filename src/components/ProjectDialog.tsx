import { useEffect, useRef } from "react";
import type { Project } from "../types";
import { Eyebrow } from "./ui";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    } else if (!project && dialog.open) {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    }
  }, [project]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto max-h-[calc(100vh-48px)] w-[min(760px,calc(100vw-32px))] rounded-[18px] border border-line-2 bg-surface p-0 text-fg"
    >
      {project && (
        <div className="flex flex-col gap-[22px] p-6 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 flex-col gap-2.5">
              <Eyebrow>// {project.kindLabel.toLowerCase()}</Eyebrow>
              <h2 id="project-dialog-title" className="text-[clamp(26px,4vw,34px)] leading-[1.1] tracking-[-0.02em]">
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-[10px] border border-line-2 text-fg hover:border-fg-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {[
              ["Role", project.role],
              ["When", project.when],
              ["Stack", project.stack.join(" · ")],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 bg-surface-2 px-4 py-3.5">
                <dt className="font-mono text-[11.5px] tracking-[0.06em] text-muted uppercase">{label}</dt>
                <dd className="m-0">{value}</dd>
              </div>
            ))}
          </dl>

          <DialogSection title="The problem">
            <p>{project.problem}</p>
          </DialogSection>
          <DialogSection title="What I built">
            <ul className="arrow-list m-0 flex list-none flex-col gap-2 p-0">
              {project.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </DialogSection>
          <DialogSection title="The result">
            <p>{project.result}</p>
          </DialogSection>
          {project.confidential && (
            <p className="border-t border-line pt-4 text-sm text-muted">
              Company project. Details are kept high level to respect confidentiality.
            </p>
          )}
        </div>
      )}
    </dialog>
  );
}

function DialogSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 text-base leading-[1.65] text-fg-2">
      <h3 className="text-[17px] text-fg">{title}</h3>
      {children}
    </div>
  );
}
