"use client";

import { cn } from "@/lib/utils";

export function SectionHeading({
  number,
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "dark",
}: {
  number: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}) {
  // Dark section = light text, sage accent.
  // Light section = deep navy text, darker sage accent.
  const isDark = theme === "dark";
  const titleColor = isDark ? "text-[#e4e4e4]" : "text-[#0f2139]";
  const accentColor = isDark ? "text-[#9bc7a9]" : "text-[#5b7e69]";
  const lineColor = isDark ? "bg-[#9bc7a9]/60" : "bg-[#5b7e69]/60";
  const subColor = isDark ? "text-[#9aa3b0]" : "text-[#0f2139]/70";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-4",
          align === "center" && "justify-center"
        )}
      >
        <span className={cn("num-marker text-2xl font-semibold", accentColor)}>
          {number}
        </span>
        <span className={cn("w-10 h-px", lineColor)} />
        <span className={cn("eyebrow", accentColor)}>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight",
          titleColor
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base lg:text-lg font-light italic font-serif-display",
            subColor
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
