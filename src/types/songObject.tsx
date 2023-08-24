export interface returnedSongObject {
        artistName : string;
        artworkUrl100 : string;
        trackName: string;
        artworkUrl60: string;
}

export interface requestListSongObject {
        artistName : string;
        artworkUrl100 : string;
        trackName: string;
        artworkUrl60: string;
        id: string;
        votes: number;
        willPlay: boolean;
}