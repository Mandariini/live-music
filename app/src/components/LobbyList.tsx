import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Lobby {
  id: string;
  name: string;
  description: string;
  userCount?: number;
  currentSong?: string;
}

const lobbies: Lobby[] = [
  {
    id: "dsiu",
    name: "Hardstyle",
    description:
      "Hardstyle is a Dutch electronic dance genre mixing influences from techno and hardcore. Early hardstyle typically consisted of an overdriven and hard-sounding kick drum with a lot of sustain, with intense faded or reversed basslines accompanying the beat. Hardstyle also utilises harsh and distorted synths, detuned and distorted sounds accompanying the main instruments along with a lot of multi-layered noise and reverberation. It's further known for its harsh, aggressive and gritty sound design.",
    userCount: 58,
    currentSong: "Angerfist - Street Fighter",
  },
  {
    id: "jklm",
    name: "Trance",
    description:
      "Trance is a genre of electronic dance music that emerged in the 1990s. It is characterized by a tempo of between 125 and 150 beats per minute, repeating melodic phrases, and a musical form that builds up and down throughout a track. Trance often features a strong bassline, drums, and a lead synth that carries the melody. It is known for its uplifting and euphoric sound.",
    userCount: 5,
    currentSong: "Armin van Buuren - Blah Blah Blah",
  },
  {
    id: "nopq",
    name: "Dubstep",
    description:
      "Dubstep is a genre of electronic dance music that originated in South London in the early 2000s. It is characterized by its dark, heavy, and often aggressive sound, with prominent basslines and sub-bass frequencies. Dubstep often features syncopated rhythms, chopped-up vocal samples, and a variety of electronic sounds and effects. It is known for its intense and energetic sound.",
    userCount: 2,
    currentSong: "Skrillex - Bangarang",
  },
  {
    id: "rstu",
    name: "House",
    description:
      "House is a genre of electronic dance music that originated in Chicago in the early 1980s. It is characterized by its 4/4 beat, repetitive rhythms, and use of synthesizers and drum machines. House often features soulful vocals, piano riffs, and samples from other songs. It is known for its upbeat and energetic sound.",
    userCount: 4,
    currentSong: "Daft Punk - One More Time",
  },
  {
    id: "vwxy",
    name: "Forsen",
    description: "Forsen twitch stream",
    userCount: 1999,
    currentSong: "Forsen - FeelsOkayMan",
  },
];

const LobbyList = () => {
  //   const [lobbies, setLobbies] = useState<Lobby[]>([]);

  useEffect(() => {
    // Fetch lobbies from your backend API and update the state
    // Example: fetch('/api/lobbies').then(response => response.json()).then(data => setLobbies(data));
  }, []);

  return (
    <div>
      <h2>Lobbies</h2>
      <ul>
        {lobbies.map((lobby) => (
          <li key={lobby.id}>
            <Link to={`/lobby/${lobby.id}`}>{lobby.name}</Link>
            <div>Users in lobby: {lobby.userCount}</div>
            <div>Currently playing: {lobby.currentSong}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LobbyList;
