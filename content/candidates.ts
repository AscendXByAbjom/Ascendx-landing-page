import { Briefcase, Clapperboard, Compass, FileText, GraduationCap, Mic, PlayCircle, Rocket, Target, UserRound } from "lucide-react";
import type { Feature } from "@/components/ui/FeatureCard";
import { IretiMark } from "@/components/ui/IretiMark";
import { cta } from "@/lib/site";
import { adeleke, maureen, olubunmi } from "./testimonials";
import { impactStats } from "./stats";

export const candidates = {
  hero: {
    eyebrow: "For Candidates",
    titleTop: "Your Career.",
    titleAccent: "One Platform.",
    lead: "Discover careers, build in-demand skills, find the right opportunities and get hired, all in an AI-powered platform designed for your future.",
    primary: { label: "Start Your Journey", href: cta.startJourney },
    labels: [
      { icon: Compass, label: "Personalised guidance from Ireti" },
      { icon: Briefcase, label: "Real Opportunities" },
      { icon: Mic, label: "Interview practice with Ireti" },
    ],
  },

  journey: {
    eyebrow: "Your Career Journey",
    titleTop: "Everything you need",
    titleAccent: "to build your career",
    lead: "From discovering new careers to getting hired, AscendX gives you the tools, guidance and opportunities to achieve your goals.",
    features: [
      { icon: Clapperboard, tone: "violet", title: "Discover Careers", body: "Explore real career stories, videos and opportunities." },
      { icon: IretiMark, tone: "teal", title: "Ireti, AI Career Coach", body: "Get personalised advice, career plans and answers to your questions." },
      { icon: GraduationCap, tone: "orange", title: "Learn & Build Skills", body: "Access bite-sized courses, projects and certifications." },
      { icon: Target, tone: "blue", title: "Get Matched", body: "Ireti finds jobs that fit your skills, interests and goals." },
      { icon: FileText, tone: "indigo", title: "Apply with Ease", body: "Use your career profile and Ireti's CV and cover letter help for faster applications." },
      { icon: Mic, tone: "pink", title: "Prepare for Interviews", body: "Practise with Ireti and get real-time feedback." },
    ] satisfies Feature[],
  },

  steps: {
    eyebrow: "In 5 simple steps",
    title: "How it works",
    items: [
      { icon: UserRound, tone: "blue", title: "Create Your Profile", body: "Tell us about your goals, interests and experience." },
      { icon: PlayCircle, tone: "violet", title: "Explore & Learn", body: "Discover career paths, watch videos and build skills." },
      { icon: Target, tone: "teal", title: "Get Matched", body: "Find the right jobs and opportunities for you." },
      { icon: FileText, tone: "indigo", title: "Apply & Prepare", body: "Use Ireti to strengthen your applications and practise interviews." },
      { icon: Rocket, tone: "orange", title: "Get Hired", body: "Land your dream job and keep growing." },
    ] satisfies Feature[],
  },

  proof: {
    eyebrow: "Real people. Real progress.",
    featured: maureen,
    stats: impactStats,
    testimonials: [adeleke, olubunmi],
  },

  final: {
    eyebrow: "Ready to take the next step?",
    title: "Your future is waiting.",
    body: "Join thousands of people building better careers with AscendX.",
    primary: { label: "Get Started Free", href: cta.getStarted },
    secondary: { label: "Explore Careers", href: cta.exploreCareers },
  },
};
