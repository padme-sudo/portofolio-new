/** Minimal `cn` helper — no extra dependencies (replaces clsx + tailwind-merge). */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
