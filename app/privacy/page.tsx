import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AscendX Career Platform collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return <LegalPage {...privacy} />;
}
