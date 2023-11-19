import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import lobbyService from "../services/lobbies";

import { TLobby } from "../types";

const LobbyList = () => {
  const [lobbies, setLobbies] = useState<TLobby[]>([]);

  useEffect(() => {
    lobbyService.getAll().then((lobbies) => setLobbies(lobbies));
  }, []);

  return (
    <div>
      <h2>Lobbies</h2>
      <ul>
        {lobbies.map((lobby: TLobby) => (
          <li key={lobby.id}>
            <Link to={`/lobby/${lobby.id}`}>{lobby.name}</Link>
            <div>Currently playing: {lobby.currentMedia.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LobbyList;
