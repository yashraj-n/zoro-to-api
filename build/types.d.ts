export interface ISearchItem {
    id: string;
    poster: string;
    eng_title: string;
    jp_name: string;
    release_date: string;
    length: string;
}
export interface IEpisodeList {
    totalEps: number;
    episodes: IEpisode[];
}
export interface IEpisode {
    name: string;
    epNum: string;
    epId: string;
}
export interface IServer {
    type: string;
    server: string;
    serverId: string;
    serverId2: string;
    devNote?: string;
}
export interface IStream {
    type: string;
    link: string;
    server: number;
    sources: any[];
    tracks: any[];
    htmlGuide: string;
}
