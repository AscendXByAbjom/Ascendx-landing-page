import { ArrowRight, BookOpen, Clock, Megaphone, PenTool, Sheet } from "lucide-react";
import { InView } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { ProgressBar } from "./ScoreRing";

const recommended = [
  { title: "Excel for Business", meta: "Beginner · 6 lessons", icon: Sheet, tile: "bg-emerald-50 text-emerald-600" },
  { title: "UI/UX Design Basics", meta: "Beginner · 8 lessons", icon: PenTool, tile: "bg-pink-50 text-pink-600" },
  { title: "Digital Marketing", meta: "Intermediate · 10 lessons", icon: Megaphone, tile: "bg-orange-50 text-orange-500" },
];

export function LearningDashboard({ className }: { className?: string }) {
  return (
    <InView className={cn("rounded-3xl bg-white p-5 shadow-lift ring-1 ring-ink/5 sm:p-6", className)}>
      <div className="flex gap-5 border-b border-line text-[13px] font-semibold">
        {["Courses", "Projects", "Learning Path"].map((t, i) => (
          <span key={t} className={cn("relative pb-3", i === 0 ? "text-brand-700" : "text-muted")}>
            {t}
            {i === 0 && <span className="bg-brand-gradient absolute inset-x-0 -bottom-px h-[2px] rounded-full" />}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-linear-to-br from-brand-50 to-sky-50 p-4 ring-1 ring-brand-100 sm:flex-row sm:items-center">
        <span aria-hidden className="grid size-16 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-lg">
          <BookOpen className="size-7" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-ink">Data Analysis with Python</p>
          <p className="mt-0.5 flex items-center gap-2 text-[12px] text-muted">
            <span className="rounded bg-white px-1.5 py-0.5 font-semibold text-brand-700">Beginner</span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" aria-hidden /> 4h 30m · 12 lessons
            </span>
          </p>
          <div className="mt-3 flex items-center gap-3">
            <ProgressBar value={35} className="flex-1" />
            <span className="text-[11px] font-semibold text-muted">35%</span>
          </div>
        </div>
      </div>
      <span className="bg-brand-gradient mt-3 flex items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-semibold text-white">
        Start Learning <ArrowRight className="size-4" aria-hidden />
      </span>

      <p className="mt-6 text-[13px] font-bold text-ink">Recommended for you</p>
      <ul className="mt-3 grid gap-3 sm:grid-cols-3">
        {recommended.map((r) => (
          <li key={r.title} className="flex items-center gap-3 rounded-xl border border-line p-3 sm:flex-col sm:items-start">
            <span aria-hidden className={cn("grid size-9 place-items-center rounded-lg", r.tile)}>
              <r.icon className="size-4.5" />
            </span>
            <span>
              <span className="block text-[12.5px] leading-tight font-bold text-ink">{r.title}</span>
              <span className="mt-0.5 block text-[11px] text-muted">{r.meta}</span>
            </span>
          </li>
        ))}
      </ul>
    </InView>
  );
}
