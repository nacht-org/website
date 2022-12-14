import { FileMeta, parseFront, parseMeta } from "./markdown";
import { RouteData } from "./route";

/**
 * Paths to all the guides
 */
const paths = {
  Basic: ["markdown/basic/getting-started.md"],
  About: ["markdown/about/contribute.md", "markdown/about/license.md"],
};

/**
 * The frontmatter data from a guide markdown file.
 */
export interface GuideFront {
  title: string;
  description: string;
}

/**
 * Complete guide data where frontmatter data is combined
 * with file metadata and route data.
 */
export type GuideData = GuideFront & FileMeta & RouteData;

/**
 * Convert a path to a guide to a slug
 *
 * @param path The path to a markdown guide file
 * @returns
 */
function pathToSlugs(path: string): string[] {
  return path
    .substring("markdown/".length, path.length - ".md".length)
    .split("/");
}

/**
 * Reconstruct the path to the markdown guide file from the slugs
 *
 * @param slugs The slugs to convert to path
 * @returns The path of the guide file
 */
export function slugsToPath(slugs: string[]): string {
  return `markdown/${slugs.join("/")}.md`;
}

/**
 * @returns All the guides as route slugs
 */
export function guideSlugs(): string[][] {
  return Object.values(paths).flat().map(pathToSlugs);
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

export interface GuideGroup {
  title: string;
  guides: GuideMinimal[];
}

/**
 * Heading data of a guide markdown file.
 */
export interface GuideMinimal {
  front: GuideFront;
  path: string;
  route: RouteData;
}

/**
 * @returns All the guide headings with frontmatter data
 */
export function guideGroups(): GuideGroup[] {
  return Object.entries(paths).map(([title, paths]) => ({
    title,
    guides: paths.map((path) => ({
      path,
      front: parseFront<GuideFront>(path),
      route: { slugs: pathToSlugs(path) },
    })),
  }));
}
