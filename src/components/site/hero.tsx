"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";

// 4 hero backdrop images — uploaded by the LectorsBuClub team.
// Served from /public/hero/ so they are cached on the same origin.
const SLIDES = [
  {
    src: "/hero/hero-1.jpg",
    alt: "A group of readers gathered together in a warm, book-filled library.",
  },
  {
    src: "/hero/hero-2.jpg",
    alt: "Members of a book club sharing a reading moment among shelves of books.",
  },
  {
    src: "/hero/hero-3.jpg",
    alt: "A book club community enjoying literature together in a cozy reading space.",
  },
  {
    src: "/hero/hero-4.jpg",
    alt: "Readers connecting over books in a quiet, welcoming reading room.",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="LectorsBuClub introduction"
    >
      {/* Background slideshow — 4 slides, 16s cycle (4s per slide) */}
      <div className="absolute inset-0 z-0 bg-[#0f2139]" aria-hidden>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="hero-slide"
            style={{ animationDelay: `${i * 4}s` }}
            aria-hidden
          >
            <img
              src={slide.src}
              alt=""
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        {/* Navy gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2139]/85 via-[#0f2139]/65 to-[#0f2139]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2139]/90 via-[#0f2139]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-24 lg:pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#9bc7a9]" />
              <span className="eyebrow text-[#9bc7a9]">
                Private · Literary · Society
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif-display text-[2.6rem] sm:text-[3.5rem] lg:text-[4.6rem] leading-[1.04] font-bold text-[#e4e4e4] tracking-tight">
              A Private Literary Society
              <span className="block text-[#9bc7a9] font-light">
                &amp; Managed Reader Experience.
              </span>
            </h1>

            {/* Subhead */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#e4e4e4]/85 font-light leading-relaxed max-w-2xl">
              Where intellectual curiosity meets companionable consideration.
              Uncovering meaningful ingredients in overlooked places — we connect
              brilliant independent authors with an elite global reading
              community for a structured, year-long journey of deep literary
              engagement.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#0f2139] bg-[#9bc7a9] hover:bg-[#acd7ba] px-7 py-4 rounded-md transition-all hover:translate-y-[-1px] shadow-lg shadow-[#9bc7a9]/15"
              >
                Connect With the Selection Committee
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#e4e4e4] bg-transparent border border-[rgba(155,199,169,0.4)] hover:border-[#9bc7a9] hover:bg-[#9bc7a9]/5 px-7 py-4 rounded-md transition-colors"
              >
                Explore the Experience
              </a>
            </div>

            {/* Selection cycle chip */}
            <div className="mt-12 inline-flex items-center gap-3 text-xs text-[#9aa3b0] tracking-wider">
              <span className="sage-pulse w-2 h-2 rounded-full bg-[#9bc7a9]" />
              SELECTION CYCLE 2025 · ANNUAL RESIDENCY · 18 STANDOUT AUTHORS · 150+
              HIGH-QUALITY REVIEW CLUSTERS · 12-MONTH MANAGED READER EXPERIENCE
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="relative z-10 pb-10 flex justify-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-[#9aa3b0] hover:text-[#9bc7a9] transition-colors"
          aria-label="Scroll to explore"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.25em]">
            Scroll Our Foundation
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
