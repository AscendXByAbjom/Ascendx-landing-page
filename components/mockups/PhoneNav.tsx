import { Briefcase, House, Plus, Search, UserRound } from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
  { icon: House, label: "Home" },
  { icon: Search, label: "Explore" },
  null,
  { icon: Briefcase, label: "Jobs" },
  { icon: UserRound, label: "Profile" },
];

export function PhoneNav({ dark }: { dark?: boolean }) {
  return (
    <div
      aria-hidden
      className={cn(
        "mt-auto flex shrink-0 items-end justify-around border-t px-2 pt-2 pb-4",
        dark ? "border-white/10 bg-navy-900" : "border-line bg-white",
      )}
    >
      {items.map((item, i) =>
        item ? (
          <span key={item.label} className={cn("flex flex-col items-center gap-0.5 text-[9px]", i === 0 ? "text-brand-600" : "text-muted")}>
            <item.icon className="size-4" strokeWidth={2} />
            {item.label}
          </span>
        ) : (
          <span key="plus" className="bg-brand-gradient -mt-2 grid size-9 place-items-center rounded-full text-white shadow-lg shadow-brand-500/40">
            <Plus className="size-4.5" strokeWidth={2.5} />
          </span>
        ),
      )}
    </div>
  );
}
