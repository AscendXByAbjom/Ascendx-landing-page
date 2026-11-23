/**
 * About copy, adapted from the business About page (ascendxcareer.ai/AboutPage)
 * and blended with the platform story used across this site.
 */
import { Handshake, HeartHandshake, Rocket, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import type { Feature } from "@/components/ui/FeatureCard";
import { cta } from "@/lib/site";
import { impactStats } from "./stats";

export const about = {
  hero: {
    eyebrow: "About AscendX",
    titleTop: "We're redefining",
    titleAccent: "how careers are built.",
    lead: "Blending human expertise with AI innovation to give every job seeker the tools to rise higher, faster and smarter.",
  },

  story: {
    eyebrow: "Our Story",
    title: "Talent is universal. Opportunity is not.",
    body: [
      "AscendX was built on that simple truth. For years, our team of career specialists worked one-on-one with job seekers, tailoring CVs, crafting cover letters and guiding applications. We learned what recruiters truly look for, which keywords pass ATS filters, and how to turn an applicant's story into impact.",
      "But helping people one at a time wasn't enough. What if our proven expertise could scale? What if AI could carry the knowledge of human experts and make it accessible to everyone? That's how AscendX, and Ireti, our AI career coach, were born. AscendX is more than a tool. It's a partner that helps job seekers everywhere build their own success stories.",
    ],
  },

  mission: {
    eyebrow: "Our Mission",
    title: "Bridge the gap between potential and opportunity.",
    lead: "We believe every professional deserves access to the right tools, guidance and support, no matter their background or budget.",
    pillars: [
      { icon: Zap, tone: "violet", title: "Access for all", body: "Ireti's AI tools for CVs, cover letters, interviews and more, available to everyone." },
      { icon: HeartHandshake, tone: "teal", title: "Stress-free", body: "Simple, seamless support at every step of your job search." },
      { icon: ShieldCheck, tone: "blue", title: "Quality assured", body: "Expert insight combined with a proven record of success." },
    ] satisfies Feature[],
    closing: "From CVs to interviews and application tracking, AscendX is your career partner, giving you the tools and guidance to succeed in today's job market.",
  },

  stats: impactStats,

  values: {
    eyebrow: "Our Core Values",
    title: "What we stand for.",
    items: [
      { icon: Sparkles, tone: "violet", title: "Empowerment", body: "Tools and insights that put you in control of your career." },
      { icon: Target, tone: "pink", title: "Excellence", body: "Every CV, every feature, crafted with precision." },
      { icon: Rocket, tone: "orange", title: "Innovation", body: "Constantly evolving with hiring trends and new technology." },
      { icon: Handshake, tone: "teal", title: "Partnership", body: "Honest, transparent and always putting users first." },
    ] satisfies Feature[],
  },

  final: {
    title: "Join the AscendX community.",
    body: "Thousands of professionals already use AscendX to build smarter CVs, ace interviews and land better jobs. Don't just search. Succeed.",
    primary: { label: "Get Started", href: cta.getStarted },
    secondary: { label: "Contact Us", href: cta.contact },
  },
};
