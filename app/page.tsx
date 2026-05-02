import { GrainOverlay } from "@/components/grain-overlay";
import { Hero } from "@/components/hero";
import { MainSections } from "@/components/main-sections";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-16 rounded bg-[var(--fg-primary)] px-4 py-2 text-xs font-medium text-[var(--bg-deep)] transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <GrainOverlay />
      <SiteHeader />
      <main id="main-content" className="relative flex-1">
        <Hero />
        <MainSections />
      </main>
      <SiteFooter />
    </>
  );
}
