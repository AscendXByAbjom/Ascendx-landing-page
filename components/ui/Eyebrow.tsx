import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  variant?: "plain" | "pill";
  tone?: "brand" | "light";
  number?: string;
  className?: string;
};

export function Eyebrow({ children, variant = "plain", tone = "brand", number, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.75rem] font-bold tracking-[0.14em] uppercase",
        tone === "light" ? "text-brand-300" : "text-brand-600",
        variant === "pill" && "rounded-full bg-brand-50 px-3.5 py-1.5 ring-1 ring-brand-100",
        className,
      )}
    >
      {number && (
        <span className="grid h-6 min-w-8 place-items-center rounded-full bg-brand-50 px-2 text-[0.6875rem] tracking-normal text-brand-600 ring-1 ring-brand-100">
          {number}
        </span>
      )}
      {children}
    </p>
  );
}
