import { cn } from "@/lib/cn";
import { IconTile, type IconComponent, type Tone } from "./IconTile";

export type Feature = { icon: IconComponent; tone: Tone; title: string; body: string };

type FeatureCardProps = Feature & { variant?: "card" | "bare" | "dark"; row?: boolean; className?: string };

export function FeatureCard({ icon, tone, title, body, variant = "bare", row, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative transition-all duration-500",
        row && "flex items-start gap-4",
        variant === "card" && "rounded-2xl border border-line bg-white p-6 shadow-card hover:-translate-y-1 hover:shadow-lift",
        variant === "bare" &&
          "rounded-2xl border border-line bg-white p-5 shadow-card md:-m-4 md:border-transparent md:bg-transparent md:p-4 md:shadow-none md:hover:bg-white md:hover:shadow-card",
        variant === "dark" && "rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.07]",
        className,
      )}
    >
      <IconTile icon={icon} tone={tone} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
      <div>
        <h3 className={cn("text-[1.0625rem] font-bold tracking-tight", !row && "mt-4", variant === "dark" ? "text-white" : "text-ink")}>
          {title}
        </h3>
        <p className={cn("mt-1.5 text-[0.9375rem] leading-relaxed", variant === "dark" ? "text-white/65" : "text-body")}>
          {body}
        </p>
      </div>
    </div>
  );
}
