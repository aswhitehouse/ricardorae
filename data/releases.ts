/**
 * Artwork in /public — naming: SongName-RecordLabel.jpg
 * Order is display order (newest first if you prefer; edit the array).
 */
export const RELEASE_FILES = [
  "SoLongSurrey-SoSound.jpg",
  "HoldOn-Tango.jpg",
  "MiamiSunrise-SerialThriller.jpg",
  "SerialThriller-Guesthouse.jpg",
  "WhereThereLoveGoes-Armoa.jpg",
] as const;

export type ReleaseMeta = {
  /** Path for next/image */
  src: string;
  song: string;
  label: string;
  /** CamelCase segments split for display */
  songDisplay: string;
  labelDisplay: string;
};

/** Insert spaces at camelCase boundaries, e.g. MiamiSunrise → Miami Sunrise */
function splitCamelCase(s: string): string {
  return s
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .trim();
}

export function parseReleaseFilename(filename: string): Omit<ReleaseMeta, "src"> {
  const base = filename.replace(/\.jpe?g$/i, "");
  const dash = base.indexOf("-");
  const song = dash === -1 ? base : base.slice(0, dash);
  const label = dash === -1 ? "" : base.slice(dash + 1);
  return {
    song,
    label,
    songDisplay: splitCamelCase(song),
    labelDisplay: splitCamelCase(label),
  };
}

export function getReleases(): ReleaseMeta[] {
  return RELEASE_FILES.map((file) => ({
    src: `/${file}`,
    ...parseReleaseFilename(file),
  }));
}
