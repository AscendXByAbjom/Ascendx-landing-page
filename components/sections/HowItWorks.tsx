import { ArrowRight } from "lucide-react";
import { InView, Reveal } from "@/components/motion/Reveal";
import { IconTile } from "@/components/ui/IconTile";
import type { Feature } from "@/components/ui/FeatureCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

type HowItWorksProps = { eyebrow: string; title: string; steps: readonly Feature[]; numbered?: boolean };

export function HowItWorks({ eyebrow, title, steps, numbered }: HowItWorksProps) {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </Reveal>

        <InView className="relative mt-12 md:mt-16">
          {/* Connector — draws left→right on desktop, top→bottom on mobile */}
          <div aria-hidden className="absolute top-7 right-[calc(20%-1.75rem)] left-7 hidden h-px md:block">
            <div className="bar-fill h-full bg-linear-to-r from-brand-300 via-brand-200 to-azure-400/60" />
          </div>
          <div aria-hidden className="absolute top-7 bottom-7 left-7 w-px bg-linear-to-b from-brand-300 to-azure-300/50 md:hidden" />

          <Reveal as="ol" stagger={0.1} className="relative grid gap-8 md:grid-cols-5 md:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-5 md:flex-col md:gap-0">
                <div className="relative w-fit rounded-2xl bg-white p-0 ring-8 ring-white">
                  <IconTile icon={step.icon} tone={step.tone} size="lg" />
                  <span className="absolute -top-2 -right-2 grid size-5.5 place-items-center rounded-full bg-navy-900 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight aria-hidden className="absolute top-5 right-1 hidden size-4 text-brand-400 md:block" />
                )}
                <div className="md:mt-5">
                  <h3 className="text-[1.0625rem] font-bold tracking-tight text-ink">
                    {numbered ? `${i + 1}. ${step.title}` : step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-body">{step.body}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </InView>
      </div>
    </section>
  );
}
