import Image from "next/image";
import { Logo } from "@/components/layout/Logo";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { img } from "@/content/images";
import { cn } from "@/lib/cn";

type Action = { label: string; href: string };

type CtaBannerProps = {
  variant: "center" | "split" | "image" | "dark";
  eyebrow?: string;
  title: string;
  body: string;
  primary: Action;
  secondary: Action;
};

function Glows() {
  return (
    <>
      <div className="pointer-events-none absolute -top-24 -left-24">
        <div aria-hidden className="size-80 rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute -right-20 -bottom-32">
        <div aria-hidden className="size-96 rounded-full bg-azure-400/40 blur-3xl" />
      </div>
    </>
  );
}

export function CtaBanner({ variant, eyebrow, title, body, primary, secondary }: CtaBannerProps) {
  if (variant === "center") {
    return (
      <section className="bg-brand-gradient relative overflow-hidden text-white">
        <Glows />
        <Reveal className="container-x relative py-20 text-center md:py-24">
          {eyebrow && <Eyebrow tone="light" className="mb-4 text-white/80!">{eyebrow}</Eyebrow>}
          <h2 className="display-2 text-white">{title}</h2>
          <p className="lead mx-auto mt-4 max-w-2xl text-white/80">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={primary.href} variant="white" arrow>
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="outline-light" arrow>
              {secondary.label}
            </Button>
          </div>
        </Reveal>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className="bg-brand-gradient relative overflow-hidden text-white">
        <Glows />
        <Reveal className="container-x relative flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            {eyebrow && <Eyebrow tone="light" className="mb-3 text-white/80!">{eyebrow}</Eyebrow>}
            <h2 className="display-2 text-white">{title}</h2>
            <p className="lead mt-3 text-white/80">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={primary.href} variant="white" size="lg" arrow>
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="outline-light" size="lg" arrow>
              {secondary.label}
            </Button>
          </div>
        </Reveal>
      </section>
    );
  }

  if (variant === "image") {
    return (
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-y-0 right-0 w-full md:w-3/5">
          <Image src={img.teamOffice} alt="" fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover opacity-50" />
        </div>
        <div aria-hidden className="absolute inset-0 bg-linear-to-r from-brand-800 via-brand-800/90 to-navy-900/40" />
        <Reveal className="container-x relative flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            {eyebrow && <Eyebrow tone="light" className="mb-3">{eyebrow}</Eyebrow>}
            <h2 className="display-2 text-white">{title}</h2>
            <p className="lead mt-3 text-white/75">{body}</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Button href={primary.href} size="lg" arrow>
              {primary.label}
            </Button>
            <Button href={secondary.href} variant="ghost-light" arrow>
              {secondary.label}
            </Button>
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section className={cn("relative overflow-hidden bg-navy-900 text-white")}>
      <div className="pointer-events-none absolute -top-32 left-1/3">
        <div aria-hidden className="size-96 rounded-full bg-brand-600/35 blur-3xl" />
      </div>
      <Reveal className="container-x relative grid items-center gap-8 py-16 md:grid-cols-[auto_1fr_auto] md:gap-12 md:py-20">
        <Logo light className="w-fit" />
        <div>
          <h2 className="display-3 text-white md:text-[1.875rem]">{title}</h2>
          <p className="mt-2 text-white/70">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={primary.href} arrow>
            {primary.label}
          </Button>
          <Button href={secondary.href} variant="outline-light">
            {secondary.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
