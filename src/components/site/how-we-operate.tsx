"use client";

import { ShieldCheck, XCircle, Coins, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";

const PILLARS = [
  {
    icon: ShieldCheck,
    eyebrow: "What we are",
    title: "An independent, private literary society",
    body: "LectorsBuClub is an independent, private literary society. We are clear about how we work: our community is built on respect and serious reading — not on pay-to-play marketing. We choose books for their literary worth, nothing else.",
    accent: "positive",
  },
  {
    icon: XCircle,
    eyebrow: "What we are not",
    title: "Not a pay-to-play marketing scheme",
    body: "Selection is based on quality alone. No author can buy their way in. No agent can pay for a better spot. No marketing budget has ever swayed a pick — and never will.",
    accent: "negative",
  },
  {
    icon: Coins,
    eyebrow: "How we are funded",
    title: "Through our private network",
    body: "Our private network pays for distribution, community tools, and engagement programs. This keeps our selection focused only on the book itself — never on money.",
    accent: "neutral",
  },
];

export function HowWeOperate() {
  return (
    <section
      id="operate"
      className="relative py-24 lg:py-32 bg-[#0f2139] border-y border-[rgba(155,199,169,0.18)] overflow-hidden"
      aria-label="How we operate"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="05"
          eyebrow="Operating Principle"
          title="How we operate"
          subtitle="We are open about how we work."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Image panel — single full-height image */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[420px] lg:min-h-[600px] overflow-hidden rounded-2xl border border-[rgba(155,199,169,0.18)]">
              <img
                src="/how-we-operate/panel.jpg"
                alt="A reader in thoughtful reflection — the kind of member who keeps the LectorsBuClub private hub disciplined and warm."
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0f2139]/60 via-[#0f2139]/30 to-[#0f2139]/90" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="eyebrow text-[#9bc7a9] mb-3 block">
                  The Private Hub
                </span>
                <p className="font-serif-display text-2xl text-[#e4e4e4] leading-snug font-medium">
                  Built on respect and serious reading — never on a pay-to-play model.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2139] bg-[#9bc7a9] hover:bg-[#acd7ba] px-5 py-2.5 rounded-md transition-colors"
                >
                  Read the charter
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Three pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 self-stretch">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className={`relative bg-[#0a1830]/60 border border-[rgba(155,199,169,0.18)] rounded-xl p-6 lg:p-7 hover:border-[#9bc7a9]/40 transition-all group ${
                  i === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`w-12 h-12 rounded-md flex items-center justify-center border ${
                      p.accent === "positive"
                        ? "bg-[#9bc7a9]/10 border-[#9bc7a9]/30 text-[#9bc7a9]"
                        : p.accent === "negative"
                        ? "bg-[#d97070]/10 border-[#d97070]/30 text-[#d97070]"
                        : "bg-[#acd7ba]/10 border-[#acd7ba]/30 text-[#acd7ba]"
                    }`}
                  >
                    <p.icon className="w-6 h-6" strokeWidth={1.5} />
                  </span>
                  <span className="num-marker text-3xl text-[#9bc7a9]/30 group-hover:text-[#9bc7a9]/60 transition-colors">
                    0{i + 1}
                  </span>
                </div>
                <span className="eyebrow text-[#9bc7a9]">{p.eyebrow}</span>
                <h3 className="mt-3 font-serif-display text-xl lg:text-2xl font-semibold text-[#e4e4e4] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm text-[#a8b3c4] leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
