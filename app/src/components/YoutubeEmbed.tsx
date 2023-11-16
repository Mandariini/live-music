import { useState } from "react";

import ReactPlayer, { ReactPlayerProps } from "react-player";

interface YoutubeEmbedState {
  url: string | null;
  pip: boolean;
  playing: boolean;
  controls: boolean;
  light: boolean;
  volume: number;
  muted: boolean;
  played: number;
  loaded: number;
  duration: number;
  playbackRate: number;
  loop: boolean;
  player: ReactPlayerProps["ref"];
}

const YoutubeEmbed = ({ url }: { url: string }) => {
  //   player: ReactPlayerProps["ref"];

  const [state, setState] = useState<YoutubeEmbedState>({
    url: url,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    player: null,
  });

  const load = (url: string) => {
    setState({
      ...state,
      url: url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleStop = () => {
    setState({ ...state, url: null, playing: false });
  };

  const handleToggleControls = () => {
    const url = state.url;

    // setState(
    //   {
    //     controls: !state.controls,
    //     url: null,
    //   },
    //   () => load(url ? url : "")
    // );
  };

  const handleVolumeChange = (e) => {
    setState({ ...state, volume: parseFloat(e.target.value) });
  };

  const handleToggleMuted = () => {
    setState({ ...state, muted: !state.muted });
  };

  const handlePlay = () => {
    console.log("onPlay");
    setState({ ...state, playing: true });
  };

  const handlePause = () => {
    console.log("onPause");
    setState({ ...state, playing: false });
  };

  const handleEnded = () => {
    console.log("onEnded");
    setState({ ...state, playing: state.loop });
  };

  const handleDuration = (duration) => {
    console.log("onDuration", duration);
    setState({ ...state, duration });
  };

  const renderLoadButton = (url, label) => {
    return <button onClick={() => load(url)}>{label}</button>;
  };

  const ref = (player) => {
    setState({ ...state, player: player });
  };

  //   render() {
  //     const {
  //       url,
  //       playing,
  //       controls,
  //       light,
  //       volume,
  //       muted,
  //       loop,
  //       played,
  //       loaded,
  //       playbackRate,
  //       pip,
  //     } = this.state;
  const SEPARATOR = " · ";

  return (
    <div className="app">
      <section className="section">
        <h1>ReactPlayer Demo</h1>
        <div className="player-wrapper">
          <ReactPlayer
            ref={() => {
              ref;
            }}
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
            controls={state.controls}
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
                <progress max={1} value={state.played} />
              </td>
            </tr>
            <tr>
              <th>Loaded</th>
              <td>
                <progress max={1} value={state.loaded} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="footer">
        Version <strong>0.0.0</strong>
        {SEPARATOR}
        <a href="https://github.com/CookPete/react-player">GitHub</a>
        {SEPARATOR}
        <a href="https://www.npmjs.com/package/react-player">npm</a>
      </footer>
    </div>
  );
};

export default YoutubeEmbed;
