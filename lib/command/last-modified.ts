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

  // This woudnt be true in production but is necessary in development
  // as a file may not yet have been commited
  if (timeStampString.length === 0) {
    return new Date(Date.now());
  }

  const timeStamp = parseInt(timeStampString);
  return new Date(timeStamp * 1000);
}
