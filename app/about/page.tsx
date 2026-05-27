import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { SectionWrapper } from "../../components/SectionWrapper";
import { Button } from "../../components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NGT Projects Ltd | Commercial Refurbishment Experts",
  description:
    "Learn about NGT Projects Ltd, a Darwen-based refurbishment and fit-out contractor led by Neil Thornber with 25+ years of experience.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <PageHero
          title="About Us"
          subtitle="Practical construction leadership for commercial interiors and fit-outs."
          image="https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1600&q=80"
        />

        <SectionWrapper className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <div className="relative h-105 w-full">
                <Image
                  src="https://picsum.photos/seed/neil/900/900"
                  alt="Neil Thornber"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                Meet Neil
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Neil Thornber has overseen projects across the North West and
                beyond for more than 25 years.
              </h2>
              <p className="text-base leading-8 text-slate-600">
                As owner of NGT Projects Ltd, Neil combines a hands-on
                construction background with a personal approach to client
                relationships. Every project is managed with clear
                communication, quality control and a focus on practical
                delivery.
              </p>
              <p className="text-base leading-8 text-slate-600">
                Based in Darwen, Lancashire, the team serves commercial clients
                across the UK, delivering office refurbishments, shop fitting,
                warehouse refits, maintenance and external works.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-slate-50">
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Superior Project Management",
                  description:
                    "Structured planning, budget control and coordination that keep refurbishment projects moving smoothly.",
                },
                {
                  title: "Quality Materials",
                  description:
                    "We specify trusted finishes and durable systems that suit commercial environments and long-term use.",
                },
                {
                  title: "CHAS Accreditation",
                  description:
                    "Health and safety compliance is embedded into every stage of delivery to protect clients, staff and project teams.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm"
                >
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white">
          <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200/80 bg-brand-primary/5 p-10 text-center md:p-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ready to discuss your refurbishment or fit-out?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-700">
              Whether you need a new office layout, retail fit-out or
              maintenance support, NGT Projects Ltd makes the process
              straightforward from consultation to completion.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="tel:07432006446" variant="primary">
                Call 07432 006 446
              </Button>
              <Button href="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
