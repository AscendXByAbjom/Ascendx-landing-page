import type { StaticImageData } from "next/image";
import { Quote } from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar } from "./Avatar";

export type Testimonial = { quote: string; name: string; role: string; avatar: StaticImageData };

type TestimonialCardProps = Testimonial & { compact?: boolean; className?: string };

/** Quote runs full width; the person sits underneath so long quotes stay readable on narrow cards. */
export function TestimonialCard({ quote, name, role, avatar, compact, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-2xl border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift",
        compact ? "p-5" : "p-6 sm:p-7",
        className,
      )}
    >
      <Quote aria-hidden className={cn("shrink-0 fill-brand-100 text-brand-300", compact ? "size-5" : "size-6")} strokeWidth={1.5} />
      <blockquote className={cn("mt-3 mb-5 leading-relaxed text-ink/85", compact ? "text-sm" : "text-[0.9375rem]")}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className={cn("mt-auto flex items-center gap-3 border-t border-line", compact ? "pt-4" : "pt-5")}>
        <Avatar src={avatar} size={compact ? 40 : 48} className="ring-brand-50" />
        <span className="min-w-0">
          <span className="block text-sm font-bold text-ink">{name}</span>
          <span className="block text-[0.8125rem] text-muted">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
