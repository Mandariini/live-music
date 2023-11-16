import React from "react";
import { useState } from "react";

import ReactPlayer, { ReactPlayerProps } from "react-player";
import { OnProgressProps } from "react-player/base";

interface YoutubeEmbedState {
  url: string | null;
  playing: boolean;
  volume: number;
  muted: boolean;
  played: number;
  loaded: number;
  duration: number;
  player: ReactPlayerProps["ref"];
  progress: number;
}

interface YoutubeEmbedProps {
  url: string;
  handleEnded: () => void;
}

const YoutubeEmbed = React.forwardRef(
  ({ url, handleEnded }: YoutubeEmbedProps, ref) => {
    //   player: ReactPlayerProps["ref"];

    const [state, setState] = useState<YoutubeEmbedState>({
      url: url,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      player: null,
      progress: 0,
    });

    const load = (url: string) => {
      setState({
        ...state,
        url: url,
        played: 0,
        loaded: 0,
      });
    };

    const handlePlayPause = () => {
      setState({ ...state, playing: !state.playing });
    };

    const handleStop = () => {
      setState({ ...state, url: null, playing: false });
    };

    const handleVolumeChange = (e) => {
      setState({ ...state, volume: parseFloat(e.target.value) });
    };

    const handlePlay = () => {
      console.log("onPlay");
      setState({ ...state, playing: true });
    };

    const handlePause = () => {
      console.log("onPause");
      setState({ ...state, playing: false });
    };

    const handleDuration = (duration) => {
      console.log("onDuration", duration);
      setState({ ...state, duration });
    };

    const handleProgress = (e: OnProgressProps) => {
      console.log("onProgress", e);
      setState({ ...state, progress: e.played });
      // We only want to update time slider if we are not currently seeking
      //   if (!state.seeking) {
      // setState({ ...state, ...e });
      //   }
    };

    return (
      <div className="app">
        <section className="section">
          <div className="player-wrapper">
            <ReactPlayer
              ref={ref}
              className="react-player"
              width="100%"
              height="100%"
              url={url}
              onReady={() => console.log("onReady")}
              onStart={() => console.log("onStart")}
              onPlay={handlePlay}
              onPause={handlePause}
              onBuffer={() => console.log("onBuffer")}
              onSeek={(e) => console.log("onSeek", e)}
              onEnded={handleEnded}
              onError={(e) => console.log("onError", e)}
              onDuration={handleDuration}
              onPlaybackQualityChange={(e) =>
                console.log("onPlaybackQualityChange", e)
              }
              playing={state.playing}
              volume={state.volume}
              onProgress={handleProgress}
              progressInterval={1000}
            />
          </div>

          <table>
            <tbody>
              <tr>
                <th>Controls</th>
                <td>
                  <button onClick={handleStop}>Stop</button>
                  <button onClick={handlePlayPause}>
                    {state.playing ? "Pause" : "Play"}
                  </button>
                </td>
              </tr>
              <tr>
                <th>Volume</th>
                <td>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step="any"
                    value={state.volume}
                    onChange={handleVolumeChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Played</th>
                <td>
                  <progress value={state.progress} />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
);

export default YoutubeEmbed;
