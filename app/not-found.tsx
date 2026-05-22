import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium shadow-glow-sm hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
