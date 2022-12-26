import { IStream } from "../types";
/**Takes Episode Server  Id and returns iframe data
 * @param id The id of the episode server
 * @returns An object containing the iframe data
 * @example getStreamsById("755857")
 * @note Recommended to use StreamSB servers as other servers require zoro.to as referer and host
 */
export default function getStreamsById(id: string): Promise<IStream>;
