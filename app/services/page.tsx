import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { SectionWrapper } from "../../components/SectionWrapper";
import { ServiceCard } from "../../components/ServiceCard";
import { services } from "../../lib/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NGT Projects Ltd Services | Refurbishment, Fit-Out & Maintenance",
  description:
    "Explore NGT Projects Ltd services including office refurbishments, retail shop fitting, warehousing projects, maintenance and external works.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <PageHero
          title="Services"
          subtitle="A practical range of refurbishment, fit-out and maintenance services for commercial clients."
          image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
        />

        <SectionWrapper className="bg-white">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                What we do
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Complete commercial delivery from survey to handover.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                NGT Projects Ltd specialises in refurbishment, fit-out and
                maintenance work for offices, retail, warehousing and external
                sites.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-brand-primary text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-white/10 bg-brand-primary/95 px-8 py-14 text-center shadow-xl md:px-12 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                A hands-on contractor for commercial refurbishment projects.
              </h2>
            </div>
            <Link
              href="tel:07432006446"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-primary transition hover:bg-slate-100"
            >
              Call 07432 006 446
            </Link>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
