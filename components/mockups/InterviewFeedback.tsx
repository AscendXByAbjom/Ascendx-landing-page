import Image from "next/image";
import { CheckCircle2, Mic, PhoneOff, Video } from "lucide-react";
import { img } from "@/content/images";
import { InView } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { ProgressBar, ScoreRing } from "./ScoreRing";

const scores = [
  { label: "Communication", value: 90 },
  { label: "Problem Solving", value: 88 },
  { label: "Technical Knowledge", value: 82 },
  { label: "Confidence", value: 88 },
];

export function InterviewVideo({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-[5/4] overflow-hidden rounded-3xl shadow-lift", className)}>
      <Image src={img.interview} alt="Candidate practising an AI interview" fill sizes="(min-width: 1024px) 380px, 90vw" className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-navy-950/20" />
      <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-navy-950/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
        <span className="size-2 animate-pulse rounded-full bg-red-500" /> REC 00:04:23
      </span>
      <span className="absolute top-12 left-4 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
        Practice: Data Analyst
      </span>
      <div className="absolute inset-x-4 bottom-4 flex justify-center">
        <span className="flex gap-2" aria-hidden>
          {[Mic, Video].map((Icon, i) => (
            <span key={i} className="grid size-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur">
              <Icon className="size-3.5" />
            </span>
          ))}
          <span className="grid size-8 place-items-center rounded-full bg-red-500 text-white">
            <PhoneOff className="size-3.5" />
          </span>
        </span>
      </div>
    </div>
  );
}

export function InterviewFeedback({ className }: { className?: string }) {
  return (
    <InView className={cn("rounded-3xl bg-white p-5 shadow-lift ring-1 ring-ink/5 sm:p-6", className)}>
      <p className="text-sm font-bold text-ink">AI Interview Feedback</p>
      <div className="mt-4 flex items-center gap-4">
        <ScoreRing value={87} />
        <div>
          <p className="text-[12px] text-muted">Overall Score</p>
          <p className="font-bold text-emerald-600">Strong performance!</p>
        </div>
      </div>
      <ul className="mt-5 space-y-3.5">
        {scores.map((s, i) => (
          <li key={s.label}>
            <div className="flex items-center justify-between text-[12.5px]">
              <span className="flex items-center gap-1.5 font-medium text-ink/85">
                <CheckCircle2 className="size-3.5 text-emerald-500" aria-hidden /> {s.label}
              </span>
              <span className="font-bold text-ink">{s.value}%</span>
            </div>
            <ProgressBar value={s.value} tone="green" delay={i * 0.1} className="mt-1.5" />
          </li>
        ))}
      </ul>
    </InView>
  );
}
