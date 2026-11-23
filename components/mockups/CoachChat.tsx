import { SendHorizontal } from "lucide-react";
import { IretiMark } from "@/components/ui/IretiMark";
import { InView } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const options = ["Data Analyst", "Business Intelligence Analyst", "Data Engineer", "Financial Analyst", "Product Analyst"];

/** AI coach conversation — the reply "types in" when scrolled into view. */
export function CoachChat({ className }: { className?: string }) {
  return (
    <InView className={cn("flex flex-col rounded-3xl bg-white shadow-lift ring-1 ring-ink/5", className)}>
      <div className="flex items-center gap-3 border-b border-line px-5 py-4">
        <span aria-hidden className="bg-brand-gradient grid size-9 place-items-center rounded-full text-white">
          <IretiMark className="size-5" />
        </span>
        <div>
          <p className="text-sm font-bold text-ink">Ireti</p>
          <p className="flex items-center gap-1.5 text-[11px] text-muted">
            <span className="size-1.5 rounded-full bg-emerald-500" /> Your AscendX AI career coach
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-4 px-5 py-5">
        <p className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-brand-50 px-4 py-3 text-[13.5px] leading-relaxed text-ink">
          What career options are best suited to my skills and experience?
        </p>

        <div className="flex gap-2.5">
          <span aria-hidden className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
            <IretiMark className="size-4" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="chat-typing w-fit items-center gap-1 rounded-2xl rounded-tl-md bg-mist px-4 py-3" aria-hidden>
              <span className="typing-dot size-1.5 rounded-full bg-brand-500" />
              <span className="typing-dot size-1.5 rounded-full bg-brand-500 [animation-delay:0.15s]" />
              <span className="typing-dot size-1.5 rounded-full bg-brand-500 [animation-delay:0.3s]" />
            </div>
            <div className="rounded-2xl rounded-tl-md bg-mist px-4 py-3 text-[13.5px] leading-relaxed text-ink">
              <p className="chat-line" style={{ ["--i" as string]: 0 }}>
                Based on your skills, experience and interests, here are 5 career options that could be a great fit for you:
              </p>
              <ol className="mt-2 space-y-1">
                {options.map((o, i) => (
                  <li key={o} className="chat-line flex gap-2" style={{ ["--i" as string]: i + 1 }}>
                    <span className="font-semibold text-brand-600">{i + 1}.</span> {o}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 mt-0 flex items-center gap-2 rounded-full border border-line py-1.5 pr-1.5 pl-4">
        <span className="flex-1 text-[13px] text-muted">Ask me anything…</span>
        <span aria-hidden className="bg-brand-gradient grid size-8 place-items-center rounded-full text-white">
          <SendHorizontal className="size-4" />
        </span>
      </div>
    </InView>
  );
}
