import type { ReactNode } from "react";
import { BatteryFull, Signal, Wifi } from "lucide-react";
import { cn } from "@/lib/cn";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  /** Hide the drawn status bar, e.g. when the screen is a real app screenshot that has its own. */
  statusBar?: boolean;
  screenClassName?: string;
};

/** Device chrome shared by all phone mockups. Size it with a width class. */
export function PhoneFrame({ children, className, dark, statusBar = true, screenClassName }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2.75rem] bg-navy-950 p-[9px] shadow-[0_40px_80px_-24px_rgb(11_19_48/0.55)] ring-1 ring-white/15",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex aspect-[9/19] flex-col overflow-hidden rounded-[2.2rem]",
          dark ? "bg-navy-900 text-white" : "bg-white text-ink",
          screenClassName,
        )}
      >
        <div aria-hidden className="absolute top-2 left-1/2 z-20 h-[22px] w-[34%] -translate-x-1/2 rounded-full bg-navy-950" />
        {statusBar && (
          <div className="flex shrink-0 items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold">
            <span>9:41</span>
            <span className="flex items-center gap-1" aria-hidden>
              <Signal className="size-3" />
              <Wifi className="size-3" />
              <BatteryFull className="size-3.5" />
            </span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
