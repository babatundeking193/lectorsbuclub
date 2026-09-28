"use client";

import { Quote } from "lucide-react";
import { SectionHeading } from "./section-heading";

const VOICES = [
  {
    perspective: "Author Perspective",
    quote:
      "The talk around my book was deeper than anything I had seen. LectorsBuClub did not just give me readers — they gave my work real care. That kind of attention is rare today.",
    attribution: "R. A.",
    role: "Residency Alumnus",
    image: "/voices/author.jpg",
    imageAlt: "An author reflecting on the deep conversation their book sparked at LectorsBuClub.",
  },
  {
    perspective: "Reader Perspective",
    quote:
      "With so many short and rushed comments online, this salon is a calm place for real conversations. The discussions are clear, thoughtful, and interesting. They make you think and leave you with something valuable. I had almost forgotten that the internet could have conversations like this.",
    attribution: "C. S.",
    role: "Core Salon Member",
    image: "/voices/reader.jpg",
    imageAlt: "A reader relaxing with a book, reflecting on the discussion.",
  },
];

export function Voices() {
  return (
    <section
      id="voices"
      className="relative py-24 lg:py-32 bg-[#e4e4e4] text-[#0f2139] overflow-hidden"
      aria-label="Voices from the hub"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="06"
          eyebrow="From the Hub"
          title="Voices from inside the residency"
          subtitle="Real words from authors and readers."
          theme="light"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {VOICES.map((v, i) => (
            <figure
              key={v.perspective}
              className="relative bg-white border border-[rgba(15,33,57,0.10)] rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-[#0f2139]/10 transition-shadow"
            >
              {/* Photo header */}
              <div className="relative h-44 lg:h-52 overflow-hidden bg-[#0f2139]">
                <img
                  src={v.image}
                  alt={v.imageAlt}
                  className="w-full h-full object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2139] via-[#0f2139]/30 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="eyebrow text-[#0f2139] bg-[#9bc7a9] px-3 py-1 rounded-full font-semibold">
                    {v.perspective}
                  </span>
                </div>
                <Quote
                  className="absolute top-4 right-4 w-10 h-10 text-[#9bc7a9]/40"
                  strokeWidth={1.5}
                />
              </div>

              {/* Body */}
              <div className="p-7 lg:p-9 flex-1 flex flex-col">
                <blockquote className="font-serif-display text-lg lg:text-xl text-[#0f2139] leading-relaxed italic">
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-[rgba(15,33,57,0.10)] flex items-center justify-between">
                  <div>
                    <div className="font-serif-display text-lg font-semibold text-[#5b7e69]">
                      {v.attribution}
                    </div>
                    <div className="text-xs uppercase tracking-[0.18em] text-[#0f2139]/70 mt-1">
                      {v.role}
                    </div>
                  </div>
                  <span className="num-marker text-4xl text-[#5b7e69]/30">
                    0{i + 1}
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
