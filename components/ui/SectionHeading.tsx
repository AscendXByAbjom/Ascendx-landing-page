import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowNumber?: string;
  title: ReactNode;
  lead?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, eyebrowNumber, title, lead, dark, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={dark ? "light" : "brand"} number={eyebrowNumber} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={cn("display-2", dark && "text-white")}>{title}</h2>
      {lead && <p className={cn("lead mt-5", dark ? "text-white/70" : "text-body")}>{lead}</p>}
    </div>
  );
}
