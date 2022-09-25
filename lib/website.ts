/**
 * Meta information related to the website
 */
export const website = {
  source: "https://github.com/nacht-org/website",
  branch: "main",
};

/**
 * Derive the online edit link of the file based on relative path.
 *
 * @param path The relative path of the file
 * @returns The online link to edit the file
 */
export function editPath(path: string): string {
  return `${website.source}/edit/${website.branch}/${path}`;
}
