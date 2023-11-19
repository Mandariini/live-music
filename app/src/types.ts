export interface TMedia {
  title: string;
  url: string;
}

export interface TLobby {
  id: string;
  name: string;
  mediaQueue: TMedia[];
  currentMedia: TMedia;
}
