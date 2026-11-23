import type { Metadata } from "next";
import { Bell, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { JobsList } from "@/components/mockups/JobsList";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IretiMark } from "@/components/ui/IretiMark";
import { cta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Job Board",
  description:
    "The AscendX Job Board is coming soon: real roles from real employers, matched to you by Ireti, our AI.",
};

const highlights = [
  {
    icon: IretiMark,
    title: "Matched by Ireti",
    body: "Roles ranked by how well they fit your skills, interests and goals.",
  },
  {
    icon: Clock,
    title: "Apply in minutes",
    body: "Use your AscendX profile to apply faster, with CV help from Ireti.",
  },
  {
    icon: Bell,
    title: "Never miss a role",
    body: "Save searches and get notified when the right job is posted.",
  },
];

export default function JobBoardPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-linear-to-b from-brand-50/80 via-white to-white">
        <div
          aria-hidden
          className="absolute -top-48 left-1/2 -z-10 size-[48rem] -translate-x-1/2 rounded-full bg-brand-200/45 blur-[120px]"
        />
        <div className="container-x grid items-center gap-14 pt-36 pb-20 lg:grid-cols-[1fr_1fr] lg:pb-28">
          <div>
            <Eyebrow variant="pill" className="hero-rise">
              Job Board
            </Eyebrow>
            <h1 className="display-1 mt-6">
              <span
                className="hero-rise block"
                style={{ ["--d" as string]: "0.08s" }}
              >
                The AscendX Job Board
              </span>
              <span
                className="hero-rise text-gradient block pb-1"
                style={{ ["--d" as string]: "0.16s" }}
              >
                is coming soon.
              </span>
            </h1>
            <p
              className="hero-rise lead mt-6 max-w-lg"
              style={{ ["--d" as string]: "0.24s" }}
            >
              Real roles from forward-thinking employers, matched to you by
              Ireti, our AI. We&apos;re putting the finishing touches on it.
              Create your profile now and you&apos;ll be first in line when it
              opens.
            </p>
            <div
              className="hero-rise mt-9 flex flex-wrap gap-3"
              style={{ ["--d" as string]: "0.32s" }}
            >
              <Button href={cta.getStarted} size="lg" arrow>
                Get Started
              </Button>
              <Button href={cta.candidates} variant="outline" size="lg">
                Explore for Candidates
              </Button>
            </div>
          </div>

          <div
            className="hero-rise relative"
            style={{ ["--d" as string]: "0.3s" }}
            aria-hidden
          >
            <div className="pointer-events-none select-none opacity-60 blur-[2px] saturate-50">
              <JobsList />
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <span className="flex items-center gap-2.5 rounded-full bg-navy-900 px-5 py-3 text-sm font-bold text-white shadow-float">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-brand-400" />
                </span>
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line/60 bg-mist">
        <Reveal
          as="ul"
          stagger={0.08}
          className="container-x grid gap-5 md:grid-cols-3"
        >
          {highlights.map((h) => (
            <li
              key={h.title}
              className="rounded-2xl border border-line bg-white p-6 shadow-card"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <h.icon className="size-5.5" />
              </span>
              <h2 className="mt-4 text-[1.0625rem] font-bold tracking-tight">
                {h.title}
              </h2>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-body">
                {h.body}
              </p>
            </li>
          ))}
        </Reveal>
      </section>
    </>
  );
}
