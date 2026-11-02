import { siteConfig } from "../config";
import { buttonStyles } from "./ui";

export function Hero() {
  return (
    <section id="top">
      <div className="wrap flex flex-wrap items-center gap-10 py-14 md:gap-16 md:pt-[104px] md:pb-28">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[22px]">
          <span className="inline-flex items-center gap-2.5 font-mono text-[13px] text-fg-2">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_0_4px_rgb(94_234_212/0.15)]" aria-hidden="true" />
            Open to full-stack roles · {siteConfig.location}
          </span>
          <h1 className="text-[clamp(52px,8vw,92px)] leading-[0.98] font-bold tracking-[-0.035em]">{siteConfig.name}</h1>
          <p className="max-w-[600px] font-display text-[clamp(21px,2.6vw,28px)] leading-[1.3] text-fg-2">
            Full-stack software developer building web apps with React, TypeScript, Java and Spring Boot.
          </p>
          <p className="max-w-[540px] text-[17px] text-muted">
            2+ years shipping production features end to end, from reusable UI components to secure REST APIs and SQL
            data access, with tests at every layer.
          </p>
          <div className="flex flex-wrap gap-3.5 pt-1.5">
            <a className={buttonStyles.primary} href="#work">
              View my work
            </a>
            <a className={buttonStyles.ghost} href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <CodeCard />
      </div>
    </section>
  );
}

const fields: [string, string][] = [
  ["String name,     ", '"Aida Kordi"'],
  ["String role,     ", '"Full-Stack Developer"'],
  ["List frontend,   ", "React, TypeScript"],
  ["List backend,    ", "Java, Spring Boot"],
  ["List testing,    ", "Jest, JUnit, Mockito"],
  ["List aiTools,    ", "Claude Code, Cursor"],
];

function CodeCard() {
  return (
    <div
      className="min-w-0 flex-[1_1_400px] overflow-hidden rounded-2xl border border-line bg-surface"
      aria-label="Profile summary written as code"
    >
      <div className="flex items-center gap-2 border-b border-line px-[18px] py-3.5" aria-hidden="true">
        <i className="size-3 rounded-full bg-line-2" />
        <i className="size-3 rounded-full bg-line-2" />
        <i className="size-3 rounded-full bg-line-2" />
        <span className="ml-2.5 font-mono text-[13px] text-muted">Developer.java</span>
      </div>
      <pre className="m-0 overflow-x-auto p-6 font-mono text-[14.5px] leading-[1.85] whitespace-pre-wrap text-fg">
        <span className="text-syntax-keyword">public record</span> Developer({"\n"}
        {fields.map(([field, value]) => (
          <span key={field}>
            {"  "}
            {field}
            <span className="text-muted">// </span>
            <span className="text-accent">{value}</span>
            {"\n"}
          </span>
        ))}
        {"  "}
        <span className="text-syntax-keyword">boolean</span> openToWork <span className="text-muted">// </span>
        <span className="text-syntax-bool">true</span>
        {"\n"}) {"{}"}
        <span className="inline-block h-[1.1em] w-[9px] animate-blink bg-accent align-[-3px]" aria-hidden="true" />
      </pre>
    </div>
  );
}
