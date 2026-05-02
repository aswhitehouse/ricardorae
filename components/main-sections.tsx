import { AboutSection } from "@/components/about-section";
import { ReleasesSection } from "@/components/releases-section";

export function MainSections() {
  return (
    <section className="relative z-10 bg-[#060606] px-5 pb-20 pt-8 md:px-8 md:pb-28 md:pt-12">
      <div className="mx-auto max-w-6xl">
        <ReleasesSection />
      </div>
      <AboutSection />
    </section>
  );
}
