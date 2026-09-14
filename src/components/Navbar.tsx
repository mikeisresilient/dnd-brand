import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#07111f]/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 font-bold text-white shadow-lg shadow-blue-500/20">
              D
            </div>

            <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
              DND BRAND
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/sign-in"
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              Sign in
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-500/30"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#07111f]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-3 py-3 text-sm text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <div className="my-2 h-px bg-white/10" />

              <button
                type="button"
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-3 text-left text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="mt-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:bg-blue-400"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
