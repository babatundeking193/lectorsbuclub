"use client";

import { BookMarked, Globe, Users, Sparkles, Quote } from "lucide-react";
import { SectionHeading } from "./section-heading";

const PILLARS = [
  {
    icon: BookMarked,
    title: "Literature",
    body: "Chosen for depth, purpose, and lasting worth — not because it sells fast.",
  },
  {
    icon: Globe,
    title: "Human Progress",
    body: "Books that help readers think, decide, and see the world more clearly.",
  },
  {
    icon: Users,
    title: "Community",
    body: "A private, vetted group of readers — not a public comment section.",
  },
  {
    icon: Sparkles,
    title: "Legacy Spotlight",
    body: "Real, lasting attention for books that deserve more than a quick moment.",
  },
];

export function Philosophy() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-[#e4e4e4] text-[#0f2139] overflow-hidden"
      aria-label="Our philosophy"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="01"
          eyebrow="Our Philosophy"
          title="Literature as a lasting part of culture, not something made only for short term use."
          subtitle="Reading for lasting impact."
          theme="light"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Image aside */}
          <div className="lg:col-span-5 order-1 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(15,33,57,0.12)] aspect-[4/5] bg-[#0f2139]">
              <img
                src="/philosophy/aside.jpg"
                alt="A quiet reading moment shared between book lovers at the LectorsBuClub."
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2139]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                <Quote className="w-5 h-5 text-[#9bc7a9]" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-[0.22em] text-[#e4e4e4]/90 font-semibold">
                  The reading desk
                </span>
              </div>
            </div>
          </div>

          {/* Quote panel */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <blockquote className="relative">
              <span
                aria-hidden
                className="absolute -left-4 lg:-left-6 top-0 font-serif-display text-6xl text-[#5b7e69]"
              >
                &ldquo;
              </span>
              <p className="font-serif-display text-xl lg:text-2xl xl:text-[1.7rem] leading-relaxed text-[#0f2139] font-medium pl-6 lg:pl-8">
                <span className="text-[#5b7e69] font-semibold">Lectors</span> comes
                from the Latin word for{" "}
                <span className="text-[#5b7e69] font-semibold">“reader.”</span> At
                LectorsBuClub, we believe that reading is more than simply
                finishing a book. It is a way to explore ideas, understand
                people, and connect with the world around us.
              </p>
              <p className="mt-5 font-serif-display text-lg lg:text-xl xl:text-[1.5rem] leading-relaxed text-[#0f2139] font-medium pl-6 lg:pl-8">
                We discover exceptional independently published books and bring
                them to readers who value thoughtful stories, fresh ideas, and
                meaningful conversations.
              </p>
              <p className="mt-5 font-serif-display text-lg lg:text-xl xl:text-[1.5rem] leading-relaxed text-[#0f2139] font-medium pl-6 lg:pl-8">
                Our goal is to give these books and their authors the attention
                they deserve — not as temporary products, but as works that can
                leave a{" "}
                <span className="italic text-[#5b7e69]">
                  lasting mark on readers, communities, and culture
                </span>
                .
              </p>
            </blockquote>
            <div className="mt-8 pl-6 lg:pl-8 flex items-center gap-3 text-sm text-[#0f2139]/70">
              <span className="w-8 h-px bg-[#5b7e69]/60" />
              The LectorsBuClub Founding Note
            </div>
          </div>
        </div>

        {/* Pillars row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="group relative bg-white/70 border border-[rgba(15,33,57,0.10)] rounded-lg p-5 lg:p-6 hover:bg-white hover:border-[#5b7e69]/40 hover:shadow-lg hover:shadow-[#0f2139]/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-md bg-[#5b7e69]/10 border border-[#5b7e69]/30 flex items-center justify-center text-[#5b7e69]">
                  <p.icon className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <span className="num-marker text-2xl text-[#5b7e69]/40 group-hover:text-[#5b7e69]/70 transition-colors">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-serif-display text-lg font-semibold text-[#0f2139] mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-[#0f2139]/70 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
