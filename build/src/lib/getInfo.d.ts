/**Gets anime by name
 * @param name The name of the anime
 * @summary Uses anilist.co to get anime info
 * @example getAnimeInfoByName("Bleach") // Returns info about Bleach
 * @returns An object containing anime info
 */
export declare function getAnimeInfoByName(name: string): Promise<import("anilist-node").AnimeEntry>;
