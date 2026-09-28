"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";

const STAGES = [
  {
    number: "01",
    title: "Selection & Onboarding",
    body: "A chosen book joins the residency. Readers get a welcome note, an opening salon, and a private Q&A with the author.",
    detail: "Selection day · Open reading day",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c9017ecb0d0d.jpg",
    imageAlt: "An open book on a wooden library table, waiting for the next reader.",
  },
  {
    number: "02",
    title: "Structured Deep-Dives",
    body: "Guided, careful reading through private salons and chapter-by-chapter talks. Our curators prepare notes that bring out the book's themes and craft.",
    detail: "Private salons · Chapter-by-chapter talks",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0a5dd07421bd.webp",
    imageAlt: "Book club members holding open novels and sharing notes in a library.",
  },
  {
    number: "03",
    title: "Review Velocity",
    body: "Steady, high-quality comments turn into real review momentum on major reading sites — reaching 150+ reviews per book.",
    detail: "150+ reviews per book",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/02969e6892ca.jpg",
    imageAlt: "A reader writing analytical commentary next to a stack of books.",
  },
  {
    number: "04",
    title: "Permanent Recognition",
    body: "Long-term engagement keeps the book in readers' hands and minds — well known and well reviewed long after its first year.",
    detail: "Long-term · Lasting recognition",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2e6222763f85.jpeg",
    imageAlt: "A grand classical reading room with tall arched windows and bookshelves.",
  },
];

export function Residency() {
  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 bg-[#e4e4e4] text-[#0f2139] overflow-hidden"
      aria-label="The residency experience"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="02"
          eyebrow="The Residency"
          title="The 12-Month Managed Reader Experience"
          subtitle="1–2 books picked monthly · 18 authors each year."
          theme="light"
        />

        {/* Lead paragraph */}
        <div className="mt-10 max-w-3xl text-base lg:text-lg text-[#0f2139]/85 leading-relaxed">
          <p>
            Every month, our Selection Committee picks one or two books for the
            residency — 18 authors in total each year. When a book is chosen,
            it joins a year-long program built to give it attention and reach.
            This is not just another book club pick. It is a{" "}
            <span className="text-[#5b7e69] font-semibold">
              year of deep reading, careful talk, and steady word-of-mouth
            </span>{" "}
            that lasts well beyond the book&apos;s first release.
          </p>
        </div>

        {/* Stage cards with images */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stage) => (
            <article
              key={stage.number}
              className="group relative overflow-hidden rounded-2xl bg-white border border-[rgba(15,33,57,0.10)] hover:border-[#5b7e69]/40 hover:shadow-xl hover:shadow-[#0f2139]/10 transition-all duration-300 flex flex-col"
            >
              {/* Image header */}
              <div className="relative h-44 lg:h-48 overflow-hidden bg-[#0f2139]">
                <img
                  src={stage.image}
                  alt={stage.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2139]/80 via-[#0f2139]/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="num-marker text-sm font-bold text-[#0f2139] bg-[#9bc7a9] px-2.5 py-1 rounded">
                    Stage {stage.number}
                  </span>
                </div>
              </div>
              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif-display text-xl font-semibold text-[#0f2139] mb-3">
                  {stage.title}
                </h3>
                <p className="text-sm text-[#0f2139]/75 leading-relaxed mb-4 flex-1">
                  {stage.body}
                </p>
                <div className="pt-3 border-t border-[rgba(15,33,57,0.10)] text-xs uppercase tracking-[0.18em] text-[#5b7e69] flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  {stage.detail}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
