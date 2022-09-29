import Slugger from "github-slugger";
import { TitleOrder } from "@mantine/core";

/**
 * This interface encapsulates data from a single heading in markdown.
 */
export interface HeadingData {
  title: string;
  depth: TitleOrder;
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
export function parseHeadings(markdown: string): HeadingData[] {
  const matches = markdown.match(pattern);
  if (matches == null) {
    return [];
  }

  const slugger = new Slugger();
  return matches.map((match) => parseMatch(match, slugger));
}

/**
 * Parse heading data from a heading string
 *
 * @param match A markdown heading line
 * @returns Extracted heading data
 */
function parseMatch(match: string, slugger: Slugger): HeadingData {
  const [declaration, ...rest] = match.split(" ");
  const text = rest.join(" ");

  return {
    title: text,
    depth: declaration.length as TitleOrder,
    slug: slugger.slug(text),
  };
}
