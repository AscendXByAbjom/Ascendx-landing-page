import type { Metadata } from "next";
import Image from "next/image";
import { Heart, ThumbsUp, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CareerFeedPhone } from "@/components/mockups/CareerFeedPhone";
import { FloatingFeatureCard } from "@/components/mockups/FloatingFeatureCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatsGrid } from "@/components/sections/StatsBand";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { IretiMark } from "@/components/ui/IretiMark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { img } from "@/content/images";
import { candidates } from "@/content/candidates";

export const metadata: Metadata = {
  title: "Candidates",
  description: candidates.hero.lead,
};

export default function CandidatesPage() {
  const { hero, journey, steps, proof, final } = candidates;

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden bg-linear-to-b from-brand-50/70 via-white to-white">
        <div aria-hidden className="absolute -top-40 right-[-10%] -z-10 size-[44rem] rounded-full bg-brand-200/40 blur-[110px]" />
        <div aria-hidden className="absolute bottom-0 left-[-10%] -z-10 size-[30rem] rounded-full bg-sky-200/40 blur-[110px]" />

        <div className="container-x grid items-center gap-14 pt-32 pb-16 lg:min-h-[min(100svh,860px)] lg:grid-cols-[1fr_1.1fr] lg:pt-36 lg:pb-20">
          <div>
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
            <p className="hero-rise lead mt-6 max-w-lg" style={{ ["--d" as string]: "0.24s" }}>
              {hero.lead}
            </p>
            <div className="hero-rise mt-9" style={{ ["--d" as string]: "0.32s" }}>
              <Button href={hero.primary.href} size="lg" arrow>
                {hero.primary.label}
              </Button>
            </div>
            <ul className="hero-rise mt-12 grid max-w-lg grid-cols-3 gap-4" style={{ ["--d" as string]: "0.4s" }}>
              {hero.labels.map((l) => (
                <li key={l.label} className="flex flex-col gap-2 text-[0.8125rem] leading-snug font-semibold text-ink/80">
                  <span className="grid size-9 place-items-center rounded-xl bg-white text-brand-600 shadow-card ring-1 ring-line">
                    <l.icon aria-hidden className="size-4.5" />
                  </span>
                  {l.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-rise relative mx-auto h-[520px] w-full max-w-[600px] sm:h-[580px]" style={{ ["--d" as string]: "0.25s" }}>
            <div aria-hidden className="bg-brand-gradient absolute top-[12%] left-[8%] h-[70%] w-[46%] rotate-[-8deg] rounded-[2.5rem] opacity-90" />
            <div className="absolute top-[4%] left-0 h-[86%] w-[62%] overflow-hidden rounded-[2.5rem] shadow-lift">
              <Image
                src={img.heroIndividuals}
                alt="Smiling young professional"
                fill
                priority
                sizes="(min-width: 1024px) 380px, 62vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 left-[38%] max-sm:left-[34%]">
              <CareerFeedPhone className="w-[210px] sm:w-[236px]" />
            </div>
            <div className="absolute top-[24%] -right-2 hidden flex-col gap-3 sm:flex lg:-right-10">
              <FloatingFeatureCard icon={IretiMark} title="Ireti, AI Career Coach" subtitle="Get personalised guidance" variant="violet" className="[&>div]:w-[220px]" />
              <FloatingFeatureCard icon={ThumbsUp} title="Recommended for you" subtitle="Careers · Skills · Jobs" variant="teal" floatDelay={1} className="[&>div]:w-[220px]" />
              <FloatingFeatureCard icon={Zap} title="Apply with one click" subtitle="Use your career profile" variant="pink" floatDelay={2} className="[&>div]:w-[220px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Career journey ───────────── */}
      <section className="section-y border-t border-line/60 bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={journey.eyebrow}
              title={
                <>
                  {journey.titleTop} <span className="text-gradient">{journey.titleAccent}</span>
                </>
              }
              lead={journey.lead}
            />
          </Reveal>
          <Reveal
            stagger={0.07}
            className="snap-row sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 sm:overflow-visible sm:p-0 lg:grid-cols-3"
          >
            {journey.features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </Reveal>
        </div>
      </section>

      <HowItWorks eyebrow={steps.eyebrow} title={steps.title} steps={steps.items} />

      {/* ───────────── Testimonials & stats ─────────────
          Desktop: three panels side by side. Mobile/tablet: one lavender block,
          stats first, then the featured quote card, then swipeable testimonials. */}
      <section className="grid bg-brand-50/70 lg:grid-cols-[1.15fr_1fr_1fr] lg:bg-white">
        <figure className="relative isolate order-2 mx-5 flex min-h-[520px] items-end overflow-hidden rounded-3xl bg-navy-950 p-6 shadow-lift sm:mx-8 sm:min-h-[560px] sm:p-10 lg:order-none lg:mx-0 lg:min-h-[420px] lg:rounded-none lg:p-12 lg:shadow-none">
          <div className="absolute inset-0 -z-10">
            <Image src={img.testimonialMaureen} alt={proof.featured.name} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover object-[50%_12%]" />
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-navy-950 from-15% via-navy-950/70 via-50% to-transparent to-75%" />
          <Reveal className="max-w-md text-white">
            <blockquote className="text-base leading-relaxed font-semibold sm:text-lg">&ldquo;{proof.featured.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 sm:mt-5">
              <span className="block font-bold">{proof.featured.name}</span>
              <span className="text-sm text-white/65">{proof.featured.role}</span>
            </figcaption>
          </Reveal>
        </figure>

        <div className="order-1 flex flex-col justify-center px-5 pt-14 pb-8 sm:px-8 lg:order-none lg:bg-brand-50/70 lg:px-12 lg:py-14">
          <Reveal>
            <Eyebrow className="mb-6 lg:mb-8">
              <Heart aria-hidden className="size-3.5" /> {proof.eyebrow}
            </Eyebrow>
          </Reveal>
          <StatsGrid stats={proof.stats} className="lg:grid-cols-1! lg:gap-y-7" />
        </div>

        <div className="order-3 flex flex-col justify-center px-5 pt-8 pb-14 sm:px-8 lg:order-none lg:bg-white lg:px-10 lg:py-14">
          <Reveal
            stagger={0.12}
            className="snap-row sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:p-0 lg:grid-cols-1"
          >
            {proof.testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} compact />
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner variant="split" {...final} />
    </>
  );
}
