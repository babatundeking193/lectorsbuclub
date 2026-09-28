"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, Mail, Clock, Users } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Status = "idle" | "submitting" | "success" | "error";

const ASIDE_POINTS = [
  {
    icon: Mail,
    title: "We respond to qualified submissions only.",
    body: "Every submission is read by at least three committee members before any reply is sent.",
  },
  {
    icon: Clock,
    title: "Average response time: 14–21 business days.",
    body: "We take each submission seriously; speed never beats care.",
  },
  {
    icon: Users,
    title: "18 standout authors each year.",
    body: "A small, hand-picked cohort keeps the residency focused and fair.",
  },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    details: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      toast.success("Submission received. We respond to qualified submissions only.");
      setForm({ name: "", email: "", details: "", message: "" });
    } catch (err) {
      setStatus("error");
      toast.error("Something went wrong sending your submission. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[#0f2139] border-y border-[rgba(155,199,169,0.18)]"
      aria-label="Submit for committee consideration"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          number="07"
          eyebrow="Selection Committee"
          title="Connect with the Selection Committee"
          subtitle="18 standout authors each year."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Image side panel */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(155,199,169,0.18)]">
              <img
                src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0112193107df.jpg"
                alt="A modern library where the selection committee reads submissions."
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0f2139]/30 via-[#0f2139]/65 to-[#0f2139]/95" />
              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                <p className="mt-2 text-base text-[#e4e4e4]/90 leading-relaxed max-w-md">
                  To keep our salons high quality, we only have room for{" "}
                  <span className="text-[#9bc7a9] font-semibold">
                    18 standout authors
                  </span>{" "}
                  each year. If you are an independent author and your book fits
                  our mission — uncovering meaningful stories in overlooked
                  places — please send your details below for the committee to
                  review.
                </p>
                <div className="mt-6 space-y-3">
                  {ASIDE_POINTS.map((p) => (
                    <div
                      key={p.title}
                      className="flex items-start gap-3 text-sm text-[#a8b3c4]"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-md bg-[#9bc7a9]/15 border border-[#9bc7a9]/30 flex items-center justify-center text-[#9bc7a9]">
                        <p.icon className="w-4 h-4" strokeWidth={1.5} />
                      </span>
                      <span className="leading-relaxed">{p.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0a1830]/60 border border-[rgba(155,199,169,0.18)] rounded-2xl p-6 lg:p-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-[0.18em] text-[#9bc7a9] font-semibold"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="bg-[#0f2139] border-[rgba(155,199,169,0.22)] text-[#e4e4e4] placeholder:text-[#9aa3b0]/50 focus-visible:border-[#9bc7a9] focus-visible:ring-[#9bc7a9]/30"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.18em] text-[#9bc7a9] font-semibold"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@press.com"
                    className="bg-[#0f2139] border-[rgba(155,199,169,0.22)] text-[#e4e4e4] placeholder:text-[#9aa3b0]/50 focus-visible:border-[#9bc7a9] focus-visible:ring-[#9bc7a9]/30"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <label
                  htmlFor="details"
                  className="text-xs uppercase tracking-[0.18em] text-[#9bc7a9] font-semibold"
                >
                  Book / Publication Details
                </label>
                <Input
                  id="details"
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  required
                  placeholder="Title · Publisher · ISBN · Publication year"
                  className="bg-[#0f2139] border-[rgba(155,199,169,0.22)] text-[#e4e4e4] placeholder:text-[#9aa3b0]/50 focus-visible:border-[#9bc7a9] focus-visible:ring-[#9bc7a9]/30"
                />
              </div>

              <div className="mt-5 space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.18em] text-[#9bc7a9] font-semibold"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="A short note on the work, why you believe it aligns with the LectorsBuClub residency, and any context the committee should know."
                  className="bg-[#0f2139] border-[rgba(155,199,169,0.22)] text-[#e4e4e4] placeholder:text-[#9aa3b0]/50 focus-visible:border-[#9bc7a9] focus-visible:ring-[#9bc7a9]/30 resize-none"
                />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-[#9aa3b0] max-w-md">
                  We respond to qualified submissions only. Please make sure your
                  book details are correct before sending.
                </p>
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="self-start sm:self-auto inline-flex items-center gap-2 bg-[#9bc7a9] hover:bg-[#acd7ba] text-[#0f2139] font-semibold px-6 py-3 rounded-md transition-colors disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting…
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Submitted
                    </>
                  ) : (
                    <>
                      Submit for Committee Consideration
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
