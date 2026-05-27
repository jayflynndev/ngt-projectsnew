import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-5 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand-accent">
          404
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mb-8 max-w-xl text-base leading-8 text-slate-600">
          The page you are looking for may have moved or no longer exists. Head
          back to the homepage to continue exploring our services.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
        >
          Return home
        </Link>
      </main>
    </div>
  );
}
