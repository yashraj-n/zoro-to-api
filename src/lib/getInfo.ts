import anilist from "anilist-node";
const query = new anilist();
/**Gets anime by name
 * @param name The name of the anime
 * @summary Uses anilist.co to get anime info
 * @example getAnimeInfoByName("Bleach") // Returns info about Bleach
 * @returns An object containing anime info
 */
export async function getAnimeInfoByName(name: string) {
  let id = (await query.searchEntry.anime(name)).media[0].id;
  return await query.media.anime(id);
}
