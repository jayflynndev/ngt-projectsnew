import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50 text-slate-700">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3 md:px-8 lg:px-12">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-slate-900">
            NGT Projects Ltd
          </p>
          <p>Transforming your concept into reality</p>
          <p>302 India Mill Business Centre</p>
          <p>Darwen, Lancs BB3 1AE</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Quick links
          </p>
          <div className="space-y-2 text-sm">
            <Link
              href="/"
              className="block text-slate-600 transition hover:text-brand-accent"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-slate-600 transition hover:text-brand-accent"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-slate-600 transition hover:text-brand-accent"
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="block text-slate-600 transition hover:text-brand-accent"
            >
              Case Studies
            </Link>
            <Link
              href="/certification"
              className="block text-slate-600 transition hover:text-brand-accent"
            >
              Certification
            </Link>
            <Link
              href="/contact"
              className="block text-slate-600 transition hover:text-brand-accent"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Contact
          </p>
          <p>
            Phone:{" "}
            <Link
              href="tel:07432006446"
              className="text-brand-primary hover:text-brand-accent"
            >
              07432 006 446
            </Link>
          </p>
          <p>
            Email:{" "}
            <Link
              href="mailto:info@ngtprojects.co.uk"
              className="text-brand-primary hover:text-brand-accent"
            >
              info@ngtprojects.co.uk
            </Link>
          </p>
          <p>CHAS accredited • Co. No. 08450954</p>
        </div>
      </div>
      <div className="border-t border-slate-200/80 bg-white px-5 py-4 text-center text-sm text-slate-500 md:px-8 lg:px-12">
        © {new Date().getFullYear()} NGT Projects Ltd. Registered in England No.
        08450954.
      </div>
    </footer>
  );
}
