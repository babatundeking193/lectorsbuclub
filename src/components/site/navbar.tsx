"use client";

import { useEffect, useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Selection Committee", href: "#committee" },
  { label: "How We Operate", href: "#operate" },
  { label: "Voices", href: "#voices" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0f2139]/90 backdrop-blur-md border-b border-[rgba(155,199,169,0.18)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <span
            className="w-9 h-9 rounded-md bg-[#9bc7a9]/10 border border-[#9bc7a9]/40 flex items-center justify-center text-[#9bc7a9] transition-colors group-hover:bg-[#9bc7a9]/20"
            aria-hidden
          >
            <BookOpen className="w-5 h-5" strokeWidth={1.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif-display text-[1.05rem] lg:text-[1.15rem] font-semibold tracking-[0.18em] text-[#e4e4e4]">
              LECTORS<span className="text-[#9bc7a9]">BU</span>CLUB
            </span>
            <span className="hidden sm:block text-[0.6rem] uppercase tracking-[0.25em] text-[#9aa3b0] mt-1">
              Private Literary Society
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#e4e4e4]/80 hover:text-[#9bc7a9] transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0 h-px w-0 group-hover:w-full bg-[#9bc7a9] transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-[#0f2139] bg-[#9bc7a9] hover:bg-[#acd7ba] px-5 py-2.5 rounded-md transition-colors"
        >
          Connect With Us
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-[#e4e4e4] p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0f2139]/95 backdrop-blur-md border-b border-[rgba(155,199,169,0.18)]">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[#e4e4e4]/90 hover:text-[#9bc7a9] transition-colors text-base font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center text-sm font-semibold text-[#0f2139] bg-[#9bc7a9] hover:bg-[#acd7ba] px-5 py-3 rounded-md transition-colors"
              >
                Connect With Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
