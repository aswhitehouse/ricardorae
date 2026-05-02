/**
 * Artwork in /public — naming: SongName-RecordLabel.jpg|.webp
 * Order is display order (newest / upcoming first when listed).
 */
export const RELEASE_FILES = [
  "AllNightLong-Control.jpg",
  "BeepsCreepsSweeps-GuestHouse.jpg",
  "Try-SoSound.webp",
  "LeadTheWay-SoSound.webp",
  "FeelsRightRemix-GuestHouse.webp",
  "SoLongSurrey-SoSound.jpg",
  "HoldOn-Tango.jpg",
  "MiamiSunrise-SerialThriller.jpg",
  "SerialThriller-Guesthouse.jpg",
  "WhereThereLoveGoes-Armoa.jpg",
] as const;

export type ReleaseMeta = {
  /** Path for next/image, or null for placeholder tile */
  src: string | null;
  songDisplay: string;
  labelDisplay: string;
  /** Shown under the label (e.g. release date) */
  releaseDate?: string;
  comingSoon?: boolean;
};

/** Insert spaces at camelCase boundaries, e.g. MiamiSunrise → Miami Sunrise */
function splitCamelCase(s: string): string {
  return s
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .trim();
}

export function parseReleaseFilename(filename: string): Pick<
  ReleaseMeta,
  "songDisplay" | "labelDisplay"
> {
  const base = filename.replace(/\.(jpe?g|webp)$/i, "");
  const dash = base.indexOf("-");
  const song = dash === -1 ? base : base.slice(0, dash);
  const label = dash === -1 ? "" : base.slice(dash + 1);
  return {
    songDisplay: splitCamelCase(song),
    labelDisplay: splitCamelCase(label),
  };
}

const UPCOMING: ReleaseMeta = {
  src: "/SoFree-SerialThriller.jpg",
  ...parseReleaseFilename("SoFree-SerialThriller.jpg"),
  releaseDate: "15 May 2026",
  comingSoon: true,
};

export function getReleases(): ReleaseMeta[] {
  const fromFiles: ReleaseMeta[] = RELEASE_FILES.map((file) => ({
    src: `/${file}`,
    ...parseReleaseFilename(file),
  }));
  return [UPCOMING, ...fromFiles];
}
