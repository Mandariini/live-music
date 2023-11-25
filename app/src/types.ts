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

export enum HostAction {
  Playing,
  Stop,
}

export interface TSyncMessage {
  lobbyId: string;
  hostAction: HostAction;
  mediaId: string;
  videoTimestamp: number;
}
