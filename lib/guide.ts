import glob from "glob";
import {
  FileMeta,
  HeadingData,
  markdownHeadings,
  mdBody,
  parseFront,
  parseMeta,
} from "./markdown";
import { RouteData } from "./route";

/**
 * The frontmatter data from a guide markdown file.
 */
export interface GuideFront {
  title: string;
  description: string;
  key: number;
}

/**
 * Complete guide data where frontmatter data is combined
 * with file metadata and route data.
 */
export type GuideData = GuideFront & FileMeta & RouteData;

/**
 * @returns Paths to all the guide markdown files.
 */
function paths() {
  return glob.sync("markdown/guide/**/*.md");
}

/**
 * Convert a path to a guide to a slug
 *
 * @param path The path to a markdown guide file
 * @returns
 */
function pathToSlugs(path: string): string[] {
  return path
    .substring("markdown/guide/".length, path.length - ".md".length)
    .split("/");
}

/**
 * Reconstruct the path to the markdown guide file from the slugs
 *
 * @param slugs The slugs to convert to path
 * @returns The path of the guide file
 */
export function slugsToPath(slugs: string[]): string {
  return `markdown/guide/${slugs.join("/")}.md`;
}

/**
 * @returns All the guides as route slugs
 */
export function guideSlugs(): string[][] {
  return paths().map(pathToSlugs);
}

/**
 * Parse guide data from the file
 *
 * @param path The path to a markdown guide file
 * @returns The parsed guide data from the file
 */
export function guideData(path: string): GuideData {
  const data = parseMeta<GuideFront, GuideFront & FileMeta>(path);
  return { ...data, slugs: pathToSlugs(data.path) };
}

/**
 * Heading data of a guide markdown file.
 */
export interface GuideHeading {
  front: GuideFront;
  headings: HeadingData[];
  route: RouteData;
}

/**
 * @returns All the guide headings with frontmatter data
 */
export function guideHeadings(): GuideHeading[] {
  return paths()
    .map((path) => ({
      front: parseFront<GuideFront>(path),
      headings: markdownHeadings(mdBody(path)),
      route: { slugs: pathToSlugs(path) },
    }))
    .sort((a, b) => a.front.key - b.front.key);
}
