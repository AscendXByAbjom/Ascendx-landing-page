import { MapPin } from "lucide-react";
import { cn } from "@/lib/cn";

const jobs = [
  { title: "Junior Data Analyst", company: "TechSolutions Ltd", location: "Remote", salary: "£35K–£45K", type: "Full-time", logo: "T", tile: "from-azure-500 to-brand-500", badge: "95% match" },
  { title: "Software Engineer", company: "InnovateTech", location: "London", salary: "£50K–£70K", type: "Hybrid", logo: "I", tile: "from-emerald-500 to-teal-500" },
  { title: "Product Assistant", company: "GrowthCorp", location: "Manchester", salary: "£30K–£40K", type: "Full-time", logo: "G", tile: "from-rose-500 to-orange-400" },
];

export function JobsList({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-3xl bg-white p-5 shadow-lift ring-1 ring-ink/5 sm:p-6", className)}>
      <div className="flex gap-5 border-b border-line text-[13px] font-semibold">
        {["Recommended", "Saved", "Applied"].map((t, i) => (
          <span key={t} className={cn("relative pb-3", i === 0 ? "text-brand-700" : "text-muted")}>
            {t}
            {i === 0 && <span className="bg-brand-gradient absolute inset-x-0 -bottom-px h-[2px] rounded-full" />}
          </span>
        ))}
      </div>
      <ul className="mt-2 divide-y divide-line">
        {jobs.map((j) => (
          <li key={j.title} className="flex items-center gap-3.5 py-4">
            <span aria-hidden className={cn("grid size-11 shrink-0 place-items-center rounded-xl bg-linear-to-br text-lg font-extrabold text-white", j.tile)}>
              {j.logo}
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-2 text-[14px] font-bold text-ink">
                {j.title}
                {j.badge && (
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">{j.badge}</span>
                )}
              </p>
              <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[12px] text-muted">
                <span>{j.company}</span>
                <span className="flex items-center gap-0.5">
                  <MapPin className="size-3" aria-hidden /> {j.location}
                </span>
              </p>
              <p className="mt-0.5 text-[12px] font-medium text-ink/70">
                {j.salary} · {j.type}
              </p>
            </div>
            <span className="bg-brand-gradient rounded-lg px-4 py-2 text-[12px] font-semibold text-white">Apply</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
