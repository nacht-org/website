import { execSync } from "child_process";

/**
 * Return the last modified date of the file from git
 *
 * @param path The path to the file checking
 */
export function lastModified(path: string): Date {
  const timeStampString = execSync(`git log -1 --pretty="format:%ct" ${path}`, {
    encoding: "utf-8",
  });

  const timeStamp = parseInt(timeStampString);

  return new Date(timeStamp * 1000);
}
