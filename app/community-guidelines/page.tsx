import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { communityGuidelines } from "@/content/legal";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "The standards that keep AscendX a safe and professional community for everyone.",
};

export default function CommunityGuidelinesPage() {
  return <LegalPage {...communityGuidelines} />;
}
