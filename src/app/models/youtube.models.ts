export interface YoutubeData {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    items:         Item[];
    pageInfo:      PageInfo;
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: video;
}

export enum ItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface video {
    publishedAt:  Date;
    channelId:    ChannelID;
    title:        string;
    description:  string;
    thumbnails:   Thumbnails;
    channelTitle: ChannelTitle;
    playlistId:   PlaylistID;
    position:     number;
    resourceId:   ResourceID;
}

export enum ChannelID {
    UCUAPTYj15JSkETGnEseaFFg = "UCuaPTYj15JSkETGnEseaFFg",
}

export enum ChannelTitle {
    FernandoHerrera = "Fernando Herrera",
}

export enum PlaylistID {
    UUuaPTYj15JSkETGnEseaFFg = "UUuaPTYj15JSkETGnEseaFFg",
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres?:  Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}
