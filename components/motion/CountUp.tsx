"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Renders the final number on the server; counts up from zero once in view. */
export function CountUp({ value, prefix = "", suffix = "", duration = 1.8, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const final = `${prefix}${value.toLocaleString("en-GB")}${suffix}`;

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.textContent = `${prefix}0${suffix}`;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const frame = (now: number) => {
          const t = Math.min(1, (now - start) / (duration * 1000));
          const eased = 1 - Math.pow(1 - t, 4);
          el.textContent = `${prefix}${Math.round(value * eased).toLocaleString("en-GB")}${suffix}`;
          if (t < 1) raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = final;
    };
  }, [value, prefix, suffix, duration, final]);

  return (
    <span ref={ref} className={className}>
      {final}
    </span>
  );
}
