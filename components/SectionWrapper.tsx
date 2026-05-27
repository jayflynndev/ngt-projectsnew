import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section className={`px-5 py-16 md:px-8 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}
