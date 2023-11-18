import { useParams } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

interface SongInfo {
  id: string;
  fullName: string;
  duration: string;
  url: string;
  source: string;
}

const songs: SongInfo[] = [
  {
    id: "1",
    fullName: "Angerfist - Street Fighter",
    duration: "3:46",
    url: "https://www.youtube.com/watch?v=6YlX2uItv_s",
    source: "youtube",
  },
  {
    id: "2",
    fullName: "Armin van Buuren - Blah Blah Blah",
    duration: "3:04",
    url: "https://www.youtube.com/watch?v=uBQ1wt3VZ4M",
    source: "youtube",
  },
  {
    id: "3",
    fullName: "Skrillex - Bangarang",
    duration: "3:35",
    url: "https://www.youtube.com/watch?v=kn59Yn55Pos",
    source: "youtube",
  },
];

const Lobby = () => {
  const [currentSong, setCurrentSong] = useState<SongInfo>();
  const [songList, setSongList] = useState<SongInfo[]>([]);

  const playerRef = useRef<ReactPlayer>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setCurrentSong(songs[0]);
    setSongList(songs);
  }, []);

  const handleEnded = () => {
    console.log("onEnded");
  };

  const skipSong = () => {
    // Play next song
    if (songList.length > 0) {
      const newSongList = songList.slice(1);
      setSongList(newSongList);
      setCurrentSong(newSongList[0]);
    }
  };

  const funneh = () => {
    playerRef.current?.seekTo(
      playerRef.current.getCurrentTime() + 10,
      "seconds"
    );
  };

  if (!currentSong || !songList) {
    return <div>No songs playing</div>;
  }

  return (
    <div>
      <h2>Lobby {id}</h2>
      <button onClick={funneh}>Go forwards</button>
      <button onClick={skipSong}>Skip</button>
      <h3>
        Currently playing: {currentSong.fullName} ({currentSong.duration})
        <YoutubeEmbed
          ref={playerRef}
          url={`https://www.youtube.com/watch?v=${currentSong.videoId}`}
          handleEnded={handleEnded}
        />
      </h3>
      <ol>
        {songList.map((song) => (
          <li key={song.id}>{song.fullName}</li>
        ))}
      </ol>
    </div>
  );
};

export default Lobby;
