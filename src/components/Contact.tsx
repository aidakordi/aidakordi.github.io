import { useState, type FormEvent } from "react";
import { siteConfig } from "../config";
import { Eyebrow, buttonStyles } from "./ui";

type Status = { kind: "idle" | "error" | "sending" | "sent"; message: string };

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export function validateContact(values: { name: string; email: string; message: string }): string | null {
  if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
    return "Please fill in your name, email and message.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    return "Please enter a valid email address, like name@company.com.";
  }
  return null;
}

interface ContactProps {
  /** Overridable for tests; defaults to the Formspree link in config.ts */
  endpoint?: string;
}

export function Contact({ endpoint = siteConfig.formEndpoint }: ContactProps) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });

  const update = (field: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const error = validateContact(values);
    if (error) return setStatus({ kind: "error", message: error });
    if (!endpoint) {
      return setStatus({
        kind: "error",
        message: "The message form isn't connected yet. Please reach me on LinkedIn for now.",
      });
    }
    setStatus({ kind: "sending", message: "" });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setValues({ name: "", email: "", message: "" });
      setStatus({ kind: "sent", message: "Thanks! Your message was sent. I'll reply soon." });
    } catch {
      setStatus({ kind: "error", message: "The message couldn't be sent. Please try again, or reach me on LinkedIn." });
    }
  }

  const inputClass =
    "w-full rounded-[10px] border border-line-2 bg-bg px-[15px] py-[13px] text-[15px] text-fg";

  return (
    <section id="contact" className="border-t border-line">
      <div className="wrap flex flex-wrap gap-x-16 gap-y-12 py-16 md:py-24">
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-5">
          <Eyebrow>// contact</Eyebrow>
          <h2 className="text-[clamp(36px,5vw,52px)] leading-[1.05] tracking-[-0.025em]">
            Let's build something together.
          </h2>
          <p className="max-w-[460px] text-[17px] text-muted">
            Have a question or want to connect? Send me a message here or reach me on LinkedIn.
          </p>
          <div className="flex flex-wrap gap-3 pt-1.5">
            <SocialLink href={siteConfig.linkedInUrl} label="LinkedIn">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
            </SocialLink>
            <SocialLink href={siteConfig.gitHubUrl} label="GitHub">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />
            </SocialLink>
          </div>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          aria-label="Contact form"
          className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px] rounded-2xl border border-line bg-surface p-[22px] sm:p-8"
        >
          <Field id="cname" label="Your name">
            <input id="cname" name="name" type="text" autoComplete="name" value={values.name} onChange={update("name")} className={inputClass} />
          </Field>
          <Field id="cemail" label="Your email">
            <input id="cemail" name="email" type="email" autoComplete="email" value={values.email} onChange={update("email")} className={inputClass} />
          </Field>
          <Field id="cmsg" label="Message">
            <textarea id="cmsg" name="message" rows={5} value={values.message} onChange={update("message")} className={`${inputClass} min-h-[120px] resize-y`} />
          </Field>
          <button type="submit" disabled={status.kind === "sending"} className={`${buttonStyles.primary} justify-center`}>
            {status.kind === "sending" ? "Sending…" : "Send message"}
          </button>
          <p role="status" aria-live="polite" className={`min-h-[1.4em] text-sm ${status.kind === "sent" ? "text-accent" : "text-fg-2"}`}>
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm text-fg-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 rounded-[10px] border border-line-2 px-[18px] py-3 text-[15px] text-fg no-underline transition-colors hover:border-fg-2"
    >
      <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
      {label}
    </a>
  );
}
