import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SHOW_REAL_BRANDS } from "@/lib/site";

/**
 * Partner wordmarks. Real brands render only while SHOW_REAL_BRANDS is on
 * (staging); otherwise neutral placeholder marks are shown.
 */
const realBrands: { name: string; mark: ReactNode }[] = [
  {
    name: "Microsoft",
    mark: (
      <span className="flex items-center gap-2 text-[1.05rem] font-semibold tracking-tight">
        <span aria-hidden className="grid grid-cols-2 gap-[2px]">
          <span className="size-2 bg-[#f25022]" />
          <span className="size-2 bg-[#7fba00]" />
          <span className="size-2 bg-[#00a4ef]" />
          <span className="size-2 bg-[#ffb900]" />
        </span>
        Microsoft
      </span>
    ),
  },
  { name: "Deloitte", mark: <span className="text-[1.2rem] font-bold tracking-tight">Deloitte<span className="text-[#86bc25]">.</span></span> },
  { name: "J.P. Morgan", mark: <span className="font-serif text-[1.15rem] tracking-tight">J.P.Morgan</span> },
  {
    name: "Unilever",
    mark: (
      <span className="flex items-center gap-1.5 text-[1rem] font-bold">
        <span aria-hidden className="grid size-7 place-items-center rounded-full bg-[#1f36c7] font-serif text-sm text-white">U</span>
        Unilever
      </span>
    ),
  },
  { name: "Tesco", mark: <span className="border-b-2 border-dashed border-[#ee1c2e] text-[1.2rem] font-black tracking-wider text-[#00539f]">TESCO</span> },
  { name: "NHS", mark: <span className="bg-[#005eb8] px-2 py-0.5 text-[1.05rem] font-black text-white italic">NHS</span> },
  { name: "Accenture", mark: <span className="text-[1.1rem] font-semibold tracking-tight">accenture<span className="align-super text-[0.7rem] text-[#a100ff]">&gt;</span></span> },
  {
    name: "Vodafone",
    mark: (
      <span className="flex items-center gap-1.5 text-[1.05rem] font-semibold">
        <span aria-hidden className="size-5 rounded-full bg-[#e60000]" />
        vodafone
      </span>
    ),
  },
];

const placeholderBrands = ["Northwind", "Lumen & Co", "Apexa", "Brightpath", "Kinetic", "Halcyon", "Orbital", "Meridian"].map((name) => ({
  name,
  mark: <span className="text-[1.1rem] font-bold tracking-tight">{name}</span>,
}));

export function LogoCloud() {
  const brands = SHOW_REAL_BRANDS ? realBrands : placeholderBrands;
  return (
    <Reveal as="ul" stagger={0.05} className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {brands.map((b) => (
        <li key={b.name} className="flex items-center justify-center text-ink/80 grayscale-[35%] transition-all duration-300 hover:grayscale-0 hover:text-ink">
          <span className="sr-only">{b.name}</span>
          <span aria-hidden>{b.mark}</span>
        </li>
      ))}
    </Reveal>
  );
}
