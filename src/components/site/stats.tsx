"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 220,
    suffix: "+",
    label: "Global Hub Members",
    description: "Readers from around the world who love good books.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0112193107df.jpg",
    imageAlt: "Members of a modern library gathered on wide reading staircases.",
  },
  {
    value: 120,
    suffix: "+",
    label: "Active Social Salon Readers",
    description: "Members who join our private book talks every season.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4fc96243e3e0.jpg",
    imageAlt: "A circle of book club members discussing literature around a table.",
  },
  {
    value: 35,
    suffix: "+",
    label: "Average Reviews per Selection",
    description: "Honest reviews left on every major reading site.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/02969e6892ca.jpg",
    imageAlt: "A reader writing thoughtful notes next to a stack of books.",
  },
  {
    value: 18,
    suffix: "",
    label: "Standout Authors Per Cycle",
    description: "A small, hand-picked group of authors each year.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ec8a8a885cdc.jpg",
    imageAlt: "A panoramic view of a literary salon with readers in small groups.",
  },
];

function Counter({
  to,
  suffix = "",
  duration = 1600,
  start,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return (
    <span className="font-serif-display tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="relative py-20 lg:py-24 bg-[#0f2139] border-y border-[rgba(155,199,169,0.18)]"
      aria-label="Hub metrics"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(155,199,169,0.18)] bg-[#0a1830]/60 hover:border-[#9bc7a9]/50 transition-all"
            >
              {/* Image backdrop */}
              <div className="absolute inset-0 z-0" aria-hidden>
                <img
                  src={s.image}
                  alt=""
                  className="w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f2139]/85 via-[#0f2139]/70 to-[#0f2139]" />
              </div>
              {/* Content */}
              <div className="relative z-10 p-7 lg:p-8">
                <span className="eyebrow text-[#9bc7a9] mb-3 block">0{i + 1}</span>
                <div className="text-5xl lg:text-6xl text-[#e4e4e4] font-semibold leading-none mb-3">
                  <Counter to={s.value} suffix={s.suffix} start={visible} />
                </div>
                <h3 className="font-serif-display text-lg font-semibold text-[#e4e4e4] mb-2">
                  {s.label}
                </h3>
                <p className="text-sm text-[#a8b3c4] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
