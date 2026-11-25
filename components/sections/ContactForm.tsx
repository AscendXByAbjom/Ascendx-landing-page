"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, Send } from "lucide-react";
import { cn } from "@/lib/cn";
import { apiUrl, site } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

/**
 * Client-side validated contact form. Posts to the AscendX API (POST /api/contact),
 * which emails the enquiry to the team inbox.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") ?? ""))) next.email = "Please enter a valid email address.";
    if (String(data.get("message") ?? "").trim().length < 10) next.message = "Please tell us a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setSubmitError("");
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          type: String(data.get("type") ?? ""),
          message: String(data.get("message") ?? "").trim(),
          website: String(data.get("website") ?? ""),
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(body.message || `Something went wrong. Please email us at ${site.contactEmail}.`);
        return;
      }
      setSent(true);
    } catch {
      setSubmitError(`We couldn't reach the server. Please try again, or email us at ${site.contactEmail}.`);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-card ring-1 ring-line">
        <span className="grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CircleCheck aria-hidden className="size-7" />
        </span>
        <h2 className="display-3 mt-5">Thanks, message received!</h2>
        <p className="mt-2 text-body">Our team will get back to you within one working day.</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="relative rounded-3xl bg-white p-6 shadow-lift ring-1 ring-line sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" placeholder="Jane Doe" className={cn(field, errors.name && "border-red-400")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" className={cn(field, errors.email && "border-red-400")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
        </Field>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-semibold text-ink">I&apos;m getting in touch as</legend>
        <div className="flex flex-wrap gap-2">
          {["An individual", "An employer", "A partner / university"].map((opt, i) => (
            <label key={opt} className="cursor-pointer">
              <input type="radio" name="type" value={opt} defaultChecked={i === 0} className="peer sr-only" />
              <span className="block rounded-full border border-line px-4 py-2 text-sm font-medium text-ink/75 transition-all peer-checked:border-brand-500 peer-checked:bg-brand-50 peer-checked:text-brand-700 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-100">
                {opt}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <Field label="Message" name="message" error={errors.message}>
          <textarea id="message" name="message" rows={5} placeholder="How can we help?" className={cn(field, "resize-y", errors.message && "border-red-400")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        </Field>
      </div>

      {/* Honeypot: hidden from people, bots fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {submitError && (
        <p role="alert" className="mt-5 text-sm text-red-600">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="bg-brand-gradient mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full font-semibold text-white shadow-[0_8px_24px_-8px_rgb(91_53_242/0.6)] transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {sending ? "Sending..." : "Send Message"} <Send aria-hidden className="size-4" />
      </button>
    </form>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
