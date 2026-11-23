import { Check, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";

const evidence = ["Practical assessment", "Portfolio project", "Course completion"];

export function VerifiedSkillCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[280px] rounded-3xl border border-white/10 bg-navy-800/80 p-6 text-white shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span aria-hidden className="grid size-10 place-items-center rounded-xl bg-azure-500/20 text-azure-400">
          <ShieldCheck className="size-5.5" />
        </span>
        <span className="font-bold">Verified Skill</span>
      </div>
      <p className="mt-5 text-2xl font-extrabold tracking-tight">Python</p>
      <p className="text-sm text-white/60">AscendX Assessment</p>
      <div className="mt-4 flex items-center justify-between rounded-xl bg-white/[0.06] px-4 py-3 text-sm">
        <span>
          Score: <strong className="text-emerald-400">92%</strong>
        </span>
        <span className="text-white/80">Intermediate</span>
      </div>
      <p className="mt-5 text-sm font-bold">Evidence</p>
      <ul className="mt-2 space-y-1.5">
        {evidence.map((e) => (
          <li key={e} className="flex items-center gap-2 text-sm text-white/75">
            <Check className="size-4 text-emerald-400" strokeWidth={2.5} aria-hidden />
            {e}
          </li>
        ))}
      </ul>
      <span className="mt-6 block rounded-full border border-azure-400/60 py-2.5 text-center text-sm font-semibold text-azure-400">
        View Evidence
      </span>
    </div>
  );
}
