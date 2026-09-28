"use client";

import { BookOpen, Mail, Twitter, Linkedin, Instagram } from "lucide-react";

const FOOTER_NAV = [
  {
    title: "The Society",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Selection Committee", href: "#committee" },
    ],
  },
  {
    title: "The Residency",
    links: [
      { label: "How We Operate", href: "#operate" },
      { label: "Voices", href: "#voices" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0f2139] border-t border-[rgba(155,199,169,0.18)] pt-16 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-6">
            <a href="#top" className="inline-flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-md bg-[#9bc7a9]/10 border border-[#9bc7a9]/40 flex items-center justify-center text-[#9bc7a9]">
                <BookOpen className="w-5 h-5" strokeWidth={1.5} />
              </span>
              <span className="font-serif-display text-xl font-semibold tracking-[0.18em] text-[#e4e4e4]">
                LECTORS<span className="text-[#9bc7a9]">BU</span>CLUB
              </span>
            </a>
            <p className="mt-5 font-serif-display text-lg text-[#e4e4e4]/85 max-w-md leading-snug italic">
              A Private Literary Society &amp; Managed Reader Experience.
            </p>
            <p className="mt-3 text-sm text-[#9aa3b0] max-w-md leading-relaxed">
              Where intellectual curiosity meets companionable consideration —
              uncovering meaningful ingredients in overlooked places since the
              first selection cycle.
            </p>

            {/* Social row */}
            <div className="mt-7 flex items-center gap-3">
              {[
                { icon: Mail, label: "Email the committee" },
                { icon: Twitter, label: "Follow on X" },
                { icon: Linkedin, label: "Connect on LinkedIn" },
                { icon: Instagram, label: "Follow on Instagram" },
              ].map(({ icon: Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-md border border-[rgba(155,199,169,0.22)] text-[#a8b3c4] hover:text-[#0f2139] hover:bg-[#9bc7a9] hover:border-[#9bc7a9] transition-colors flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title} className="lg:col-span-3">
              <h4 className="eyebrow text-[#9bc7a9] mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[#a8b3c4] hover:text-[#9bc7a9] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 mb-7 sage-line" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a8b3c4]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9bc7a9]" />
            © {new Date().getFullYear()} LectorsBuClub. All Rights Reserved.
          </div>
          <div className="text-center sm:text-right">
            A private literary society &amp; managed reader experience.
          </div>
        </div>
      </div>
    </footer>
  );
}
