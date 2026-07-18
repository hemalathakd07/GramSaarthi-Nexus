export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070d19]">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white">GramSaarthi Nexus</p>
            <p className="text-xs text-slate-500">Predict • Explain • Prevent • Prosper</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="#architecture"
              className="text-xs text-slate-400 transition-colors hover:text-white"
            >
              Documentation
            </a>
            <span className="text-xs text-emerald-400/80">
              NABARD Hackathon 2026
            </span>
          </div>

          <p className="text-xs text-slate-500">&copy; {year} GramSaarthi Nexus</p>
        </div>
      </div>
    </footer>
  );
}
