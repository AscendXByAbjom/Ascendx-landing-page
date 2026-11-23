import Image from "next/image";
import { Building, MapPin, PoundSterling } from "lucide-react";
import { avatars } from "@/content/images";
import { cn } from "@/lib/cn";

const chips = ["SQL", "Excel", "Power BI", "Python"];

export function CandidateCard({ className }: { className?: string }) {
  return (
    <div className={cn("w-[320px] rounded-3xl bg-white p-5 shadow-[0_30px_70px_-20px_rgb(11_19_48/0.4)] ring-1 ring-ink/5", className)}>
      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
        92% Match
      </span>
      <p className="mt-2.5 text-lg font-extrabold tracking-tight text-ink">Data Analyst</p>
      <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted">
        <span className="flex items-center gap-1">
          <MapPin className="size-3.5" aria-hidden /> London
        </span>
        <span className="flex items-center gap-1">
          <Building className="size-3.5" aria-hidden /> Hybrid
        </span>
        <span className="flex items-center gap-1">
          <PoundSterling className="size-3.5" aria-hidden /> £45k–£55k
        </span>
      </p>
      <div className="my-4 h-px bg-line" />
      <div className="flex items-center gap-3">
        <Image src={avatars.sarahJohnson} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
        <div>
          <p className="text-sm font-bold text-ink">Sarah Johnson</p>
          <p className="text-[12px] text-muted">Data Analyst · 2 years&apos; experience</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {chips.map((c) => (
          <span key={c} className="rounded-md border border-line px-2 py-0.5 text-[11px] font-medium text-ink/75">
            {c}
          </span>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <span className="rounded-full border border-brand-200 py-2 text-center text-[13px] font-semibold text-brand-700">
          View Profile
        </span>
        <span className="bg-brand-gradient rounded-full py-2 text-center text-[13px] font-semibold text-white">Shortlist</span>
      </div>
    </div>
  );
}
