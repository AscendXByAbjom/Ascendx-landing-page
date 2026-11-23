import type { IconComponent } from "@/components/ui/IconTile";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type FloatingVariant = "violet" | "teal" | "blue" | "white" | "pink";

const styles: Record<FloatingVariant, { card: string; icon: string; sub: string }> = {
  violet: {
    card: "bg-linear-to-br from-brand-500 to-brand-700 text-white ring-white/20",
    icon: "bg-white/20 text-white",
    sub: "text-white/75",
  },
  teal: {
    card: "bg-linear-to-br from-teal-500 to-emerald-600 text-white ring-white/20",
    icon: "bg-white/20 text-white",
    sub: "text-white/80",
  },
  blue: {
    card: "bg-linear-to-br from-azure-500 to-azure-600 text-white ring-white/20",
    icon: "bg-white/20 text-white",
    sub: "text-white/80",
  },
  white: { card: "bg-white/95 text-ink ring-ink/5 backdrop-blur", icon: "bg-brand-50 text-brand-600", sub: "text-muted" },
  pink: { card: "bg-pink-50/95 text-ink ring-pink-100 backdrop-blur", icon: "bg-pink-500 text-white", sub: "text-muted" },
};

type FloatingFeatureCardProps = {
  icon: IconComponent;
  title: string;
  subtitle: string;
  variant?: FloatingVariant;
  className?: string;
  /** Seconds: offsets the idle float so cards don't bob in sync. */
  floatDelay?: number;
};

export function FloatingFeatureCard({ icon: Icon, title, subtitle, variant = "white", className, floatDelay = 0 }: FloatingFeatureCardProps) {
  const s = styles[variant];
  return (
    <div className={cn("animate-float", className)} style={{ animationDelay: `${floatDelay}s` }}>
      <div
        className={cn(
          "flex w-[252px] items-center gap-3 rounded-2xl p-3 pr-2.5 shadow-[0_18px_40px_-14px_rgb(11_19_48/0.45)] ring-1",
          s.card,
        )}
      >
        <span aria-hidden className={cn("grid size-9 shrink-0 place-items-center rounded-xl", s.icon)}>
          <Icon className="size-4.5" strokeWidth={2} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[13px] leading-tight font-bold">{title}</span>
          <span className={cn("mt-0.5 block text-[11px] leading-snug", s.sub)}>{subtitle}</span>
        </span>
        <ChevronRight aria-hidden className="size-4 shrink-0 opacity-70" />
      </div>
    </div>
  );
}
