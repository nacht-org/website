export const HEADER_HEIGHT = 60;
export const TABLE_OF_CONTENTS_WIDTH = "15rem";
export const CONTENT_WIDTH = 820;

export const NAVBAR_WIDTH = {
  sm: 200,
  lg: 260,
};

export const FOOTER_HEIGHT = {
  xs: "18rem",
  sm: "8rem",
};

/** @media (min-width: `after`px) */
export function breakpoint(after: number): string {
  return `@media (min-width: ${after}px)`;
}
