import Link from "next/link";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  const content = (
    <div className="group rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-accent/30 hover:shadow-md">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-accent/10 text-2xl text-brand-accent shadow-sm shadow-brand-accent/10">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
      {href ? (
        <div className="mt-5 text-sm font-semibold text-brand-primary transition group-hover:text-brand-accent">
          Learn more &rarr;
        </div>
      ) : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
