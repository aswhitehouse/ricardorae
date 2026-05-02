import Link from "next/link";

const nav = [
  { href: "#releases", label: "Releases" },
  { href: "#about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/[0.06] bg-[#060606]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl tracking-[0.2em] text-[var(--fg-primary)] md:text-2xl"
        >
          RICARDO RAE
        </Link>
        <nav
          className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] md:gap-10 md:text-xs"
          aria-label="Primary"
        >
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded px-2 py-2 text-[var(--fg-muted)] transition-colors hover:text-[var(--fg-primary)] md:px-0"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
