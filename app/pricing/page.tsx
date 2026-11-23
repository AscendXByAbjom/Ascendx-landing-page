import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricing } from "@/content/pricing";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: pricing.hero.lead,
};

export default function PricingPage() {
  const { hero, candidates, employers, faqs } = pricing;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-linear-to-b from-brand-50/80 via-white to-white">
        <div aria-hidden className="absolute -top-48 left-1/2 -z-10 size-[48rem] -translate-x-1/2 rounded-full bg-brand-200/45 blur-[120px]" />
        <div className="container-x pt-36 pb-20 md:pb-28">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow variant="pill" className="hero-rise">
              {hero.eyebrow}
            </Eyebrow>
            <h1 className="display-1 mt-6">
              <span className="hero-rise block" style={{ ["--d" as string]: "0.08s" }}>
                {hero.titleTop}
              </span>
              <span className="hero-rise text-gradient block pb-1" style={{ ["--d" as string]: "0.16s" }}>
                {hero.titleAccent}
              </span>
            </h1>
            <p className="hero-rise lead mt-6" style={{ ["--d" as string]: "0.24s" }}>
              {hero.lead}
            </p>
          </div>
          <div className="hero-rise mt-14" style={{ ["--d" as string]: "0.32s" }}>
            <PricingPlans candidates={candidates} employers={employers} />
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line/60 bg-mist">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions, answered." lead="Can't find what you're looking for? Our team is happy to help." />
          </Reveal>
          <Reveal stagger={0.06} className="divide-y divide-line rounded-3xl bg-white px-6 shadow-card ring-1 ring-line sm:px-8">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus aria-hidden className="size-5 shrink-0 text-brand-600 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 pr-10 leading-relaxed text-body">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner
        variant="center"
        title="Not sure which plan is right?"
        body="Talk to our team and we'll help you find the best fit for your goals or your hiring plans."
        primary={{ label: "Get Started Free", href: cta.getStarted }}
        secondary={{ label: "Contact Us", href: cta.contact }}
      />
    </>
  );
}
