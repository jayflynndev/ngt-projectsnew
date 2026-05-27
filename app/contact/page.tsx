import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { SectionWrapper } from "../../components/SectionWrapper";
import { ContactForm } from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NGT Projects Ltd | Get a Quote",
  description:
    "Contact NGT Projects Ltd for commercial refurbishment, fit-out and maintenance enquiries in Darwen, Lancashire and across the UK.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <PageHero
          title="Contact"
          subtitle="Get in touch for a consultation, quote or site survey."
          image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
        />

        <SectionWrapper className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                  Contact details
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Speak with NGT Projects Ltd
                </h2>
              </div>
              <div className="space-y-4 rounded-3xl border border-slate-200/80 bg-slate-50 p-8 shadow-sm">
                <p className="text-slate-700">
                  302 India Mill Business Centre
                  <br />
                  Darwen, Lancs BB3 1AE
                </p>
                <p className="text-slate-700">
                  Phone:{" "}
                  <Link
                    href="tel:07432006446"
                    className="font-semibold text-brand-primary hover:text-brand-accent"
                  >
                    07432 006 446
                  </Link>
                </p>
                <p className="text-slate-700">
                  Email:{" "}
                  <Link
                    href="mailto:info@ngtprojects.co.uk"
                    className="font-semibold text-brand-primary hover:text-brand-accent"
                  >
                    info@ngtprojects.co.uk
                  </Link>
                </p>
                <div className="rounded-3xl bg-white p-4 text-sm text-slate-600 shadow-inner">
                  Map placeholder
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
