import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { SectionWrapper } from "../../../components/SectionWrapper";
import { caseStudies } from "../../../lib/case-studies";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const project = caseStudies.find((item) => item.slug === params.slug);
  if (!project) return { title: "Project not found | Case Studies" };

  return {
    title: `${project.title} | ${project.location} | NGT Projects Ltd`,
    description: project.description,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = caseStudies.find((item) => item.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <div className="relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
                  Case study
                </p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {project.title} — {project.location}
                </h1>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm text-slate-100">
                <p className="font-semibold uppercase tracking-[0.3em] text-brand-accent">
                  Project details
                </p>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="font-semibold">Client</dt>
                    <dd>{project.client}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Location</dt>
                    <dd>{project.location}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Scope</dt>
                    <dd>{project.scope}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="h-72 overflow-hidden md:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>

        <SectionWrapper className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-8">
              <p className="text-base leading-8 text-slate-700">
                {project.description}
              </p>
              <p className="text-base leading-8 text-slate-700">
                This case study demonstrates how NGT Projects Ltd can manage
                complex interior and external works through careful planning,
                active communication and efficient site delivery. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Fusce aliquam justo
                et ligula vestibulum, eu consequat mi auctor.
              </p>
              <p className="text-base leading-8 text-slate-700">
                A single point of contact means the client receives consistent
                oversight from mobilisation through completion. The project team
                worked alongside stakeholders to limit disruption and ensure the
                finished space met operational needs.
              </p>
            </div>
            <aside className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-8 shadow-sm">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                  Key benefits
                </p>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li>Reliable programme management</li>
                  <li>On-site health and safety controls</li>
                  <li>Practical commercial finishes</li>
                </ul>
              </div>
              <Link
                href="/case-studies"
                className="inline-flex rounded-full border border-brand-primary px-5 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/5"
              >
                Back to case studies
              </Link>
            </aside>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
