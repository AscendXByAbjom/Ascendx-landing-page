import type { Metadata } from "next";
import { Building2, Mail, MessageCircle } from "lucide-react";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconTile } from "@/components/ui/IconTile";
import { site, socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the AscendX Career Platform team.",
};

// PLACEHOLDER contact details
const channels = [
  {
    icon: Mail,
    tone: "violet",
    title: "General enquiries",
    body: site.contactEmail,
    href: `mailto:${site.contactEmail}`,
  },
  {
    icon: Building2,
    tone: "teal",
    title: "Employers & partnerships",
    body: "Book a demo of the recruitment platform.",
    href: "/employers",
  },
  {
    icon: MessageCircle,
    tone: "orange",
    title: "Support",
    body: "We reply within one working day.",
    href: `mailto:${site.contactEmail}`,
  },
] as const;

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-brand-50/80 via-white to-mist">
      <div
        aria-hidden
        className="absolute -top-48 right-[-10%] -z-10 size-[44rem] rounded-full bg-brand-200/45 blur-[120px]"
      />
      <div className="container-x grid gap-14 pt-36 pb-24 lg:grid-cols-[0.9fr_1.2fr] lg:gap-20">
        <div>
          <Eyebrow variant="pill" className="hero-rise">
            Contact
          </Eyebrow>
          <h1 className="display-1 mt-6">
            <span
              className="hero-rise block"
              style={{ ["--d" as string]: "0.08s" }}
            >
              Let&apos;s talk about
            </span>
            <span
              className="hero-rise text-gradient block pb-1"
              style={{ ["--d" as string]: "0.16s" }}
            >
              your next step.
            </span>
          </h1>
          <p
            className="hero-rise lead mt-6 max-w-md"
            style={{ ["--d" as string]: "0.24s" }}
          >
            Questions about the platform, partnerships or hiring with AscendX?
            Send us a message and we&apos;ll be in touch.
          </p>

          <Reveal as="ul" stagger={0.08} className="mt-10 space-y-3">
            {channels.map((c) => (
              <li key={c.title}>
                <a
                  href={c.href}
                  className="group flex items-center gap-4 rounded-2xl p-3 -mx-3 transition-colors hover:bg-white hover:shadow-card"
                >
                  <IconTile icon={c.icon} tone={c.tone} />
                  <span>
                    <span className="block font-bold text-ink">{c.title}</span>
                    <span className="block text-sm text-body">{c.body}</span>
                  </span>
                </a>
              </li>
            ))}
          </Reveal>

          <div className="mt-10 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full bg-white text-ink/70 shadow-card ring-1 ring-line transition-all hover:-translate-y-0.5 hover:text-brand-600"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-rise" style={{ ["--d" as string]: "0.3s" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
