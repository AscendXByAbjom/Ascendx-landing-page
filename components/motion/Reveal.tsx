"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  /** Animate direct children one after another instead of the wrapper. */
  stagger?: number | boolean;
  /** Base delay in seconds. */
  delay?: number;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

/**
 * Fades content up when it scrolls into view. The visual states live in
 * globals.css (`[data-reveal]`), so without JS everything is simply visible.
 * Descendants can also key animations off the `[data-in]` attribute.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  stagger,
  delay = 0,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const step = stagger === true ? 0.07 : typeof stagger === "number" ? stagger : 0;
    if (step) {
      Array.from(el.children).forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${delay + i * step}s`;
      });
    } else if (delay) {
      el.style.transitionDelay = `${delay}s`;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-in", "");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger, delay]);

  return (
    <Tag ref={ref} data-reveal="" data-stagger={stagger ? "" : undefined} {...rest}>
      {children}
    </Tag>
  );
}

/** Same in-view trigger as Reveal but without the fade — for inner animations only. */
export function InView<T extends ElementType = "div">({
  as,
  children,
  ...rest
}: { as?: T; children?: ReactNode } & Omit<ComponentPropsWithoutRef<T>, "as" | "children">) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-in", "");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
