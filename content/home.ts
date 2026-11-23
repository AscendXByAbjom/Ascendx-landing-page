import { Briefcase, Clapperboard, Compass, GraduationCap, Mic, ScanSearch, Send, Target, Video } from "lucide-react";
import type { Feature } from "@/components/ui/FeatureCard";
import { IretiMark } from "@/components/ui/IretiMark";
import { cta } from "@/lib/site";
import { testimonials } from "./testimonials";
import { impactStats } from "./stats";

export const home = {
  hero: {
    eyebrow: "Your career. Powered by Ireti AI.",
    titleTop: "Discover. Develop.",
    titleAccent: "Get Hired.",
    lead: "AscendX Career Platform is the all-in-one AI-powered platform that helps you explore career options, build in-demand skills, find the right opportunities and land your dream job.",
    primary: { label: "Start Your Journey", href: cta.startJourney },
    strip: [
      { icon: Compass, label: "Career guidance from Ireti" },
      { icon: GraduationCap, label: "Personalised Learning" },
      { icon: Target, label: "Job Matching" },
      { icon: Mic, label: "AI interviews with Ireti" },
    ],
  },

  seekers: {
    eyebrow: "For Career Seekers",
    title: "Explore career paths that fit your future",
    lead: "Get inspired, build relevant skills and find opportunities with Ireti, your AI career guide, all in one place.",
    cta: { label: "Get Started", href: cta.getStarted },
    features: [
      { icon: Clapperboard, tone: "violet", title: "Career Feed", body: "Short videos and real stories to help you discover new career paths." },
      { icon: IretiMark, tone: "teal", title: "Ireti, AI Career Coach", body: "Get personalised advice, career plans, CV and cover letter help, and answers to your questions." },
      { icon: GraduationCap, tone: "orange", title: "Learn & Build Skills", body: "Access bite-sized courses and certifications to grow your skills." },
      { icon: Target, tone: "blue", title: "Job Match", body: "Ireti finds roles that match your skills, interests and goals." },
      { icon: Mic, tone: "pink", title: "AI Interview Prep", body: "Practise with Ireti and get real-time feedback." },
      { icon: Send, tone: "indigo", title: "Apply & Get Hired", body: "Apply easily and track your progress." },
    ] satisfies Feature[],
  },

  employers: {
    eyebrow: "For Employers",
    title: "Find, assess and hire the right talent, faster",
    lead: "Access a new generation of motivated talent and use Ireti, our AI, to streamline your hiring process.",
    cta: { label: "Hire Talent", href: cta.hireTalent },
    banner: "Build diverse, skilled and future-ready teams with AscendX.",
    features: [
      { icon: Briefcase, tone: "violet", title: "Employer Job Board", body: "Reach high-potential candidates actively looking for opportunities." },
      { icon: ScanSearch, tone: "teal", title: "Ireti Candidate Matching", body: "Save time with intelligent screening and matching." },
      { icon: Video, tone: "orange", title: "AI interviews with Ireti", body: "Conduct remote interviews and get structured insights." },
    ] satisfies Feature[],
  },

  impact: {
    eyebrow: "Real Impact",
    title: "More than just a job board",
    lead: "AscendX is a complete career ecosystem, connecting thousands of people with opportunities and helping employers build stronger teams.",
    cta: { label: "About Us", href: cta.aboutUs },
    stats: impactStats,
  },

  stories: {
    eyebrow: "Success Stories",
    title: "Real people. Real progress.",
    testimonials,
  },

  final: {
    title: "Ready to take the next step?",
    body: "Join thousands of people and employers already using AscendX to build better careers and stronger teams.",
    primary: { label: "Get Started", href: cta.getStarted },
    secondary: { label: "Learn More", href: cta.learnMore },
  },
};
