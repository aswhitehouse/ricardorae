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

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
        {releases.map((r) => (
          <li key={r.src}>
            <article className="group flex flex-col">
              <div className="relative aspect-square overflow-hidden border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-[var(--accent)]/40">
                <Image
                  src={r.src}
                  alt={`${r.songDisplay} — ${r.labelDisplay}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.12em] text-[var(--fg-primary)] md:text-base">
                {r.songDisplay}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                {r.labelDisplay}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
