import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { lastUpdated, type LegalSection } from "@/content/legal";

interface LegalPageProps {
  title: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-linear-to-b from-brand-50/80 via-white to-white">
        <div
          aria-hidden
          className="absolute -top-48 left-1/2 -z-10 size-[44rem] -translate-x-1/2 rounded-full bg-brand-200/45 blur-[120px]"
        />
        <div className="container-x pt-36 pb-16">
          <Eyebrow variant="pill" className="hero-rise">
            Legal
          </Eyebrow>
          <h1
            className="hero-rise display-2 mt-5 max-w-2xl"
            style={{ ["--d" as string]: "0.08s" }}
          >
            {title}
          </h1>
          <p
            className="hero-rise mt-3 text-sm text-body/70"
            style={{ ["--d" as string]: "0.14s" }}
          >
            Last updated: {lastUpdated}
          </p>
          <p
            className="hero-rise lead mt-6 max-w-2xl"
            style={{ ["--d" as string]: "0.2s" }}
            dangerouslySetInnerHTML={{ __html: intro }}
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl divide-y divide-line">
            {sections.map((section) => (
              <Reveal key={section.heading} className="py-8">
                <h2 className="display-3 mb-4">{section.heading}</h2>
                <div className="space-y-3">
                  {section.body.map((para, i) => (
                    <p
                      key={i}
                      className="lead"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
