import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { SectionWrapper } from "../../components/SectionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification | NGT Projects Ltd",
  description:
    "View NGT Projects Ltd certifications, accreditations and compliance standards for commercial refurbishment and fit-out projects.",
};

const certifications = [
  {
    title: "CHAS Accreditation",
    description:
      "Placeholder details for health and safety accreditation, contractor compliance and verified working practices.",
  },
  {
    title: "Constructionline",
    description:
      "Placeholder details for supplier pre-qualification, procurement standards and commercial project readiness.",
  },
  {
    title: "Public Liability Insurance",
    description:
      "Placeholder details for current insurance cover, documentation and project-specific evidence when required.",
  },
  {
    title: "Health & Safety Policy",
    description:
      "Placeholder details for internal safety processes, site coordination and risk management procedures.",
  },
  {
    title: "Risk Assessments & Method Statements",
    description:
      "Placeholder details for RAMS preparation, project planning and safe delivery across active sites.",
  },
  {
    title: "Trade Competency",
    description:
      "Placeholder details for experienced trades, workmanship standards and project supervision.",
  },
];

export default function CertificationPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <PageHero
          title="Certification"
          subtitle="Accreditations, policies and compliance standards supporting safe commercial project delivery."
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
        />

        <SectionWrapper className="bg-white">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                Compliance
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Certifications and supporting documents.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Placeholder certification records can be updated with live
                accreditation details, document links and renewal dates.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((certification) => (
                <div
                  key={certification.title}
                  className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-md"
                >
                  <p className="mb-3 text-lg font-semibold text-slate-900">
                    {certification.title}
                  </p>
                  <p className="text-slate-600">
                    {certification.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
