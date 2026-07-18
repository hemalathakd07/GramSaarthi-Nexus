export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070d19]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">GramSaarthi Nexus</p>
          <p className="text-xs text-slate-500">Predict • Explain • Prevent • Prosper</p>
        </div>

        <p className="text-xs text-emerald-400/80">
          NABARD Hackathon @ Global FinTech Fest 2026
        </p>

        <p className="text-xs text-slate-500">&copy; {year} GramSaarthi Nexus</p>
      </div>
    </footer>
  );
}
