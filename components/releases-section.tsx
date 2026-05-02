import Image from "next/image";

import { getReleases } from "@/data/releases";

export function ReleasesSection() {
  const releases = getReleases();

  return (
    <div
      id="releases"
      className="mx-auto max-w-6xl scroll-mt-28 border-t border-white/[0.06] pt-16 md:pt-20"
    >
      <div className="text-center">
        <h2 className="font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.25em] md:text-2xl">
          Releases
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[var(--fg-muted)]">
          Selected singles and label collaborations.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
        {releases.map((r) => {
          const placeholder = r.comingSoon && !r.src;
          return (
            <li key={r.src ?? "coming-soon"}>
            <article className="group flex flex-col">
              <div
                className={`relative aspect-square overflow-hidden border bg-white/[0.02] transition-colors ${
                  placeholder
                    ? "border-dashed border-white/20 group-hover:border-[var(--accent)]/35"
                    : "border-white/[0.08] group-hover:border-[var(--accent)]/40"
                }`}
              >
                {r.src ? (
                  <>
                    <Image
                      src={r.src}
                      alt={`${r.songDisplay} — ${r.labelDisplay}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    {r.comingSoon ? (
                      <div className="absolute left-2 top-2 rounded-sm bg-[#060606]/85 px-2 py-1 text-[9px] uppercase tracking-[0.25em] text-[var(--accent)] backdrop-blur-sm">
                        Soon
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
                    <span className="font-[family-name:var(--font-display)] text-[10px] uppercase tracking-[0.35em] text-[var(--accent)]/90">
                      Preview
                    </span>
                    <span className="text-center text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                      Artwork
                      <br />
                      TBA
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.12em] text-[var(--fg-primary)] md:text-base">
                {r.songDisplay}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                {r.labelDisplay}
              </p>
              {r.releaseDate ? (
                <p className="mt-2 text-[11px] tabular-nums tracking-[0.08em] text-[var(--accent)]/95">
                  {r.releaseDate}
                </p>
              ) : null}
            </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
