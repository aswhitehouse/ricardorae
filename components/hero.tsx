import { HeroVideo } from "@/components/hero-video";

export function Hero() {
  return (
    <section className="relative flex min-h-[82vh] flex-col items-center justify-end px-5 pb-20 pt-28 md:min-h-[90vh] md:pb-28">
      <div className="absolute inset-0 z-0 min-h-[82vh] overflow-hidden md:min-h-[90vh]">
        <HeroVideo />
        <div
          className="hero-vignette absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[#060606]/25 mix-blend-multiply"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.45em] text-white/90 md:text-xs">
          Always · Underground · Forever
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl uppercase tracking-[0.08em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)] md:text-6xl lg:text-7xl">
          Ricardo Rae
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
         
        </p>
      </div>
    </section>
  );
}
