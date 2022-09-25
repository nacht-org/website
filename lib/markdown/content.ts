import frontMatter from "front-matter";
import fs from "fs";

/**
 * Remove frontmatter from the markdown content and return the body content.
 *
 * @param path THe path to the markdown file
 * @returns THe body of the markdown file with frontmatter removed
 */
export function mdBody(path: string): string {
  const content = fs.readFileSync(path).toString();
  const { body } = frontMatter(content);
  return body;
}
