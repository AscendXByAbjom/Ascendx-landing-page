import Image, { type StaticImageData } from "next/image";
import {
  Bell,
  Briefcase,
  Building2,
  ChartColumn,
  LayoutDashboard,
  ListFilter,
  Search,
  Settings,
  Users,
  Video,
} from "lucide-react";
import { avatars } from "@/content/images";
import { cn } from "@/lib/cn";

const sidebar = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Briefcase, label: "Jobs" },
  { icon: Users, label: "Candidates", active: true },
  { icon: Video, label: "AI Interviews" },
  { icon: ChartColumn, label: "Analytics" },
  { icon: Building2, label: "Company Profile" },
  { icon: Settings, label: "Settings" },
];

const tabs = [
  { label: "All", count: 128, active: true },
  { label: "Shortlisted", count: 24 },
  { label: "Interviewing", count: 12 },
  { label: "Hired", count: 8 },
];

const candidates: { name: string; role: string; match: number; chips: string[]; avatar: StaticImageData }[] = [
  { name: "Sarah Johnson", role: "Data Analyst", match: 92, chips: ["SQL", "Excel", "Power BI"], avatar: avatars.sarahJohnson },
  { name: "James Okafor", role: "Software Engineer", match: 89, chips: ["JavaScript", "React", "Node.js"], avatar: avatars.jamesOkafor },
  { name: "Aisha Bello", role: "Product Manager", match: 87, chips: ["Strategy", "Analytics", "Communication"], avatar: avatars.aishaBello },
];

export function RecruiterDashboard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl bg-white text-ink shadow-[0_40px_80px_-24px_rgb(0_0_0/0.55)] ring-1 ring-white/20",
        className,
      )}
    >
      <div className="grid md:grid-cols-[168px_1fr]">
        <aside className="hidden border-r border-line bg-mist/60 p-4 md:block" aria-hidden>
          <Image src="/brand/ascendx-logo-purple.svg" alt="AscendX" width={78} height={22} className="mb-5 h-5.5 w-auto" />
          <ul className="space-y-0.5">
            {sidebar.map((s) => (
              <li
                key={s.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11.5px] font-medium",
                  s.active ? "bg-brand-50 text-brand-700" : "text-muted",
                )}
              >
                <s.icon className="size-3.5" />
                {s.label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-line px-2.5 text-[11px] text-muted">
              <Search className="size-3.5" aria-hidden /> Search talent…
            </span>
            <Bell className="size-4 text-muted" aria-hidden />
            <Image src={avatars.davidW} alt="" width={28} height={28} className="size-7 rounded-full object-cover" />
          </div>

          <p className="mt-5 text-base font-bold">Candidates</p>
          <div className="mt-2 flex gap-3 overflow-x-auto border-b border-line text-[10.5px] font-semibold whitespace-nowrap">
            {tabs.map((t) => (
              <span key={t.label} className={cn("relative pb-2", t.active ? "text-brand-700" : "text-muted")}>
                {t.label} ({t.count})
                {t.active && <span className="bg-brand-gradient absolute inset-x-0 -bottom-px h-[2px] rounded-full" />}
              </span>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="flex h-8 flex-1 items-center gap-2 rounded-lg bg-mist px-2.5 text-[11px] text-muted">
              <Search className="size-3.5" aria-hidden /> Search candidates
            </span>
            <span className="flex h-8 items-center gap-1.5 rounded-lg border border-line px-2.5 text-[11px] font-semibold">
              <ListFilter className="size-3.5" aria-hidden /> Filter
            </span>
          </div>

          <ul className="mt-3 divide-y divide-line">
            {candidates.map((c) => (
              <li key={c.name} className="flex items-center gap-3 py-3">
                <Image src={c.avatar} alt="" width={36} height={36} className="size-9 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="text-[12.5px] leading-tight font-bold">{c.name}</p>
                  <p className="text-[10.5px] text-muted">
                    {c.role} · <span className="font-semibold text-emerald-600">{c.match}% match</span>
                  </p>
                  <div className="mt-1.5 hidden flex-wrap gap-1 sm:flex">
                    {c.chips.map((chip) => (
                      <span key={chip} className="rounded bg-mist px-1.5 py-0.5 text-[9.5px] font-medium text-ink/70">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="bg-brand-gradient rounded-md px-3 py-1.5 text-[10.5px] font-semibold text-white">Shortlist</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
