import getRequestJson from "../utils/getRequestJson";
import * as Cheerio from "cheerio";
import { IServer } from "../types";

/** Gets list of servers for an episode
@param id The id of the episode
@returns An object with list of Sub and Dub servers
@example getEpisodeServers("51286") // Returns list of servers for Horimiya Episode 1

*/
export default async function getEpisodeServers(id: string) {
  id = parseInt(id) as any;

  let data = await getRequestJson(`/v2/episode/servers?episodeId=${id}`);
  let $ = Cheerio.load(data.html);

  let serversSub: IServer[] = [];
  let serversDub: IServer[] = [];

  $(
    "body > div.ps_-block.ps_-block-sub.servers-sub > div.ps__-list > div.item "
  ).each((i, el) => {
    let type = el.attribs["data-type"];
    let server = $(el).text().trim();
    let serverId = el.attribs["data-id"];
    let serverId2 = el.attribs["data-server-id"];
    let devNote =
      server === "StreamSB"
        ? "Reccomended Server"
        : "Might not work, rapid-cloud requries to have host as zoro.to";
    serversSub.push({ type, server, serverId, serverId2, devNote });
  });

  $(
    "body > div.ps_-block.ps_-block-sub.servers-dub > div.ps__-list > div.item "
  ).each((i, el) => {
    let type = el.attribs["data-type"];
    let server = $(el).text().trim();
    let serverId = el.attribs["data-id"];
    let serverId2 = el.attribs["data-server-id"];
    let devNote =
      server === "StreamSB"
        ? "Reccomended Server"
        : "Might not work, might require to have host and referer as zoro.to";
    serversDub.push({ type, server, serverId, serverId2, devNote });
  });

  return { serversSub, serversDub };
}
