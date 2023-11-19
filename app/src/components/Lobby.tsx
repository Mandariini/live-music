import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

import YoutubeEmbed from "./YoutubeEmbed";

import lobbyService from "../services/lobbies";
import { TMedia } from "../types";

const Lobby = () => {
  const [currentMedia, setCurrentMedia] = useState<TMedia>();
  const [mediaQueue, setMediaQueue] = useState<TMedia[]>([]);

  const playerRef = useRef<ReactPlayer>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      return;
    }

    lobbyService.getLobby(id).then((lobby) => {
      //   setLobbyInfo(lobby);
      setCurrentMedia(lobby.currentMedia);
      setMediaQueue(lobby.mediaQueue);
    });
  }, [id]);

  if (!id) {
    return <div>Unknown lobby</div>;
  }

  const handleEnded = () => {
    console.log("onEnded");
  };

  const skipSong = () => {
    // Play next song
    if (mediaQueue.length > 0) {
      const newSongList = mediaQueue.slice(1);
      setMediaQueue(newSongList);
      setCurrentMedia(newSongList[0]);
    }
  };

  const funneh = () => {
    playerRef.current?.seekTo(
      playerRef.current.getCurrentTime() + 10,
      "seconds"
    );
  };

  if (!currentMedia || !mediaQueue) {
    return <div>No songs playing</div>;
  }

  return (
    <div>
      <h2>Lobby {id}</h2>
      <button onClick={funneh}>Go forwards</button>
      <button onClick={skipSong}>Skip</button>
      <h3>
        Currently playing: {currentMedia.title}
        <YoutubeEmbed
          ref={playerRef}
          url={currentMedia.url}
          handleEnded={handleEnded}
        />
      </h3>
      <ol>
        {mediaQueue.map((media) => (
          <li key={media.url}>{media.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Lobby;
