"use client";

import { useEffect, useRef } from "react";

/**
 * MP4 first for Chrome/Firefox/Edge; MOV fallback for Safari if needed.
 * Client component so we can recover from autoplay / decode quirks.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    const run = () => {
      const p = el.play();
      if (p !== undefined) void p.catch(() => {});
    };
    run();
    el.addEventListener("loadeddata", run);
    return () => el.removeEventListener("loadeddata", run);
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 z-0 min-h-full min-w-full object-cover object-center"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    >
      <source src="/rr.mp4" type="video/mp4" />
      <source src="/rr.mov" type="video/quicktime" />
    </video>
  );
}
