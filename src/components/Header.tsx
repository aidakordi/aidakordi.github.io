import { siteConfig } from "../config";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About", hideOnMobile: true },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience", hideOnMobile: true },
];

export function Header() {
  return (
    <header className="border-b border-line">
      <nav aria-label="Main" className="wrap flex flex-wrap items-center justify-between gap-4 py-5">
        <a href="#top" className="font-mono text-lg font-medium text-fg no-underline">
          &lt;<span className="text-accent">{siteConfig.initials}</span> /&gt;
        </a>
        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-2 text-[15px] sm:gap-x-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-fg-2 no-underline transition-colors hover:text-fg ${l.hideOnMobile ? "hidden sm:inline" : ""}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg border border-accent px-[18px] py-2.5 font-medium text-accent no-underline"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
