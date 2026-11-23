import Image from "next/image";
import { img } from "@/content/images";
import { cn } from "@/lib/cn";
import { PhoneFrame } from "./PhoneFrame";

/** Phone showing the real AscendX app (career feed screenshot from the product team). */
export function AppScreenPhone({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <PhoneFrame dark statusBar={false} className={cn("w-[250px]", className)} screenClassName="bg-[#0c1220]">
      <div className="relative min-h-0 flex-1">
        <Image
          src={img.appFeed}
          alt="The AscendX app career feed: a creator video titled Before your first data role"
          fill
          priority={priority}
          sizes="260px"
          className="object-cover object-top"
        />
      </div>
      <div aria-hidden className="flex h-5 shrink-0 items-center justify-center">
        <span className="h-1 w-1/3 rounded-full bg-white/70" />
      </div>
    </PhoneFrame>
  );
}
