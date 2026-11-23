import Image from "next/image";
import { BadgeCheck, Code2, Database, PieChart, Sheet } from "lucide-react";
import { avatars } from "@/content/images";
import { cn } from "@/lib/cn";
import { PhoneFrame } from "./PhoneFrame";
import { PhoneNav } from "./PhoneNav";
import { ProgressBar } from "./ScoreRing";

const skills = [
  { name: "Python", by: "Verified by Assessment", score: 92, icon: Code2 },
  { name: "SQL", by: "Verified by Project", score: 88, icon: Database },
  { name: "Excel", by: "Verified by Employer", score: 90, icon: Sheet },
  { name: "Data Analysis", by: "Verified by Interview", score: 87, icon: PieChart },
];

export function SkillsPhone({ className }: { className?: string }) {
  return (
    <PhoneFrame className={cn("w-[260px]", className)}>
      <div className="flex shrink-0 items-center gap-3 px-4 pt-3 pb-3">
        <Image src={avatars.sarahJohnson} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
        <div className="min-w-0">
          <p className="text-[14px] leading-tight font-bold">Sarah Johnson</p>
          <p className="text-[10.5px] text-muted">Data Analyst · London, UK</p>
          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9.5px] font-semibold text-emerald-700">
            <BadgeCheck className="size-3" aria-hidden /> 4 Verified Skills
          </span>
        </div>
      </div>
      <div className="min-h-0 flex-1 bg-mist px-3 pt-3">
        <p className="px-1 pb-2 text-[12px] font-bold">Verified Skills</p>
        <ul className="space-y-2">
          {skills.map((s, i) => (
            <li key={s.name} className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-ink/5">
              <div className="flex items-center gap-2.5">
                <span aria-hidden className="grid size-7 place-items-center rounded-lg bg-navy-900 text-white">
                  <s.icon className="size-3.5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11.5px] leading-tight font-bold">{s.name}</span>
                  <span className="block text-[9.5px] text-muted">{s.by}</span>
                </span>
                <span className="text-[12px] font-bold text-emerald-600">{s.score}%</span>
              </div>
              <ProgressBar value={s.score} tone="green" delay={i * 0.12} className="mt-2 h-1" />
            </li>
          ))}
        </ul>
      </div>
      <PhoneNav />
    </PhoneFrame>
  );
}
