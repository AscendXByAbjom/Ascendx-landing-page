import { Briefcase, Building2, Send } from "lucide-react";
import type { Stat } from "@/components/sections/StatsBand";

/** Platform figures shown on Home, Candidates and About. Update here only. */
export const impactStats = [
  { value: 150, suffix: "K+", label: "Total jobs applied", icon: Send, tone: "violet" },
  { value: 40, suffix: "K+", label: "Total jobs listed", icon: Briefcase, tone: "teal" },
  { value: 4, suffix: "K+", label: "Total employers", icon: Building2, tone: "blue" },
] satisfies Stat[];
