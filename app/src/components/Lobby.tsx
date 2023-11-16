import { useParams } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

import { YouTubeEvent, YouTubePlayer } from "react-youtube";
import { useEffect, useState } from "react";

interface SongInfo {
  id: string;
  fullName: string;
  title?: string;
  artist?: string;
  duration: string;
  videoId: string;
  source: string;
}

const songs: SongInfo[] = [
  {
    id: "1",
    fullName: "Angerfist - Street Fighter",
    title: "Street Fighter",
    artist: "Angerfist",
    duration: "3:46",
    videoId: "6YlX2uItv_s",
    source: "youtube",
  },
  {
    id: "2",
    fullName: "Armin van Buuren - Blah Blah Blah",
    title: "Blah Blah Blah",
    artist: "Armin van Buuren",
    duration: "3:04",
    videoId: "uBQ1wt3VZ4M",
    source: "youtube",
  },
  {
    id: "3",
    fullName: "Skrillex - Bangarang",
    title: "Bangarang",
    artist: "Skrillex",
    duration: "3:35",
    videoId: "kn59Yn55Pos",
    source: "youtube",
  },
];

const Lobby = () => {
  const [currentSong, setCurrentSong] = useState<SongInfo>();
  const [songList, setSongList] = useState<SongInfo[]>();
  const [videoElement, setVideoElement] = useState<YouTubePlayer>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setCurrentSong(songs[0]);
    setSongList(songs);
  }, []);

  const onYoutubeEmbedReady = (event: YouTubePlayer) => {
    setVideoElement(event);
  };

  const onYoutubeEmbedStateChange = (event: YouTubeEvent) => {
    if (event.data === 0) {
      // Video ended
      console.log("Video ended");

      // Play next song
      const newSongList = songList.slice(1);
      setSongList(newSongList);
      setCurrentSong(newSongList[0]);
    }
  };

  if (!currentSong || !songList) {
    return <div>No songs playing</div>;
  }

  return (
    <div>
      <h2>Lobby {id}</h2>
      <h3>
        Currently playing: {currentSong.fullName} ({currentSong.duration})
        <YoutubeEmbed
          videoId={currentSong.videoId ? currentSong.videoId : ""}
          onReady={onYoutubeEmbedReady}
          onStateChange={onYoutubeEmbedStateChange}
        />
      </h3>
      <ol>
        {songList.map((song) => (
          <li>{song.fullName}</li>
        ))}
      </ol>
    </div>
  );
};

export default Lobby;
