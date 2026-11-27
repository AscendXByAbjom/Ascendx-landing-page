import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of AscendX Career Platform.",
};

export default function TermsPage() {
  return <LegalPage {...terms} />;
}
