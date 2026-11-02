import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="font-mono text-sm text-accent">{children}</div>;
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <Eyebrow>// {eyebrow}</Eyebrow>
      <h2 className="text-[clamp(32px,4vw,40px)] leading-[1.1] tracking-[-0.02em]">{title}</h2>
    </div>
  );
}

export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-line first:border-t-0">
      <div className="wrap py-16 md:py-24">{children}</div>
    </section>
  );
}

const buttonBase =
  "inline-flex items-center gap-2.5 rounded-[10px] px-[26px] py-3.5 text-base no-underline transition cursor-pointer";

export const buttonStyles = {
  primary: `${buttonBase} bg-accent font-semibold text-bg hover:-translate-y-px disabled:opacity-60`,
  ghost: `${buttonBase} border border-line-2 font-medium text-fg hover:border-fg-2`,
};

/** Renders text where **double asterisks** mark highlighted words. */
export function Highlighted({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") ? (
          <b key={i} className="font-medium text-accent">
            {part.slice(2, -2)}
          </b>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
