/**
 * PLACEHOLDER PRICING: no pricing was supplied in the copy document.
 * Tiers, prices and features below are illustrative and must be confirmed.
 */
import { cta } from "@/lib/site";

export type Plan = {
  name: string;
  price: string;
  period?: string;
  blurb: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const pricing = {
  hero: {
    eyebrow: "Pricing",
    titleTop: "Simple plans for",
    titleAccent: "every stage of your career.",
    lead: "Start free and upgrade when you're ready. Whether you're exploring your first career or hiring your next great team, there's a plan for you.",
  },
  candidates: [
    {
      name: "Starter",
      price: "£0",
      period: "forever",
      blurb: "Everything you need to start exploring careers.",
      features: ["Personalised Career Feed", "Ireti AI Coach (10 chats / month)", "Free bite-sized courses", "Job matching & applications"],
      cta: { label: "Get Started Free", href: cta.getStarted },
    },
    {
      name: "Pro",
      price: "£9.99",
      period: "per month",
      blurb: "Accelerate your growth with unlimited guidance from Ireti.",
      features: ["Everything in Starter", "Unlimited Ireti AI Coach", "CV & cover letter tailoring by Ireti", "ATS-friendly CV checks", "Unlimited interview practice with Ireti"],
      cta: { label: "Start Pro Trial", href: cta.getStarted },
      featured: true,
    },
    {
      name: "Premium",
      price: "£24.99",
      period: "per month",
      blurb: "Personal support from expert human coaches.",
      features: ["Everything in Pro", "Monthly 1:1 coaching session", "Portfolio review", "Priority employer visibility"],
      cta: { label: "Go Premium", href: cta.getStarted },
    },
  ] satisfies Plan[],
  employers: [
    {
      name: "Growth",
      price: "£149",
      period: "per month",
      blurb: "For small teams hiring a few roles a year.",
      features: ["3 active job posts", "Ireti candidate matching", "Candidate shortlisting tools", "Basic hiring analytics"],
      cta: { label: "Post a Job", href: cta.postJob },
    },
    {
      name: "Scale",
      price: "£449",
      period: "per month",
      blurb: "For growing companies hiring continuously.",
      features: ["Unlimited job posts", "AI interviews with Ireti, with structured reports", "Employer brand videos in the Career Feed", "Full recruitment dashboard", "Advanced analytics"],
      cta: { label: "Start Free Trial", href: cta.getStarted },
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      blurb: "For organisations with high-volume or early-careers hiring.",
      features: ["Everything in Scale", "ATS integrations & SSO", "Dedicated success manager", "Custom assessments"],
      cta: { label: "Book a Demo", href: cta.bookDemo },
    },
  ] satisfies Plan[],
  faqs: [
    { q: "Is AscendX really free for candidates?", a: "Yes. The Starter plan is free forever and includes the Career Feed, job matching, applications and a monthly allowance of chats with Ireti, our AI career coach." },
    { q: "Who is Ireti?", a: "Ireti is the AscendX AI. Ireti helps you explore careers, improve your CV and cover letters, practise interviews and find roles that fit you, and helps employers match and assess candidates." },
    { q: "Can I cancel at any time?", a: "Absolutely. Paid plans are billed monthly and you can cancel whenever you like. You'll keep access until the end of your billing period." },
    { q: "Do you offer discounts for universities or charities?", a: "Yes, we partner with universities, colleges and non-profits. Get in touch and we'll tailor a plan for your organisation." },
    { q: "Can employers try AscendX before committing?", a: "Our Scale plan comes with a free trial, and we're happy to give your team a guided demo of the full recruitment platform." },
  ],
};
