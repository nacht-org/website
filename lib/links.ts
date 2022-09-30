const PRONOMIA_ORG = "https://github.com/nacht-org";
const PRONOMIA_SOURCE = `${PRONOMIA_ORG}/nacht`;

/**
 * Meta information related to the website
 */
export const website = {
  source: `${PRONOMIA_ORG}/website`,
  branch: "main",
};

/**
 * Links to pronomia source and other related
 */
export const pronomia = {
  issues: `${PRONOMIA_SOURCE}/issues`,
  discussions: `${PRONOMIA_SOURCE}/discussions`,
  releases: `${PRONOMIA_SOURCE}/releases`,
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
