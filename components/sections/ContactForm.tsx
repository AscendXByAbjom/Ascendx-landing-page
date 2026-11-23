"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, Send } from "lucide-react";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

/**
 * Client-side validated contact form. There is no backend yet — on submit it
 * shows a confirmation. Wire `onSubmit` to an API route or form service later.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") ?? ""))) next.email = "Please enter a valid email address.";
    if (String(data.get("message") ?? "").trim().length < 10) next.message = "Please tell us a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
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
    <form noValidate onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-lift ring-1 ring-line sm:p-8">
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

      <button
        type="submit"
        className="bg-brand-gradient mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full font-semibold text-white shadow-[0_8px_24px_-8px_rgb(91_53_242/0.6)] transition-all hover:brightness-110 active:scale-[0.99] sm:w-auto sm:px-8"
      >
        Send Message <Send aria-hidden className="size-4" />
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
