import frontMatter from "front-matter";
import fs from "fs";
import { lastModified } from "../command";

/**
 * Information that is related to the file itself
 * and not the content within.
 */
export interface FileMeta {
  path: string;
  dateModified: string;
}

/**
 * Retrieve frontmatter data from the markdown file.
 *
 * @param path Path to markdown file with frontmatter to parse
 * @returns The frontmatter data
 */
export function parseFront<F>(path: string): F {
  const content = fs.readFileSync(path).toString();
  const { attributes } = frontMatter<F>(content);
  return attributes;
}

/**
 * Retrieve frontmatter and file information from markdown file.
 *
 * @param path Path to markdown file with frontmatter to parse
 * @returns File meta information and front matter data.
 */
export function parseMeta<F, T extends F & FileMeta>(path: string): T {
  return {
    ...parseFront<F>(path),
    path,
    dateModified: lastModified(path)?.toUTCString(),
  } as T;
}
