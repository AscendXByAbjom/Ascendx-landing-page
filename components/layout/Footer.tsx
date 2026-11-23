import Link from "next/link";
import { footerNav, legalNav, site, socials } from "@/lib/site";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x">
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          <Logo light />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full bg-white/[0.06] text-white/80 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
                >
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[0.8125rem] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
