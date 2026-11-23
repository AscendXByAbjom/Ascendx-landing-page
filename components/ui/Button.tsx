import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "dark" | "white" | "outline" | "outline-light" | "ghost" | "ghost-light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-[0_8px_24px_-8px_rgb(91_53_242/0.6)] hover:shadow-[0_12px_32px_-8px_rgb(91_53_242/0.75)] hover:brightness-110",
  dark: "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_8px_24px_-10px_rgb(11_19_48/0.6)]",
  white: "bg-white text-ink hover:bg-brand-50 shadow-[0_8px_24px_-10px_rgb(11_19_48/0.35)]",
  outline: "border border-ink/15 bg-white/60 text-ink hover:border-brand-400 hover:text-brand-700 backdrop-blur",
  "outline-light": "border border-white/35 text-white hover:bg-white/10 hover:border-white/60",
  ghost: "text-brand-600 hover:text-brand-800 px-0!",
  "ghost-light": "text-white/90 hover:text-white px-0!",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", size = "md", arrow = false, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2.25}
        />
      )}
    </Link>
  );
}
