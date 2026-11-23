"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Plan } from "@/content/pricing";
import { cn } from "@/lib/cn";

type PricingPlansProps = { candidates: Plan[]; employers: Plan[] };

const audiences = [
  { id: "candidates", label: "For Candidates" },
  { id: "employers", label: "For Employers" },
] as const;

export function PricingPlans({ candidates, employers }: PricingPlansProps) {
  const [audience, setAudience] = useState<(typeof audiences)[number]["id"]>("candidates");
  const plans = audience === "candidates" ? candidates : employers;

  return (
    <div>
      <div role="tablist" aria-label="Choose a plan type" className="mx-auto flex w-fit rounded-full bg-white p-1.5 shadow-card ring-1 ring-line">
        {audiences.map((a) => (
          <button
            key={a.id}
            type="button"
            role="tab"
            id={`tab-${a.id}`}
            aria-selected={audience === a.id}
            aria-controls="pricing-panel"
            onClick={() => setAudience(a.id)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              audience === a.id ? "bg-brand-gradient text-white shadow-md" : "text-ink/70 hover:text-ink",
            )}
          >
            {a.label}
          </button>
        ))}
      </div>

      <div
        id="pricing-panel"
        role="tabpanel"
        aria-labelledby={`tab-${audience}`}
        key={audience}
        className="mt-12 grid gap-6 lg:grid-cols-3"
      >
        {plans.map((plan, i) => (
          <article
            key={plan.name}
            className={cn(
              "hero-rise relative flex flex-col rounded-3xl p-8",
              plan.featured
                ? "bg-navy-900 text-white shadow-[0_30px_70px_-25px_rgb(45_26_125/0.6)] ring-1 ring-brand-500/40 lg:-my-4 lg:py-12"
                : "bg-white shadow-card ring-1 ring-line",
            )}
            style={{ ["--d" as string]: `${i * 0.08}s` }}
          >
            {plan.featured && (
              <span className="bg-brand-gradient absolute -top-3.5 left-8 rounded-full px-3 py-1 text-xs font-bold text-white">Most popular</span>
            )}
            <h3 className={cn("text-lg font-bold", plan.featured ? "text-white" : "text-ink")}>{plan.name}</h3>
            <p className={cn("mt-1 text-sm", plan.featured ? "text-white/65" : "text-muted")}>{plan.blurb}</p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className={cn("text-4xl font-extrabold tracking-tight", plan.featured ? "text-white" : "text-ink")}>{plan.price}</span>
              {plan.period && <span className={cn("text-sm", plan.featured ? "text-white/60" : "text-muted")}>{plan.period}</span>}
            </p>
            <ul className="mt-7 mb-8 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.9375rem]">
                  <Check aria-hidden className={cn("mt-0.5 size-4.5 shrink-0", plan.featured ? "text-brand-300" : "text-brand-600")} strokeWidth={2.5} />
                  <span className={plan.featured ? "text-white/85" : "text-ink/85"}>{f}</span>
                </li>
              ))}
            </ul>
            <Button href={plan.cta.href} variant={plan.featured ? "primary" : "outline"} className="mt-auto w-full" arrow>
              {plan.cta.label}
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
