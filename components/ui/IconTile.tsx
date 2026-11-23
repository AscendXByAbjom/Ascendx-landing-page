import type { ComponentType } from "react";
import { cn } from "@/lib/cn";

/** A lucide icon or any icon-like component (e.g. IretiMark) that takes a className. */
export type IconComponent = ComponentType<{ className?: string; strokeWidth?: number }>;

export type Tone = "violet" | "teal" | "orange" | "blue" | "pink" | "green" | "indigo" | "amber";

export const toneStyles: Record<Tone, { tile: string; solid: string }> = {
  violet: { tile: "bg-brand-50 text-brand-600 ring-brand-100", solid: "bg-brand-500" },
  teal: { tile: "bg-teal-50 text-teal-600 ring-teal-100", solid: "bg-teal-500" },
  orange: { tile: "bg-orange-50 text-orange-500 ring-orange-100", solid: "bg-orange-500" },
  blue: { tile: "bg-sky-50 text-azure-600 ring-sky-100", solid: "bg-azure-500" },
  pink: { tile: "bg-pink-50 text-pink-600 ring-pink-100", solid: "bg-pink-500" },
  green: { tile: "bg-emerald-50 text-emerald-600 ring-emerald-100", solid: "bg-emerald-500" },
  indigo: { tile: "bg-indigo-50 text-indigo-600 ring-indigo-100", solid: "bg-indigo-500" },
  amber: { tile: "bg-amber-50 text-amber-600 ring-amber-100", solid: "bg-amber-500" },
};

type IconTileProps = {
  icon: IconComponent;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  variant?: "soft" | "solid";
  className?: string;
};

export function IconTile({ icon: Icon, tone = "violet", size = "md", variant = "soft", className }: IconTileProps) {
  const dims = size === "sm" ? "size-9 rounded-xl" : size === "lg" ? "size-14 rounded-2xl" : "size-11 rounded-xl";
  const iconSize = size === "sm" ? "size-4.5" : size === "lg" ? "size-6.5" : "size-5.5";
  return (
    <span
      aria-hidden
      className={cn(
        "grid shrink-0 place-items-center",
        dims,
        variant === "soft" ? cn("ring-1", toneStyles[tone].tile) : cn("text-white shadow-lg", toneStyles[tone].solid),
        className,
      )}
    >
      <Icon className={iconSize} strokeWidth={1.9} />
    </span>
  );
}
