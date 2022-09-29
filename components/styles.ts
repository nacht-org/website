export const TABLE_OF_CONTENTS_WIDTH = "15rem";
export const CONTENT_WIDTH = 820;

/** @media (min-width: `after`px) */
export function breakpoint(after: number): string {
  return `@media (min-width: ${after}px)`;
}
