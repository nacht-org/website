const NACHT_ORG = "https://github.com/nacht-org";
const NACHT_SOURCE = `${NACHT_ORG}/nacht`;

/**
 * Meta information related to the website
 */
export const website = {
  source: `${NACHT_ORG}/website`,
  branch: "main",
};

/**
 * Links to nacht source and other related
 */
export const nacht = {
  source: NACHT_SOURCE,
  issues: `${NACHT_SOURCE}/issues`,
  discussions: `${NACHT_SOURCE}/discussions`,
  releases: `${NACHT_SOURCE}/releases`,
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
