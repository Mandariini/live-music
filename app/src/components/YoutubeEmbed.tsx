import React from "react";
import YouTube, {
  YouTubeProps,
  YouTubeEvent,
  YouTubePlayer,
} from "react-youtube";

interface YoutubeEmbedProps {
  videoId: string;
  onReady?: ((event: YouTubePlayer) => void) | undefined;
  onStateChange?: ((event: YouTubeEvent) => void) | undefined;
}

function YoutubeEmbed({ videoId, onReady, onStateChange }: YoutubeEmbedProps) {
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //   autoplay: 1,
      //   disablekb: 1,
      //   controls: 1,
      //   enablejsapi: 1,
      //   mute: 1,
    },
  };

  console.log(videoId);

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      onStateChange={onStateChange}
    />
  );
}

export default YoutubeEmbed;
