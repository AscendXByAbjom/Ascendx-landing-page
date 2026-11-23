import { BadgeCheck, Briefcase, Building2, CalendarDays, Clapperboard, Play, Sparkles, BookOpenText } from "lucide-react";
import { cta } from "@/lib/site";

export const features = {
  hero: {
    eyebrow: "Features",
    titleTop: "Everything you need",
    titleAccent: "for your career journey.",
    lead: "AscendX Career Platform brings together career discovery, skills development, AI guidance and real job opportunities, all in one powerful platform.",
    primary: { label: "Get Started Free", href: cta.getStarted },
    annotation: ["Discover. Learn.", "Build. Get Hired."],
    cards: [
      { icon: Play, title: "Your Career, One Swipe Away", subtitle: "Career discovery through short-form content" },
      { icon: Sparkles, title: "AI Career Coach", subtitle: "Personalised guidance" },
      { icon: BadgeCheck, title: "Verified Skills", subtitle: "Show what you can do" },
      { icon: Briefcase, title: "Real Job Opportunities", subtitle: "Apply with confidence" },
    ],
  },

  feed: {
    number: "01",
    eyebrow: "The Career Feed",
    titleTop: "Discover careers, opportunities and",
    titleAccent: "inspiration.",
    lead: "Swipe through personalised short-form videos from real professionals, employers and career creators. Discover new careers, learn from industry experts and find opportunities that match your goals.",
    list: ["Personalised feed", "Follow your favourite creators and employers", "Like, save and share content", "Explore jobs directly from videos"],
    find: [
      { icon: Clapperboard, label: "Career videos" },
      { icon: Building2, label: "Employer profiles" },
      { icon: Briefcase, label: "Job opportunities" },
      { icon: BookOpenText, label: "Career stories" },
      { icon: CalendarDays, label: "Live events" },
    ],
  },

  coach: {
    number: "02",
    eyebrow: "AI Career Coach",
    titleTop: "Get personalised guidance,",
    titleAccent: "powered by AI.",
    lead: "Ask questions, explore career options, understand your skills gaps and get a clear action plan. Your AI Career Coach is always available, ready to help you make better career decisions.",
    list: ["Career advice and recommendations", "Skill gap analysis", "Career path planning", "Personalised action plans"],
    more: ["Compare different career paths", "Find relevant jobs", "Suggest learning resources", "Prepare for interviews", "Build your career roadmap"],
    annotation: ["Smarter career", "decisions, faster."],
  },

  learn: {
    number: "03",
    eyebrow: "Learn & Build Skills",
    titleTop: "Gain in-demand skills",
    titleAccent: "and build your portfolio.",
    lead: "Access expert-led courses, practical projects and bite-sized learning content designed to help you build real-world skills and showcase your work.",
    list: ["Expert-led courses", "Hands-on projects", "Certificates and badges", "Track your progress"],
    portfolio: {
      title: "Your real projects",
      body: "Showcase your work and stand out to employers.",
      cta: { label: "View Projects", href: cta.viewProjects },
    },
  },

  jobs: {
    number: "04",
    eyebrow: "Jobs & Applications",
    titleTop: "Find the right opportunities",
    titleAccent: "and apply with confidence.",
    lead: "Get matched with relevant jobs, use AI to tailor your applications, and track your progress throughout the hiring process.",
    list: ["AI-powered job matching", "Tailor your CV and cover letter", "Track applications", "Get interview ready"],
    assistant: {
      title: "AI Application Assistant",
      body: "Get help with your CV, cover letter and application answers.",
      cta: { label: "Start Now", href: cta.startNow },
    },
    stat: { value: 98, label: "of our users get interview opportunities within 30 days." },
  },

  interview: {
    number: "05",
    eyebrow: "AI Interview Platform",
    titleTop: "Prepare. Practice.",
    titleAccent: "Perform.",
    lead: "Use our AI interview platform to build confidence, improve your answers and get real-time feedback, so you can show up ready and make a great impression.",
    list: ["Realistic interview simulations", "Practice anytime, anywhere", "Instant feedback and tips", "Build confidence"],
    human: {
      title: "Go further with human support",
      body: "Access expert career coaches for personalised interview preparation and feedback.",
      cta: { label: "Book a Session", href: cta.bookSession },
    },
  },

  final: {
    title: "Ready to build your future?",
    body: "Join thousands of people already using AscendX to discover careers, build skills and get hired.",
    primary: { label: "Get Started Free", href: cta.getStarted },
    secondary: { label: "Explore Features", href: "#feature-01" },
  },
};
