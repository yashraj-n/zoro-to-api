import { IServer } from "../types";
/** Gets list of servers for an episode
@param id The id of the episode
@returns An object with list of Sub and Dub servers
@example getEpisodeServers("51286") // Returns list of servers for Horimiya Episode 1

*/
export default function getEpisodeServers(id: string): Promise<{
    serversSub: IServer[];
    serversDub: IServer[];
}>;
