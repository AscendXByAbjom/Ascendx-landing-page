import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

type CheckListProps = {
  items: readonly string[];
  dark?: boolean;
  tone?: "brand" | "teal";
  columns?: 1 | 2;
  className?: string;
};

export function CheckList({ items, dark, tone = "brand", columns = 1, className }: CheckListProps) {
  return (
    <ul className={cn("grid gap-3", columns === 2 && "sm:grid-cols-2 sm:gap-x-6", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden
            className={cn(
              "mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full",
              tone === "teal"
                ? "bg-emerald-500/15 text-emerald-500"
                : dark
                  ? "bg-brand-400/20 text-brand-300"
                  : "bg-brand-100 text-brand-600",
            )}
          >
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          <span className={cn("text-[0.9375rem] leading-relaxed", dark ? "text-white/80" : "text-ink/85")}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
