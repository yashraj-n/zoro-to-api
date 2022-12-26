import { IEpisodeList } from "../types";
/** Gets list of episodes
 * @param id The id of the anime (zoro.to id)
 * @returns An object containing the total number of episodes and an array of episodes
 * @example getEpList("horimiya-15733") // Returns list of episodes for Horimiya
 * @example getEpList("15733") // Returns list of episodes for Horimiya
 */
export declare function getEpList(id: string): Promise<IEpisodeList>;
