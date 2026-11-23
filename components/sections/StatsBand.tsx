import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { IconTile, type IconComponent, type Tone } from "@/components/ui/IconTile";
import { cn } from "@/lib/cn";

export type Stat = { value: number; prefix?: string; suffix: string; label: string; icon?: IconComponent; tone?: Tone };

type StatsGridProps = { stats: readonly Stat[]; dark?: boolean; className?: string; withIcons?: boolean };

/**
 * Stat row. Below `sm` it becomes a compact card with the figures side by side
 * and dividers between them; from `sm` up it's an open, left-aligned row.
 */
export function StatsGrid({ stats, dark, className, withIcons }: StatsGridProps) {
  const three = stats.length === 3;
  return (
    <Reveal
      as="dl"
      stagger={0.08}
      className={cn(
        "grid",
        three ? "grid-cols-3 sm:gap-x-6" : "grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4",
        three && [
          "rounded-2xl px-1 py-5 ring-1 max-sm:divide-x sm:rounded-none sm:p-0 sm:ring-0",
          dark
            ? "bg-white/[0.06] ring-white/10 backdrop-blur max-sm:divide-white/10 sm:bg-transparent sm:backdrop-blur-none"
            : "bg-white shadow-card ring-line max-sm:divide-line sm:bg-transparent sm:shadow-none",
        ],
        className,
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className={cn("flex flex-col", three && "items-center px-2 text-center sm:items-start sm:px-0 sm:text-left")}>
          {withIcons && s.icon && (
            <IconTile icon={s.icon} tone={s.tone} variant="solid" size="sm" className="order-1 mb-3 sm:mb-4" />
          )}
          <dt
            className={cn(
              "order-3 mt-1.5 leading-snug sm:mt-2 sm:max-w-[11rem] sm:text-sm",
              three ? "text-[0.75rem]" : "max-w-[11rem] text-sm",
              dark ? "text-white/65" : "text-muted",
            )}
          >
            {s.label}
          </dt>
          <dd
            className={cn(
              "order-2 leading-none font-extrabold tracking-tight sm:text-[clamp(1.875rem,3vw,2.5rem)]",
              three ? "text-[1.625rem]" : "text-[clamp(1.875rem,3vw,2.5rem)]",
              dark ? "text-white" : "text-ink",
            )}
          >
            <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
          </dd>
        </div>
      ))}
    </Reveal>
  );
}
