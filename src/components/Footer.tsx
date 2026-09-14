import { ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const footerLinks = {
  Product: ["Features", "Solutions", "Pricing", "AI Assistant"],
  Company: ["About", "Careers", "Contact", "Partners"],
  Resources: ["Help center", "Documentation", "Blog", "Security"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#050b16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr] lg:py-20">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 font-bold text-white shadow-lg shadow-blue-500/20">
                D
              </div>

              <span className="text-base font-semibold tracking-tight text-white">
                DND BRAND
              </span>
            </a>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Modern video meetings built to help people connect, collaborate,
              and get things done without the friction.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-500 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <FaXTwitter size={15} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-500 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <FaLinkedinIn size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-500 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-500 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-slate-500 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <FaGithub size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  {category}
                </h3>

                <ul className="mt-5 space-y-3.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1 text-sm text-slate-500 transition hover:text-white"
                      >
                        {link}

                        {(link === "Documentation" ||
                          link === "Blog" ||
                          link === "Careers") && (
                          <ArrowUpRight
                            size={11}
                            className="opacity-0 transition group-hover:opacity-100"
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/[0.07] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            © 2026 DND BRAND. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 text-xs text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              All systems operational
            </span>

            <span className="hidden h-4 w-px bg-white/10 sm:block" />

            <span className="text-xs text-slate-600">
              Built for better conversations.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;