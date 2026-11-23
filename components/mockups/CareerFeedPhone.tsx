import Image from "next/image";
import { Bell, Heart, MessageCircle, Play, Share2 } from "lucide-react";
import { img, avatars } from "@/content/images";
import { cn } from "@/lib/cn";
import { PhoneFrame } from "./PhoneFrame";
import { PhoneNav } from "./PhoneNav";

/** The AscendX career-feed screen: a short-form video card. */
export function CareerFeedPhone({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <PhoneFrame className={cn("w-[250px]", className)}>
      <div className="flex shrink-0 items-center justify-between px-4 pt-1.5 pb-2">
        <Image src="/brand/ascendx-logo-purple.svg" alt="AscendX" width={78} height={22} className="h-5.5 w-auto" />
        <span className="flex items-center gap-2">
          <Bell className="size-4 text-ink/70" aria-hidden />
          <Image src={avatars.sophie} alt="" width={24} height={24} className="size-6 rounded-full object-cover" />
        </span>
      </div>
      <div className="flex shrink-0 gap-4 px-4 pb-2 text-[11px] font-semibold">
        <span className="relative text-ink">
          For You
          <span className="bg-brand-gradient absolute inset-x-0 -bottom-1 h-[2px] rounded-full" />
        </span>
        <span className="text-muted">Following</span>
      </div>

      <div className="relative mx-2.5 min-h-0 flex-1 overflow-hidden rounded-2xl">
        <Image
          src={img.feedEngineer}
          alt="Software engineer filming a day-in-the-life video"
          fill
          sizes="250px"
          priority={priority}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
        <span className="absolute top-2.5 left-2.5 rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold text-white backdrop-blur">
          Career Feed
        </span>
        <span className="absolute top-1/2 left-1/2 grid size-10 -translate-1/2 place-items-center rounded-full bg-white/25 text-white backdrop-blur">
          <Play className="ml-0.5 size-4 fill-white" aria-hidden />
        </span>
        <div className="absolute inset-x-3 bottom-3 text-white">
          <p className="text-[13px] leading-tight font-bold">A day in the life of a Software Engineer</p>
          <p className="mt-1 text-[9.5px] text-white/75">#TechCareers #DayInTheLife</p>
          <div className="mt-2 flex items-center gap-3 text-[10px] font-semibold">
            <span className="flex items-center gap-1">
              <Heart className="size-3 fill-pink-500 text-pink-500" aria-hidden /> 12.4K
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="size-3" aria-hidden /> 342
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="size-3" aria-hidden /> 1.2K
            </span>
          </div>
        </div>
      </div>
      <PhoneNav />
    </PhoneFrame>
  );
}
