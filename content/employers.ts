import { Briefcase, ChartColumn, Megaphone, PartyPopper, ScanSearch, ShieldCheck, Target, UserCheck, Users, Video } from "lucide-react";
import type { Feature } from "@/components/ui/FeatureCard";
import { cta, SHOW_REAL_BRANDS } from "@/lib/site";
import { avatars } from "./images";

export const employers = {
  hero: {
    eyebrow: "For Employers",
    titleTop: "Find. Assess. Hire.",
    titleAccent: "The right talent.",
    lead: "AscendX helps you discover, engage and hire the best candidates faster, with candidate matching and AI interviews from Ireti, our AI. Build a stronger team and a brighter future.",
    primary: { label: "Post a Job", href: cta.postJob },
    annotation: ["Better talent.", "Stronger teams."],
    strip: [
      { icon: ShieldCheck, title: "Verified Talent", body: "With real skills" },
      { icon: Target, title: "Ireti Matching", body: "For better hires" },
      { icon: Video, title: "AI Interviews", body: "Save time and reduce bias" },
      { icon: ChartColumn, title: "Employer Analytics", body: "Track your success" },
    ],
  },

  why: {
    eyebrow: "Why AscendX?",
    title: "Smarter recruitment for a changing world.",
    lead: "The next generation of talent is looking for more than just a job. They want purpose, growth and opportunity. AscendX gives you the tools to reach, engage and hire this talent, with the power of Ireti, our AI.",
    cta: { label: "Get Started", href: cta.getStarted },
    benefits: [
      { icon: Users, tone: "violet", title: "Reach relevant talent", body: "Showcase your brand and opportunities through short-form videos and engaging content." },
      { icon: Target, tone: "teal", title: "Matching by Ireti", body: "Find candidates with the right skills, experience and potential." },
      { icon: Video, tone: "indigo", title: "AI interviews with Ireti", body: "Save time and get objective assessments from AI-powered interviews." },
      { icon: Briefcase, tone: "orange", title: "Manage your hiring", body: "Use our recruitment dashboard to track, shortlist and hire faster." },
      { icon: ChartColumn, tone: "pink", title: "Actionable analytics", body: "Measure your performance and make data-driven hiring decisions." },
    ] satisfies Feature[],
  },

  solution: {
    eyebrow: "Our Solution",
    title: "Everything you need to hire, in one platform.",
    lead: "From job posting to onboarding, AscendX streamlines your entire recruitment process with Ireti, our AI.",
    capabilities: [
      "Post jobs and reach qualified candidates.",
      "Use Ireti to match and screen talent.",
      "Conduct AI interviews with Ireti and get structured reports.",
      "Track your hiring pipeline.",
      "Access real-time analytics.",
    ],
    cta: { label: "Explore Employer Platform", href: cta.exploreEmployerPlatform },
    cards: [
      { icon: Target, tone: "violet", title: "Ireti Matching", body: "Find the best candidates instantly." },
      { icon: Video, tone: "blue", title: "AI Interviews", body: "Ireti assesses candidates objectively." },
      { icon: ChartColumn, tone: "orange", title: "Recruitment Analytics", body: "Track performance and improve hiring outcomes." },
    ] satisfies Feature[],
  },

  steps: {
    eyebrow: "Simple. Fast. Effective.",
    title: "How it works",
    items: [
      { icon: Megaphone, tone: "violet", title: "Post a Job", body: "Create your vacancy and set your requirements." },
      { icon: ScanSearch, tone: "teal", title: "Ireti Finds Talent", body: "Ireti matches you with relevant candidates." },
      { icon: ShieldCheck, tone: "blue", title: "Screen & Assess", body: "Use Ireti's screening and interviews to evaluate skills and fit." },
      { icon: UserCheck, tone: "indigo", title: "Shortlist & Interview", body: "Review top candidates and move them through your hiring pipeline." },
      { icon: PartyPopper, tone: "orange", title: "Hire", body: "Make your decision and onboard with confidence." },
    ] satisfies Feature[],
  },

  trust: {
    eyebrow: "Trusted by leading employers",
    title: "Forward-thinking companies hire with AscendX.",
    lead: "Join a growing community of employers finding great talent, faster.",
    testimonial: {
      quote:
        "AscendX has transformed our hiring process. We've found high-quality candidates faster, with much less time spent on screening. It's a game changer.",
      name: SHOW_REAL_BRANDS ? "David Williams" : "D. Williams",
      role: SHOW_REAL_BRANDS ? "Head of Talent Acquisition, Unilever" : "Head of Talent Acquisition, Global FMCG company",
      avatar: avatars.davidW,
    },
  },

  final: {
    eyebrow: "Ready to find your next great hire?",
    title: "Build your dream team with AscendX.",
    body: "Join thousands of forward-thinking employers already hiring smarter.",
    primary: { label: "Get Started Today", href: cta.getStarted },
    secondary: { label: "Book a Demo", href: cta.bookDemo },
  },
};
