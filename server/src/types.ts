interface Media {
  title: string;
  url: string;
}

interface Lobby {
  id: string;
  name: string;
  mediaQueue: Media[];
  currentMedia: Media;
}

export { Media, Lobby };
