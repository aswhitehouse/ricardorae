import Image from "next/image";

import { socialLinks } from "@/data/site";

export function AboutSection() {
  return (
    <div
      id="about"
      className="relative mt-20 w-full scroll-mt-28 border-t border-white/[0.06] pt-16 md:mt-28 md:pt-20"
    >
      {/* Full-bleed graffiti — sits behind copy as muted texture */}
      <div
        className="pointer-events-none absolute inset-0 left-1/2 z-0 min-h-full w-screen max-w-none -translate-x-1/2 overflow-hidden"
        aria-hidden
      >
        <Image
          src="/graffiti-in-shoreditch-london.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-[0.14] saturate-[0.75] mix-blend-soft-light"
        />
        <div className="absolute inset-0 bg-[#060606]/88" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#060606] via-[#060606]/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
      <h2 className="text-center font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.25em] md:text-2xl">
        About
      </h2>

      <div className="mx-auto mt-10 max-w-[52ch] md:mt-12">
        <p className="text-[15px] leading-[1.75] text-[var(--fg-primary)]/92 md:text-[17px] md:leading-[1.72]">
          Ricardo Rae is an Australian DJ, producer, and remixer originally from
          Brisbane, known for his deep roots in the underground house music
          scene. With a career spanning over two decades, he has built a
          reputation for crafting timeless, groove-driven records and
          delivering high-energy, technically refined DJ sets.
        </p>

        <p className="mt-7 text-[15px] leading-[1.75] text-[var(--fg-muted)] md:mt-8 md:text-[17px] md:leading-[1.72]">
          A prolific studio artist, Ricardo Rae has released a range of house
          music projects, including standout EPs such as{" "}
          <span className="text-[var(--fg-primary)]/90">Serial Thriller</span>{" "}
          and{" "}
          <span className="text-[var(--fg-primary)]/90">So Long Surrey</span>
          , showcasing his signature blend of driving basslines, hypnotic
          rhythms, and dancefloor-focused energy.
        </p>

        <p className="mt-7 text-[15px] leading-[1.75] text-[var(--fg-muted)] md:mt-8 md:text-[17px] md:leading-[1.72]">
          His productions have been recognised as some of the most widely
          appreciated releases to emerge from Australia&apos;s underground house
          movement, reflecting both musical depth and club authenticity.
        </p>

        <p className="mt-7 text-[15px] leading-[1.75] text-[var(--fg-muted)] md:mt-8 md:text-[17px] md:leading-[1.72]">
          Beyond the decks and studio, Ricardo is also the founder of the{" "}
          <span className="text-[var(--fg-primary)]/90">Serial Thriller</span>{" "}
          label, a platform dedicated to uncompromising, quality-driven
          electronic music.
        </p>

        <p className="mt-7 text-[15px] leading-[1.75] text-[var(--fg-muted)] md:mt-8 md:text-[17px] md:leading-[1.72]">
          Known for his versatility, Ricardo Rae blends classic house
          sensibilities with forward-thinking sounds, maintaining a presence in
          the scene while evolving his style across eras. Whether behind the
          decks or in the studio, his work remains rooted in a deep passion for
          underground dance culture.
        </p>
      </div>

      <nav
        className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-4 border-t border-white/[0.06] pt-14 md:mt-16 md:pt-16"
        aria-label="Social and mixes"
      >
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.3em] text-[var(--fg-muted)] transition-colors hover:text-[var(--accent)]"
          >
            {label}
          </a>
        ))}
      </nav>
      </div>
    </div>
  );
}
