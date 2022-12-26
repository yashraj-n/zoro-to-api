import getRequestJson from "../utils/getRequestJson";
import * as Cheerio from "cheerio";
import { IEpisodeList, IEpisode } from "../types";

/** Gets list of episodes
 * @param id The id of the anime (zoro.to id)
 * @returns An object containing the total number of episodes and an array of episodes
 * @example getEpList("horimiya-15733") // Returns list of episodes for Horimiya
 * @example getEpList("15733") // Returns list of episodes for Horimiya
 */
export async function getEpList(id: string) : Promise<IEpisodeList> {
  id = id.split("-").pop() || id;
  let data = await getRequestJson(`/v2/episode/list/${id}`);

  let totalEps = data.totalItems || 0;
  let $ = Cheerio.load(data.html);

  let eps : IEpisode[] = [];
  $("div.ss-list > a").each((i, el) => {
    let name = el.attribs["title"];
    let epNum = el.attribs["data-number"];
    let epId = el.attribs["data-id"];
    eps.push({ name, epNum, epId });
  });
  return { totalEps, episodes: eps };
}
