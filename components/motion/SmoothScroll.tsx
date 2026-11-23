"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Pause/resume smooth scrolling (used by the mobile menu). */
export function setScrollLocked(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({ lerp: 0.1, autoRaf: true, anchors: { offset: -80 } });
    lenis = instance;
    return () => {
      instance.destroy();
      lenis = null;
    };
  }, []);

  // New page: start at the top.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
