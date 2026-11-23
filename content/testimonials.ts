/**
 * Real AscendX client testimonials. Wording is the clients' own; only spelling,
 * capitalisation and filler words ("um", "as in") have been tidied.
 * The line under each name summarises the outcome they describe.
 */
import type { Testimonial } from "@/components/ui/TestimonialCard";
import { avatars } from "./images";

export const maureen = {
  quote:
    "I want to thank AscendX Career for what they did for me. I'm really excited. They made my stay in the UK worth it. I got a visa-sponsored job through their job application service, and their support and interview prep made things easier. I highly recommend their platform.",
  name: "Maureen Zabayo",
  role: "Hired with visa sponsorship, UK",
  avatar: avatars.maureen,
} satisfies Testimonial;

export const nanziri = {
  quote:
    "Shout out to the AscendX team for all the support they gave me: the interview preps and how to answer questions. I am very grateful for all their support. Finally I got a job, and I'm very happy and excited. Thank you guys.",
  name: "Nanziri",
  role: "Hired after interview prep",
  avatar: avatars.nanziri,
} satisfies Testimonial;

export const adeleke = {
  quote:
    "Thank you so much for your help with my applications. It was really smooth, and I love the way the team has been responding to queries and questions. I got so many interviews and offers as well, and I'm happy to say I've secured a job with one of the NHS hospitals. I'm so glad.",
  name: "Adeleke Oluwatoyin",
  role: "Now working in an NHS hospital",
  avatar: avatars.defaultAvatar,
} satisfies Testimonial;

export const olubunmi = {
  quote:
    "I love their customer service responses, and their supporting statement and CV optimisation techniques. When I read the supporting statement, I knew why I hadn't been getting interviews myself. Through AscendX's services I got an interview and was eventually given the job with sponsorship. Thank you so much.",
  name: "Olubunmi Akinsipe",
  role: "Hired with sponsorship",
  avatar: avatars.olubunmi,
} satisfies Testimonial;

export const testimonials = [maureen, nanziri, adeleke, olubunmi] satisfies Testimonial[];
