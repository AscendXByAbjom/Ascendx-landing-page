import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Bot, Check, Headset, Play, Sparkles } from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { CareerFeedPhone } from "@/components/mockups/CareerFeedPhone";
import { CoachChat } from "@/components/mockups/CoachChat";
import { FloatingFeatureCard } from "@/components/mockups/FloatingFeatureCard";
import { InterviewFeedback, InterviewVideo } from "@/components/mockups/InterviewFeedback";
import { JobsList } from "@/components/mockups/JobsList";
import { LearningDashboard } from "@/components/mockups/LearningDashboard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Annotation } from "@/components/ui/Annotation";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { features } from "@/content/features";
import { img } from "@/content/images";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Features",
  description: features.hero.lead,
};

type FeatureSectionProps = {
  id: string;
  data: { number: string; eyebrow: string; titleTop: string; titleAccent: string; lead: string; list: readonly string[] };
  tint?: string;
  children: ReactNode;
};

/** Shared shell for the five numbered feature sections: copy on the left, product UI on the right. */
function FeatureSection({ id, data, tint = "bg-white", children }: FeatureSectionProps) {
  return (
    <section id={id} className={cn("section-y relative scroll-mt-20 overflow-hidden", tint)}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.85fr_1.65fr] lg:gap-14">
        <Reveal>
          <Eyebrow number={data.number} className="mb-4">
            {data.eyebrow}
          </Eyebrow>
          <h2 className="display-2">
            {data.titleTop} <span className="text-gradient">{data.titleAccent}</span>
          </h2>
          <p className="lead mt-5">{data.lead}</p>
          <CheckList items={data.list} className="mt-7" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function SideCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-3xl bg-white p-6 shadow-card ring-1 ring-line", className)}>{children}</div>;
}

export default function FeaturesPage() {
  const { hero, feed, coach, learn, jobs, interview, final } = features;

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate overflow-hidden bg-linear-to-b from-brand-50/70 via-white to-white">
        <div aria-hidden className="absolute -top-40 right-[-10%] -z-10 size-[44rem] rounded-full bg-brand-200/40 blur-[110px]" />
        <div className="container-x grid items-center gap-14 pt-32 pb-16 lg:min-h-[min(100svh,820px)] lg:grid-cols-[1.15fr_1fr] lg:pt-36 lg:pb-20">
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
          </div>

          <div className="hero-rise relative mx-auto h-[520px] w-full max-w-[600px] sm:h-[580px]" style={{ ["--d" as string]: "0.25s" }}>
            <div className="absolute top-[6%] left-0 h-[90%] w-[64%] overflow-hidden rounded-[2.5rem] shadow-lift max-sm:w-[80%]">
              <Image
                src={img.heroFeatures}
                alt="Smiling young woman"
                fill
                priority
                sizes="(min-width: 1024px) 380px, 80vw"
                className="scale-110 object-cover object-[50%_25%]"
              />
            </div>
            <Annotation lines={hero.annotation} rotate={-8} className="absolute -top-2 left-[44%] hidden sm:block" />
            <div className="absolute top-[24%] right-0 flex flex-col gap-3 lg:-right-6">
              {hero.cards.map((c, i) => (
                <FloatingFeatureCard
                  key={c.title}
                  icon={c.icon}
                  title={c.title}
                  subtitle={c.subtitle}
                  variant="white"
                  floatDelay={i * 0.9}
                  className="max-sm:scale-90 max-sm:origin-right"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── 01 Career Feed ───────────── */}
      <FeatureSection id="feature-01" data={feed} tint="bg-white border-t border-line/60">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.85fr]">
          <Reveal className="relative flex items-center justify-center gap-4">
            <CareerFeedPhone className="w-[230px] sm:w-[250px]" />
            <div className="hidden flex-col gap-3 sm:flex">
              <span className="flex items-center gap-2 text-sm font-bold text-ink">
                <span className="bg-brand-gradient grid size-7 place-items-center rounded-full text-white">
                  <Play aria-hidden className="ml-0.5 size-3 fill-white" />
                </span>
                Career Feed
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {[img.feedOffice, img.feedTeam, img.feedWhiteboard, img.feedCreator].map((src, i) => (
                  <div key={i} className="relative aspect-[3/4] w-[84px] overflow-hidden rounded-xl shadow-card">
                    <Image src={src} alt="" fill sizes="100px" className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-navy-950/50 to-transparent" />
                    <Play aria-hidden className="absolute bottom-1.5 left-1.5 size-3 fill-white text-white" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <SideCard className="bg-brand-50/50">
              <h3 className="font-bold text-ink">What you&apos;ll find</h3>
              <ul className="mt-4 space-y-3">
                {feed.find.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm font-medium text-ink/85">
                    <span className="grid size-8 place-items-center rounded-lg bg-white text-brand-600 shadow-sm ring-1 ring-line">
                      <f.icon aria-hidden className="size-4" />
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </SideCard>
          </Reveal>
        </div>
      </FeatureSection>

      {/* ───────────── 02 AI Career Coach ───────────── */}
      <FeatureSection id="feature-02" data={coach} tint="bg-linear-to-b from-brand-50/60 to-mist">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.85fr]">
          <Reveal>
            <CoachChat />
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <SideCard>
              <h3 className="flex items-center gap-2 font-bold text-ink">
                <Bot aria-hidden className="size-5 text-brand-600" /> Your AI Coach can also help with
              </h3>
              <ul className="mt-4 space-y-2.5">
                {coach.more.map((m) => (
                  <li key={m} className="flex items-start gap-2.5 text-sm text-ink/85">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                    {m}
                  </li>
                ))}
              </ul>
            </SideCard>
            <Annotation lines={coach.annotation} rotate={-8} className="mt-8 ml-6 hidden md:block" />
          </Reveal>
        </div>
      </FeatureSection>

      {/* ───────────── 03 Learn & Build ───────────── */}
      <FeatureSection id="feature-03" data={learn}>
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.85fr]">
          <Reveal>
            <LearningDashboard />
          </Reveal>
          <Reveal delay={0.15}>
            <SideCard className="overflow-hidden p-0!">
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0">
                  <Image src={img.projects} alt="Learner presenting a portfolio project on a video call" fill sizes="300px" className="object-cover" />
                </div>
                <span className="absolute top-1/2 left-1/2 grid size-12 -translate-1/2 place-items-center rounded-full bg-white/30 text-white backdrop-blur">
                  <Play aria-hidden className="ml-0.5 size-5 fill-white" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-ink">{learn.portfolio.title}</h3>
                <p className="mt-1 text-sm text-body">{learn.portfolio.body}</p>
                <Button href={learn.portfolio.cta.href} variant="outline" size="sm" className="mt-4" arrow>
                  {learn.portfolio.cta.label}
                </Button>
              </div>
            </SideCard>
          </Reveal>
        </div>
      </FeatureSection>

      {/* ───────────── 04 Jobs & Applications ───────────── */}
      <FeatureSection id="feature-04" data={jobs} tint="bg-linear-to-b from-emerald-50/50 to-white">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_0.85fr]">
          <Reveal>
            <JobsList />
          </Reveal>
          <Reveal stagger={0.12} className="flex flex-col gap-5">
            <SideCard>
              <span className="bg-brand-gradient grid size-10 place-items-center rounded-xl text-white">
                <Sparkles aria-hidden className="size-5" />
              </span>
              <h3 className="mt-4 font-bold text-ink">{jobs.assistant.title}</h3>
              <p className="mt-1 text-sm text-body">{jobs.assistant.body}</p>
              <Button href={jobs.assistant.cta.href} variant="outline" size="sm" className="mt-4" arrow>
                {jobs.assistant.cta.label}
              </Button>
            </SideCard>
            <SideCard className="flex items-center gap-4">
              <span className="text-4xl font-extrabold tracking-tight text-emerald-600">
                <CountUp value={jobs.stat.value} suffix="%" />
              </span>
              <p className="text-sm leading-snug text-body">{jobs.stat.label}</p>
            </SideCard>
          </Reveal>
        </div>
      </FeatureSection>

      {/* ───────────── 05 AI Interview ───────────── */}
      <FeatureSection id="feature-05" data={interview} tint="bg-mist">
        <div className="grid items-center gap-6 md:grid-cols-[1.6fr_0.75fr]">
          <Reveal className="grid gap-5 sm:grid-cols-2 sm:items-center">
            <InterviewVideo className="sm:aspect-[4/5]" />
            <InterviewFeedback />
          </Reveal>
          <Reveal delay={0.15}>
            <SideCard>
              <span className="grid size-10 place-items-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                <Headset aria-hidden className="size-5" />
              </span>
              <h3 className="mt-4 font-bold text-ink">{interview.human.title}</h3>
              <p className="mt-1 text-sm text-body">{interview.human.body}</p>
              <Button href={interview.human.cta.href} size="sm" className="mt-4" arrow>
                {interview.human.cta.label}
              </Button>
            </SideCard>
          </Reveal>
        </div>
      </FeatureSection>

      <CtaBanner variant="dark" {...final} />
    </>
  );
}
