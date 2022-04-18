import React, { FC, useRef } from "react";
import AudioBar from "./AudioBar";
import Marker from "./Marker";
import ButtonSet from "./ButtonSet";
import { usePlayer } from "../hooks/usePlayer";
import { IPlayer } from "../interfaces";

const Player: FC<IPlayer> = ({
  episode,
  setNextEpisode,
  setPreviousEpisode,
  selectedEpisodeIndex,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    marker,
    isMarkerActive,
    isPlaying,
    currentTime,
    toggleTrack,
    updateProgress,
  } = usePlayer(episode, audioRef);

  const skipTime = 5;

  const changeTrackSecond = (isForward: boolean) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = isForward
        ? audio.currentTime + skipTime
        : audio.currentTime - skipTime;
    }
  };

  const setNewTime = (time: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = time;
    }
  };
  return episode ? (
    <div className="player">
      <div className="player__description">
        <span className="player__name">{episode.name}</span>
      </div>
      <ButtonSet
        setNextEpisode={setNextEpisode}
        changeTrackSecond={changeTrackSecond}
        selectedEpisodeIndex={selectedEpisodeIndex}
        setPreviousEpisode={setPreviousEpisode}
        isPlaying={isPlaying}
        toggleTrack={toggleTrack}
      />
      <audio
        src={episode.audio}
        className="player__audio"
        ref={audioRef}
        onTimeUpdate={(e) => updateProgress(e)}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <AudioBar
        duration={audioRef.current?.duration ?? 0}
        currentTime={currentTime}
        setNewTime={setNewTime}
      />
      {isMarkerActive && <Marker {...marker} />}
    </div>
  ) : null;
};

export default Player;
