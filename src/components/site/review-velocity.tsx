"use client";

import { Lock, MessageSquare, PenLine, Heart, Quote } from "lucide-react";
import { SectionHeading } from "./section-heading";

const CHANNELS = [
  {
    icon: Lock,
    title: "Private Channels",
    body: "Members-only spaces. Every reader is vetted. The floor is held by serious readers, not anonymous names.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8b7087504b97.jpg",
    imageAlt: "A row of bookshelves in a private library nook.",
  },
  {
    icon: MessageSquare,
    title: "Social Salons",
    body: "Live, scheduled meet-ups that turn a chapter into a real conversation — led by curators trained in books and discussion.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4fc96243e3e0.jpg",
    imageAlt: "A circle of readers discussing literature around a reading table.",
  },
  {
    icon: PenLine,
    title: "Analytical Commentary",
    body: "Long, careful reviews that take the book on its own terms — useful years after the residency ends.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/02969e6892ca.jpg",
    imageAlt: "A reader writing analytical notes next to a stack of books.",
  },
  {
    icon: Heart,
    title: "Authentic Feedback",
    body: "Feedback earned, not bought. Our readers speak honestly in private before they speak in public — which is why their public words carry weight.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fad8f957b53c.jpg",
    imageAlt: "A reader relaxing with a book and reflecting on the experience.",
  },
];

export function ReviewVelocity() {
  return (
    <section
      className="relative py-24 lg:py-32 bg-[#0f2139] border-y border-[rgba(155,199,169,0.18)] overflow-hidden"
      aria-label="Review velocity and engagement"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              number="03"
              eyebrow="Review Velocity"
              title="Honest talk, lasting reviews"
              subtitle="Honest, thoughtful feedback."
            />
            <p className="mt-8 text-base lg:text-lg text-[#e4e4e4]/85 leading-relaxed">
              Our members give honest, thoughtful feedback. Through private
              chats and live salon talks, we share clear, careful thoughts about
              each book. This naturally leads to{" "}
              <span className="text-[#9bc7a9] font-semibold">
                150+ quality reviews on the major reading sites
              </span>{" "}
              — proof that when the right readers meet the right book, real
              impact follows.
            </p>
          </div>

          {/* Benchmark callout */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative bg-gradient-to-br from-[#0a1830] to-[#0f2139] border border-[#9bc7a9]/30 rounded-2xl p-8 lg:p-10 overflow-hidden">
              <Quote
                className="absolute -top-4 -right-4 w-32 h-32 text-[#9bc7a9]/[0.07]"
                strokeWidth={1}
              />
              <span className="eyebrow text-[#9bc7a9]">Benchmark</span>
              <div className="mt-6 flex items-end gap-3">
                <span className="font-serif-display text-[7rem] lg:text-[8rem] font-bold text-[#9bc7a9] leading-none">
                  150
                </span>
                <span className="font-serif-display text-4xl lg:text-5xl text-[#9bc7a9]/80 mb-4">
                  +
                </span>
              </div>
              <p className="mt-4 font-serif-display text-2xl text-[#e4e4e4] font-medium leading-snug">
                Quality reviews on the major reading sites.
              </p>
              <div className="mt-8 pt-8 border-t border-[rgba(155,199,169,0.16)]">
                <p className="text-sm text-[#a8b3c4] leading-relaxed">
                  Per residency cycle, kept alive by four habits: private channels,
                  social salons, careful commentary, and honest feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Channels with images */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CHANNELS.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-xl border border-[rgba(155,199,169,0.18)] bg-[#0a1830]/60 hover:border-[#9bc7a9]/50 transition-all"
            >
              {/* Image header */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f2139]/30 via-[#0f2139]/70 to-[#0a1830]" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                  <span className="w-9 h-9 rounded-md bg-[#9bc7a9]/90 flex items-center justify-center text-[#0f2139]">
                    <c.icon className="w-4 h-4" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-serif-display text-lg font-semibold text-[#e4e4e4]">
                    {c.title}
                  </h3>
                </div>
              </div>
              {/* Body */}
              <div className="p-5">
                <p className="text-sm text-[#a8b3c4] leading-relaxed">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
