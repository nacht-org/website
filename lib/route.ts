/**
 * Route information
 */
export interface RouteData {
  slugs: string[];
}

/**
 * Return absolute route path created from variable number of slugs
 *
 * @param slugs Variable number of slugs
 * @returns The constructed route path
 */
export function routePath(...slugs: string[]) {
  return `/${slugs.join("/")}`;
}
