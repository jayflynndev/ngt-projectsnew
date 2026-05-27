import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { SectionWrapper } from "../components/SectionWrapper";
import { ServiceCard } from "../components/ServiceCard";
import type { Metadata } from "next";
import { services } from "../lib/services";

export const metadata: Metadata = {
  title: "NGT Projects Ltd | Trusted Interior Refurbishments & Fit-Outs",
  description:
    "NGT Projects Ltd delivers commercial interior refurbishments, fit-outs and maintenance across the UK from Darwen, Lancashire.",
};

const trustItems = [
  {
    title: "Expertise",
    description:
      "25+ years delivering refurbishment, fit-out and maintenance projects with precision.",
  },
  {
    title: "Communication",
    description:
      "Clear planning and progress updates throughout your project from first contact to handover.",
  },
  {
    title: "Reliability",
    description:
      "A single point of contact and dependable delivery for commercial projects of every size.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.35),transparent_45%),linear-gradient(to_bottom,#1a2e44_0%,#16263c_100%)] text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529429617124-41f6a5b6d0d8?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-60" />
          <div className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-brand-accent">
                Commercial Fit-Out Contractor
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Trusted Interior Refurbishments & Fit-Outs
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-100/90">
                Transforming your concept into reality with practical project
                management, quality finishes and reliable delivery across the
                UK.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="/services" variant="primary" className="min-w-40">
                  Our Services
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="min-w-40 text-black!"
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper className="bg-white">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                Built on trust
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                The key ingredient in any successful construction project is
                trust.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
                NGT Projects Ltd combines commercial construction experience
                with a client-first approach, delivering projects with openness,
                coordination and care.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8 shadow-sm"
                >
                  <p className="mb-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-slate-50">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                Our services
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Commercial fit-out and refurbishment expertise
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.slice(0, 3).map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href="/services"
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white">
          <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200/80 bg-brand-primary/5 p-10 md:p-14">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                  Why NGT
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  A single point of contact for every commercial project.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
                  From initial survey to delivery and handover, NGT Projects Ltd
                  provides seamless project management as your main contractor,
                  keeping communication open, budgets clear and quality
                  consistent.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  Service model
                </p>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li>Client-first project coordination</li>
                  <li>Practical planning and commercial delivery</li>
                  <li>Experienced trades, materials and compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-brand-primary text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-white/10 bg-brand-primary px-8 py-14 text-center shadow-xl md:px-12 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                Ready to start your project?
              </p>
              <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                Call 07432 006 446 or get in touch to arrange a consultation.
              </p>
            </div>
            <Button href="/contact" variant="primary" className="min-w-40">
              Contact us
            </Button>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-slate-50">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                Gallery
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Featured project images
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "https://picsum.photos/seed/ngt1/900/700",
                "https://picsum.photos/seed/ngt2/900/700",
                "https://picsum.photos/seed/ngt3/900/700",
              ].map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-3xl bg-slate-100"
                >
                  <div className="relative h-72 w-full">
                    <Image
                      src={src}
                      alt="Project image"
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
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
