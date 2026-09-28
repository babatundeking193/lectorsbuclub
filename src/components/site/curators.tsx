"use client";

import { GraduationCap, BookOpen, Compass } from "lucide-react";
import { SectionHeading } from "./section-heading";

const ROLES = [
  {
    icon: BookOpen,
    title: "Literary Specialists",
    body: "Working novelists, editors, and translators who read for craft first — they judge structure, voice, and intent.",
  },
  {
    icon: GraduationCap,
    title: "Academic Minds",
    body: "Scholars from literature, history, and the humanities who place each book in its proper context.",
  },
  {
    icon: Compass,
    title: "Cultural Curators",
    body: "Critics and editors who ask whether a book will still matter to serious readers years from now.",
  },
];

export function Curators() {
  return (
    <section
      id="committee"
      className="relative py-24 lg:py-32 bg-[#e4e4e4] text-[#0f2139] overflow-hidden"
      aria-label="The selection committee"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="04"
          eyebrow="The Curators"
          title="The Selection Committee"
          subtitle="Reading hundreds of independent books each year."
          theme="light"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Chair profile card with portrait image */}
          <div className="lg:col-span-5">
            <div className="relative bg-white border border-[rgba(15,33,57,0.12)] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#0f2139]/10 transition-shadow">
              {/* Chair portrait */}
              <div className="relative h-72 lg:h-80 overflow-hidden bg-[#0f2139]">
                <img
                  src="/curators/chair.jpg"
                  alt="Portrait of Prof. Babatunde Goodluck, Selection Committee Chair."
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2139]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="eyebrow text-[#9bc7a9] bg-[#0f2139]/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    Committee Chair
                  </span>
                </div>
              </div>
              {/* Chair bio */}
              <div className="p-7 lg:p-8">
                <h3 className="font-serif-display text-3xl font-semibold text-[#0f2139]">
                  Prof. Babatunde Goodluck
                </h3>
                <p className="mt-2 text-sm text-[#0f2139]/70 uppercase tracking-[0.18em] font-semibold">
                  Reader · Scholar · Community Builder
                </p>
                <div className="mt-6 h-px bg-[rgba(15,33,57,0.12)]" />
                <p className="mt-6 text-base text-[#0f2139]/80 leading-relaxed">
                  Our selection is led by Prof. Babatunde Goodluck, with a small
                  team of literature experts, scholars, and culture curators.
                  Together, they read hundreds of independent books each year to
                  find the rare few that meet our standard for depth and quality.
                </p>
              </div>
            </div>
          </div>

          {/* Roles */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 self-center">
            {ROLES.map((r, i) => (
              <div
                key={r.title}
                className="bg-white/70 border border-[rgba(15,33,57,0.10)] rounded-lg p-6 hover:border-[#5b7e69]/40 hover:bg-white hover:shadow-lg hover:shadow-[#0f2139]/5 transition-all sm:[&:nth-child(3)]:col-span-2"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="w-11 h-11 rounded-md bg-[#5b7e69]/10 border border-[#5b7e69]/30 flex items-center justify-center text-[#5b7e69]">
                    <r.icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="num-marker text-2xl text-[#5b7e69]/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif-display text-xl font-semibold text-[#0f2139] mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-[#0f2139]/70 leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
