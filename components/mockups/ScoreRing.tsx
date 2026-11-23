import { cn } from "@/lib/cn";

type ScoreRingProps = { value: number; size?: number; stroke?: number; className?: string; label?: string };

/** Circular score; fills when an ancestor gains [data-in]. */
export function ScoreRing({ value, size = 76, stroke = 7, className, label }: ScoreRingProps) {
  const r = (size - stroke) / 2;
  return (
    <div className={cn("relative grid shrink-0 place-items-center", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-emerald-100" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          pathLength={1}
          className="score-ring"
          style={{ ["--p" as string]: value / 100 }}
        />
      </svg>
      <span className="absolute text-lg font-extrabold text-ink">{label ?? `${value}%`}</span>
    </div>
  );
}

/** Horizontal progress bar; fills when an ancestor gains [data-in]. */
export function ProgressBar({ value, delay = 0, className, tone = "brand" }: { value: number; delay?: number; className?: string; tone?: "brand" | "green" }) {
  return (
    <div className={cn("h-1.5 overflow-hidden rounded-full bg-ink/[0.07]", className)}>
      <div className="h-full" style={{ width: `${value}%` }}>
        <div
          className={cn("bar-fill h-full rounded-full", tone === "green" ? "bg-linear-to-r from-emerald-500 to-teal-400" : "bg-brand-gradient")}
          style={{ ["--d" as string]: `${delay}s` }}
        />
      </div>
    </div>
  );
}
