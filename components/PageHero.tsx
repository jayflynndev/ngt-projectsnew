import type { ReactNode } from "react";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

export function PageHero({
  title,
  subtitle,
  description,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-primary text-white">
      {image ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-brand-primary/80" />
        </div>
      ) : null}
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-24 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
            NGT Projects Ltd
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-100/85">
              {subtitle}
            </p>
          ) : null}
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-100/80">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
