/** @media (min-width: `after`px) */
export function breakpoint(after: number): string {
  return `@media (min-width: ${after}px)`;
}
