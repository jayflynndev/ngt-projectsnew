import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { SectionWrapper } from "../../components/SectionWrapper";
import { CaseStudyCard } from "../../components/CaseStudyCard";
import { caseStudies } from "../../lib/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | NGT Projects Ltd",
  description:
    "Browse recent NGT Projects Ltd case studies showcasing commercial refurbishment, fit-out and external works projects.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <PageHero
          title="Case Studies"
          subtitle="Recent commercial projects completed by NGT Projects Ltd across the North West and beyond."
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
        />

        <SectionWrapper className="bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                Project highlights
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Real results delivered for commercial clients.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {caseStudies.map((item) => (
                <CaseStudyCard
                  key={item.slug}
                  title={item.title}
                  location={item.location}
                  description={item.description}
                  image={item.image}
                  href={`/case-studies/${item.slug}`}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
