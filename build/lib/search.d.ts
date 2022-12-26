import { ISearchItem } from "../types";
/** Searches anime on zoro.to
 * @param query The query to search for
 * @returns An array of search items
 */
export declare const zoroSearch: (query: string) => Promise<ISearchItem[]>;
