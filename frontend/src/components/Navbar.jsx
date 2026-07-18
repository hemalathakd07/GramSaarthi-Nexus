import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Features', href: '#features', id: 'features' },
  { label: 'Dashboards', href: '#dashboards', id: 'dashboards' },
  { label: 'Technology', href: '#technology', id: 'technology' },
  { label: 'Architecture', href: '#architecture', id: 'architecture' },
];

const sectionIds = ['home', 'features', 'dashboards', 'technology', 'architecture', 'cta'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  const isActive = (id) => {
    if (id === 'features' && activeSection === 'home') return false;
    return activeSection === id;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 text-xs font-bold text-white shadow-lg shadow-emerald-500/20">
            GS
          </span>
          <span className="text-base font-semibold tracking-tight text-white">
            GramSaarthi{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Nexus
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors ${
                  isActive(link.id)
                    ? 'text-emerald-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.id) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-emerald-400" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/farmer"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:from-emerald-400 hover:to-emerald-500 hover:shadow-emerald-500/40"
          >
            Launch Demo
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0B1120]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block text-sm font-medium ${
                    isActive(link.id) ? 'text-emerald-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/farmer"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Launch Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
