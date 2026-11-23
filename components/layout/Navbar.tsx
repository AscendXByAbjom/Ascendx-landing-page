"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { cta, nav } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { setScrollLocked } from "@/components/motion/SmoothScroll";
import { Logo } from "./Logo";

/** Routes whose hero is dark, so the bar starts with light text. */
const DARK_HERO_ROUTES = new Set(["/"]);

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    setScrollLocked(open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const light = DARK_HERO_ROUTES.has(pathname) && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        scrolled && !open ? "bg-white/80 shadow-[0_1px_0_rgb(14_20_48/0.06),0_8px_30px_-12px_rgb(14_20_48/0.12)] backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only rounded-full bg-white px-4 py-2 font-semibold text-ink focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <div className="container-x flex h-[76px] items-center justify-between gap-6">
        <Logo light={light} className="relative z-50" />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[0.875rem] font-medium transition-colors duration-300",
                      light ? "text-white/80 hover:text-white" : "text-ink/70 hover:text-ink",
                      active && (light ? "text-white" : "text-ink"),
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "bg-brand-gradient absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full transition-transform duration-500",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={cta.login}
            className={cn(
              "rounded-full px-4 py-2 text-[0.875rem] font-semibold transition-colors",
              light ? "text-white hover:text-white/80" : "text-ink hover:text-brand-700",
            )}
          >
            Log In
          </Link>
          <Button href={cta.getStarted} size="sm" className="h-10 px-5">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "relative z-50 grid size-11 place-items-center rounded-full transition-colors lg:hidden",
            light ? "text-white hover:bg-white/10" : "text-ink hover:bg-ink/5",
          )}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-white lg:hidden"
        data-lenis-prevent
      >
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full bg-brand-200/50 blur-3xl" />
        <nav aria-label="Mobile" className="container-x relative flex min-h-full flex-col pt-28 pb-10">
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="hero-rise border-b border-line"
                style={{ ["--d" as string]: `${i * 0.05}s` }}
              >
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between py-4 text-2xl font-bold tracking-tight",
                    pathname === item.href ? "text-brand-600" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Button href={cta.getStarted} size="lg" arrow>
              Get Started
            </Button>
            <Button href={cta.login} variant="outline" size="lg">
              Log In
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
