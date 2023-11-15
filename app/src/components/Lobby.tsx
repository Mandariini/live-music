import { useParams } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

interface SongInfo {
  id: string;
  fullName: string;
  title?: string;
  artist?: string;
  duration: string;
  link: string;
  source: string;
}

const songs: SongInfo[] = [
  {
    id: "1",
    fullName: "Angerfist - Street Fighter",
    title: "Street Fighter",
    artist: "Angerfist",
    duration: "3:46",
    link: "https://www.youtube.com/watch?v=6YlX2uItv_s",
    source: "youtube",
  },
  {
    id: "2",
    fullName: "Armin van Buuren - Blah Blah Blah",
    title: "Blah Blah Blah",
    artist: "Armin van Buuren",
    duration: "3:04",
    link: "https://www.youtube.com/watch?v=QqQVll-MP3I",
    source: "youtube",
  },
  {
    id: "3",
    fullName: "Skrillex - Bangarang",
    title: "Bangarang",
    artist: "Skrillex",
    duration: "3:35",
    link: "https://www.youtube.com/watch?v=YJVmu6yttiw",
    source: "youtube",
  },
  {
    id: "4",
    fullName: "Daft Punk - One More Time",
    title: "One More Time",
    artist: "Daft Punk",
    duration: "5:20",
    link: "https://www.youtube.com/watch?v=FGBhQbmPwH8",
    source: "youtube",
  },
];

const Lobby = () => {
  const { id } = useParams<{ id: string }>();

  const currentSong = songs[0];
  const listItems = songs.map((song) => <li>{song.fullName}</li>);

  return (
    <div>
      <h2>Lobby {id}</h2>
      <h3>
        Currently playing: {currentSong.fullName} ({currentSong.duration})
        <YoutubeEmbed youtube_url={currentSong.link} />
      </h3>
      <ol>{listItems}</ol>
    </div>
  );
};

export default Lobby;
