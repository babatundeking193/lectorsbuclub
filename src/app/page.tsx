import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Philosophy } from "@/components/site/philosophy";
import { Stats } from "@/components/site/stats";
import { Residency } from "@/components/site/residency";
import { ReviewVelocity } from "@/components/site/review-velocity";
import { Curators } from "@/components/site/curators";
import { HowWeOperate } from "@/components/site/how-we-operate";
import { Voices } from "@/components/site/voices";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f2139] text-[#e4e4e4]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Stats />
        <Residency />
        <ReviewVelocity />
        <Curators />
        <HowWeOperate />
        <Voices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
