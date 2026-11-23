import { cn } from "@/lib/cn";
import { InView } from "@/components/motion/Reveal";

type AnnotationProps = {
  lines: readonly string[];
  className?: string;
  rotate?: number;
  dark?: boolean;
};

/** Handwritten note (Caveat) with an underline that draws itself in. */
export function Annotation({ lines, className, rotate = -8, dark }: AnnotationProps) {
  return (
    <InView
      aria-hidden
      className={cn("pointer-events-none select-none font-hand leading-[0.95]", dark ? "text-white" : "text-brand-700", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {lines.map((line) => (
        <span key={line} className="block text-[1.75rem] font-bold md:text-[2rem]">
          {line}
        </span>
      ))}
      <svg viewBox="0 0 200 30" fill="none" className="mt-1 h-6 w-44">
        <path
          className="draw-path"
          pathLength={1}
          d="M4 22 C 50 8, 120 4, 196 10"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
        />
      </svg>
    </InView>
  );
}
