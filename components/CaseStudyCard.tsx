import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
}

export function CaseStudyCard({
  title,
  location,
  description,
  image,
  href,
}: CaseStudyCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <span className="inline-flex rounded-full border border-brand-primary/15 bg-brand-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
          {location}
        </span>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
        <Link
          href={href}
          className="text-sm font-semibold text-brand-primary transition hover:text-brand-accent"
        >
          View project &rarr;
        </Link>
      </div>
    </article>
  );
}
