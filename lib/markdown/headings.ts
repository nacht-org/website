import slugify from "slugify";

/**
 * This determines the type of heading where 1 is '#'
 * and 6 is '######'.
 */
export type HeadingDepth = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * This interface encapsulates data from a single heading in markdown.
 */
export interface HeadingData {
  text: string;
  depth: HeadingDepth;
  slug: string;
}

/**
 * Pattern matching all headings from markdown.
 */
const pattern = /#{1,6}.+(?=\n)/g;

/**
 * Find all the headings from markdown.
 * @param markdown The markdown source string
 * @returns A list of headings in order
 */
export function markdownHeadings(markdown: string): HeadingData[] {
  const matches = markdown.match(pattern);
  if (matches == null) {
    return [];
  }

  return matches.map(parseMatch);
}

/**
 * Parse heading data from a heading string
 *
 * @param match A markdown heading line
 * @returns Extracted heading data
 */
function parseMatch(match: string): HeadingData {
  const [declaration, ...rest] = match.split(" ");
  const text = rest.join(" ");

  return {
    text,
    depth: (6 - declaration.length + 1) as HeadingDepth,
    slug: slugify(text),
  };
}
