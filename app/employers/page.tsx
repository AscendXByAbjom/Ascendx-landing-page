import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CandidateCard } from "@/components/mockups/CandidateCard";
import { RecruiterDashboard } from "@/components/mockups/RecruiterDashboard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Annotation } from "@/components/ui/Annotation";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { employers } from "@/content/employers";
import { img } from "@/content/images";

export const metadata: Metadata = {
  title: "Employers",
  description: employers.hero.lead,
};

export default function EmployersPage() {
  const { hero, why, solution, steps, trust, final } = employers;

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden bg-linear-to-b from-brand-50/70 via-white to-white">
        <div aria-hidden className="absolute -top-40 left-[-15%] -z-10 size-[40rem] rounded-full bg-brand-200/40 blur-[110px]" />

        <div className="container-x grid items-center gap-14 pt-32 pb-12 lg:grid-cols-[1fr_1.05fr] lg:pt-36">
          <div>
            <Eyebrow variant="pill" className="hero-rise">
              {hero.eyebrow}
            </Eyebrow>
            <h1 className="display-1 mt-6 text-[clamp(2.5rem,4.6vw,3.875rem)]!">
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
          </div>

          <div className="hero-rise relative mx-auto h-[540px] w-full max-w-[600px] sm:h-[600px]" style={{ ["--d" as string]: "0.25s" }}>
            <div className="absolute top-0 left-0 h-full w-[78%] overflow-hidden rounded-[2.5rem] shadow-lift max-sm:w-full">
              <Image
                src={img.heroEmployers}
                alt="Recruiter with a laptop in a bright office"
                fill
                priority
                sizes="(min-width: 1024px) 460px, 90vw"
                className="scale-110 object-cover object-[50%_30%]"
              />
              <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy-950/30 to-transparent" />
            </div>
            <div className="absolute right-0 bottom-6 sm:top-[30%] sm:bottom-auto lg:-right-6">
              <div className="animate-float">
                <CandidateCard className="w-[290px] sm:w-[310px]" />
              </div>
            </div>
            <Annotation lines={hero.annotation} rotate={-9} className="absolute -top-4 right-0 hidden sm:block lg:-right-4" />
          </div>
        </div>

        <div className="container-x pb-16">
          <Reveal
            as="ul"
            stagger={0.07}
            className="grid grid-cols-2 gap-6 rounded-3xl border border-line bg-white/80 p-6 shadow-card backdrop-blur md:grid-cols-4 md:divide-x md:divide-line md:p-7"
          >
            {hero.strip.map((s) => (
              <li key={s.title} className="flex items-center gap-3 md:px-4 md:first:pl-0">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <s.icon aria-hidden className="size-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{s.title}</span>
                  <span className="block text-[0.8125rem] text-muted">{s.body}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────────── Why AscendX ───────────── */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={why.eyebrow} title={why.title} lead={why.lead} />
            <Button href={why.cta.href} className="mt-8" arrow>
              {why.cta.label}
            </Button>
          </Reveal>
          <Reveal
            stagger={0.07}
            className="snap-row sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 sm:overflow-visible sm:p-0 lg:grid-cols-3"
          >
            {why.benefits.map((b) => (
              <FeatureCard key={b.title} {...b} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────────── Our solution ───────────── */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div aria-hidden className="absolute top-0 left-1/3 -z-10 size-[40rem] rounded-full bg-brand-600/25 blur-[130px]" />
        <div aria-hidden className="absolute right-0 bottom-0 -z-10 size-[28rem] rounded-full bg-azure-500/20 blur-[120px]" />
        <div className="container-x section-y grid items-center gap-12 lg:grid-cols-2 xl:grid-cols-[0.95fr_1.5fr_0.85fr] xl:gap-10">
          <Reveal>
            <SectionHeading dark eyebrow={solution.eyebrow} title={solution.title} lead={solution.lead} />
            <CheckList items={solution.capabilities} dark tone="teal" className="mt-8" />
            <Button href={solution.cta.href} variant="outline-light" className="mt-9" arrow>
              {solution.cta.label}
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <RecruiterDashboard />
          </Reveal>

          <Reveal stagger={0.08} className="grid gap-4 sm:grid-cols-3 lg:col-span-2 xl:col-span-1 xl:grid-cols-1">
            {solution.cards.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-colors hover:bg-white/[0.09]"
              >
                <IconTile icon={c.icon} tone={c.tone} variant="solid" />
                <div>
                  <h3 className="font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">{c.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <HowItWorks eyebrow={steps.eyebrow} title={steps.title} steps={steps.items} numbered />

      {/* ───────────── Trust ───────────── */}
      <section className="section-y bg-mist">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.3fr_1fr] lg:gap-14">
          <Reveal>
            <SectionHeading eyebrow={trust.eyebrow} title={trust.title} lead={trust.lead} className="[&_h2]:text-[clamp(1.625rem,2.4vw,2rem)]" />
          </Reveal>
          <LogoCloud />
          <Reveal delay={0.15}>
            <figure className="relative rounded-3xl bg-white p-7 shadow-lift ring-1 ring-line">
              <Quote aria-hidden className="absolute -top-4 left-7 size-9 rounded-xl bg-brand-gradient p-2 text-white" />
              <blockquote className="mt-2 text-[0.9375rem] leading-relaxed text-ink/85">&ldquo;{trust.testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <Avatar src={trust.testimonial.avatar} size={44} />
                <span>
                  <span className="block text-sm font-bold text-ink">{trust.testimonial.name}</span>
                  <span className="block text-[0.8125rem] text-muted">{trust.testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaBanner variant="image" {...final} />
    </>
  );
}
