import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChartColumn, ThumbsUp, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { AppScreenPhone } from "@/components/mockups/AppScreenPhone";
import { FloatingFeatureCard } from "@/components/mockups/FloatingFeatureCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { StatsGrid } from "@/components/sections/StatsBand";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { IretiMark } from "@/components/ui/IretiMark";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { home } from "@/content/home";
import { img } from "@/content/images";

export default function HomePage() {
  const { hero, seekers, employers, impact, stories, final } = home;

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-y-0 right-0 left-0 -z-10 [mask-image:linear-gradient(to_right,transparent,black_30%)] lg:left-[calc(50%-120px)] lg:[mask-image:linear-gradient(to_right,transparent,black_22%)]">
          <Image
            src={img.heroHome}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[30%_30%] opacity-70 lg:opacity-100"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950 via-navy-950/70 to-navy-950/30 lg:via-navy-950/40"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-brand-900/20 mix-blend-multiply"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-navy-950 to-transparent"
        />
        <div
          aria-hidden
          className="absolute top-1/3 -left-40 -z-10 size-[36rem] rounded-full bg-brand-600/25 blur-[120px]"
        />

        <div className="container-x grid items-center gap-12 pt-32 pb-12 lg:min-h-[min(100svh,880px)] lg:grid-cols-[1.05fr_1fr] lg:pt-36 lg:pb-16">
          <div>
            <Eyebrow tone="light" className="hero-rise">
              {hero.eyebrow}
            </Eyebrow>
            <h1 className="display-1 mt-5 text-white">
              <span
                className="hero-rise block"
                style={{ ["--d" as string]: "0.08s" }}
              >
                {hero.titleTop}
              </span>
              <span
                className="hero-rise text-gradient-light block pb-1"
                style={{ ["--d" as string]: "0.16s" }}
              >
                {hero.titleAccent}
              </span>
            </h1>
            <p
              className="hero-rise lead mt-6 max-w-lg text-white/75"
              style={{ ["--d" as string]: "0.24s" }}
            >
              {hero.lead}
            </p>
            <div
              className="hero-rise mt-9 flex flex-wrap gap-3"
              style={{ ["--d" as string]: "0.32s" }}
            >
              <Button href={hero.primary.href} size="lg" arrow>
                {hero.primary.label}
              </Button>
            </div>
          </div>

          <div
            className="hero-rise relative mx-auto h-[500px] w-full max-w-[540px] sm:h-[560px] lg:mr-0 lg:max-w-[500px]"
            style={{ ["--d" as string]: "0.3s" }}
          >
            <div className="absolute top-0 left-0 sm:left-[6%] lg:left-auto lg:right-[170px]">
              <AppScreenPhone priority className="w-[210px] sm:w-[260px]" />
            </div>
            <div className="absolute top-[30%] right-0 flex flex-col gap-4 max-sm:gap-1 sm:top-[14%] lg:-right-6">
              <FloatingFeatureCard
                icon={IretiMark}
                title="Ireti, AI Career Coach"
                subtitle="Your personal career guide"
                variant="violet"
                className="max-sm:scale-[0.8] max-sm:origin-right"
              />
              <FloatingFeatureCard
                icon={ThumbsUp}
                title="Recommended for you"
                subtitle="Roles matched to your skills"
                variant="teal"
                floatDelay={1.2}
                className="max-sm:scale-[0.8] max-sm:origin-right"
              />
              <FloatingFeatureCard
                icon={Zap}
                title="Apply with one click"
                subtitle="Use your career profile"
                variant="white"
                floatDelay={2.4}
                className="max-sm:scale-[0.8] max-sm:origin-right"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <ul className="container-x grid grid-cols-2 gap-x-6 gap-y-4 py-6 md:flex md:justify-start md:gap-12">
            {hero.strip.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2.5 text-sm font-medium text-white/80"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-white/[0.08] ring-1 ring-white/10">
                  <item.icon aria-hidden className="size-4 text-brand-300" />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── For career seekers ───────────── */}
      <section className="section-y relative overflow-hidden bg-linear-to-b from-mist to-white">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
          <Reveal className="lg:pt-2">
            <SectionHeading
              eyebrow={seekers.eyebrow}
              title={seekers.title}
              lead={seekers.lead}
            />
            <Button href={seekers.cta.href} className="mt-8" arrow>
              {seekers.cta.label}
            </Button>
          </Reveal>
          <Reveal
            stagger={0.07}
            className="snap-row sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 sm:overflow-visible sm:p-0 lg:grid-cols-3"
          >
            {seekers.features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────────── For employers ───────────── */}
      <section className="section-y relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="absolute top-0 right-0 size-[40rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-brand-100/50 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow={employers.eyebrow}
              title={employers.title}
              lead={employers.lead}
            />
            <Button
              href={employers.cta.href}
              variant="dark"
              className="mt-8"
              arrow
            >
              {employers.cta.label}
            </Button>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal stagger={0.08} className="grid gap-4">
              {employers.features.map((f) => (
                <FeatureCard
                  key={f.title}
                  {...f}
                  variant="card"
                  row
                  className="p-5!"
                />
              ))}
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href={employers.cta.href}
                className="group mt-5 flex items-center gap-4 rounded-2xl bg-linear-to-r from-brand-50 to-sky-50 p-4 pr-5 ring-1 ring-brand-100 transition-shadow hover:shadow-card"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
                  <ChartColumn aria-hidden className="size-5" />
                </span>
                <span className="flex-1 text-sm font-semibold text-ink">
                  {employers.banner}
                </span>
                <span className="flex items-center gap-1 text-sm font-semibold whitespace-nowrap text-brand-600">
                  Learn more{" "}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal
            delay={0.1}
            className="relative hidden aspect-[3/4] overflow-hidden rounded-3xl shadow-lift lg:col-span-3 lg:block"
          >
            <div className="absolute inset-0">
              <Image
                src={img.employersOffice}
                alt="Smiling hiring manager in a modern office"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Real impact ───────────── */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={img.cityNight}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-70"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-r from-navy-950 via-navy-950/85 to-navy-950/40"
        />
        <div className="container-x grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[0.9fr_1.4fr]">
          <Reveal>
            <SectionHeading
              dark
              eyebrow={impact.eyebrow}
              title={impact.title}
              lead={impact.lead}
            />
            <Button
              href={impact.cta.href}
              variant="outline-light"
              className="mt-8"
              arrow
            >
              {impact.cta.label}
            </Button>
          </Reveal>
          <StatsGrid stats={impact.stats} dark withIcons />
        </div>
      </section>

      {/* ───────────── Success stories ───────────── */}
      <section className="section-y bg-white">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow={stories.eyebrow} title={stories.title} />
          </Reveal>
          <Reveal
            stagger={0.1}
            className="snap-row mt-10 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:p-0"
          >
            {stories.testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBanner
        variant="center"
        title={final.title}
        body={final.body}
        primary={final.primary}
        secondary={final.secondary}
      />
    </>
  );
}
