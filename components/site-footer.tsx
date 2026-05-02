export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[#050505] px-5 py-10 text-center md:px-8">
      <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--fg-muted)]">
        © {year} Ricardo Rae
      </p>
    </footer>
  );
}
