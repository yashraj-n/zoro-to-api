//@ts-nocheck
import * as cheerio from "cheerio";
import getRequestJson from "../utils/getRequestJson";
import { ISearchItem } from "../types";

/** Searches anime on zoro.to
 * @param query The query to search for
 * @returns An array of search items
 */
export const zoroSearch = async (query: string): Promise<ISearchItem[]> => {
  query = encodeURIComponent(query);
  const data = await (
    await getRequestJson(`/search/suggest?keyword=${query}`)
  ).html;
  let $ = cheerio.load(data);

  let results = [];
  // Loop over a tags
  $("a").each((i, el) => {
    let id = $(el).attr("href")?.replace("?ref=search", "");
    let poster = "";
    let eng_title = "";
    let jp_name = "";
    let release_date = "";
    let length = "";

    if (id === "search?keyword=" + query) return;

    id = id?.slice(1);
    poster = $(el).find("div.film-poster > img").attr("data-src") || "";
    eng_title = $(el).find("div.srp-detail > h3").text() || "";
    jp_name = $(el).find("div.srp-detail > div.alias-name").text() || "";
    release_date = $(el).find("div.film-infor > span").first().text() || "";
    length = $(el).find("div.film-infor > span").last().text() || "";
    results.push({ id, poster, eng_title, jp_name, release_date, length });
  });
  return results;
};
