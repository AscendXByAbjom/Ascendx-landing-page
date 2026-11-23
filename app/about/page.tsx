import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { StatsGrid } from "@/components/sections/StatsBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/about";
import { img } from "@/content/images";

export const metadata: Metadata = {
  title: "About",
  description: about.hero.lead,
};

export default function AboutPage() {
  const { hero, story, mission, stats, values, final } = about;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-linear-to-b from-brand-50/80 via-white to-white">
        <div aria-hidden className="absolute -top-48 left-1/2 -z-10 size-[48rem] -translate-x-1/2 rounded-full bg-brand-200/45 blur-[120px]" />
        <div className="container-x pt-36 pb-16 text-center">
          <Eyebrow variant="pill" className="hero-rise">
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="display-1 mx-auto mt-6 max-w-3xl">
            <span className="hero-rise block" style={{ ["--d" as string]: "0.08s" }}>
              {hero.titleTop}
            </span>
            <span className="hero-rise text-gradient block pb-1" style={{ ["--d" as string]: "0.16s" }}>
              {hero.titleAccent}
            </span>
          </h1>
          <p className="hero-rise lead mx-auto mt-6 max-w-2xl italic" style={{ ["--d" as string]: "0.24s" }}>
            &ldquo;{hero.lead}&rdquo;
          </p>
        </div>
        <div className="container-x pb-20">
          <div
            className="hero-rise relative aspect-[16/9] overflow-hidden rounded-[2.5rem] shadow-lift sm:aspect-[21/9]"
            style={{ ["--d" as string]: "0.32s" }}
          >
            <Image
              src={img.aboutMeeting}
              alt="Three young professionals working together on laptops"
              fill
              priority
              sizes="(min-width: 1280px) 1180px, 95vw"
              className="object-cover object-[50%_35%]"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-navy-950/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ───────────── Our story ───────────── */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow={story.eyebrow} title={story.title} />
          </Reveal>
          <Reveal stagger={0.1} className="space-y-5 lg:pt-10">
            {story.body.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────────── Mission ───────────── */}
      <section className="section-y bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow={mission.eyebrow} title={mission.title} lead={mission.lead} align="center" className="max-w-2xl!" />
          </Reveal>
          <Reveal stagger={0.08} className="mt-14 grid gap-5 md:grid-cols-3">
            {mission.pillars.map((p) => (
              <FeatureCard key={p.title} {...p} variant="card" />
            ))}
          </Reveal>
          <Reveal>
            <p className="lead mx-auto mt-12 max-w-2xl text-center">{mission.closing}</p>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Stats ───────────── */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div aria-hidden className="absolute top-0 left-1/4 -z-10 size-[36rem] rounded-full bg-brand-600/30 blur-[130px]" />
        <div className="container-x py-16 md:py-20">
          <StatsGrid stats={stats} dark withIcons />
        </div>
      </section>

      {/* ───────────── Values ───────────── */}
      <section className="section-y bg-white">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow={values.eyebrow} title={values.title} align="center" />
          </Reveal>
          <Reveal stagger={0.07} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((v) => (
              <FeatureCard key={v.title} {...v} variant="card" />
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner variant="center" {...final} />
    </>
  );
}
