import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPlay,
  faBackward,
  faForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { IButtonSet } from "../interfaces";

const ButtonSet: FC<IButtonSet> = ({
  setNextEpisode,
  changeTrackSecond,
  selectedEpisodeIndex,
  setPreviousEpisode,
  isPlaying,
  toggleTrack,
}) => (
  <div className="button-set">
    <button
      className="button-set__button"
      onClick={() => setPreviousEpisode(selectedEpisodeIndex)}
    >
      <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x" />
    </button>
    <button
      className="button-set__button"
      onClick={() => changeTrackSecond(false)}
    >
      <FontAwesomeIcon icon={faBackward} size="2x" />
    </button>
    <button className="button-set__button" onClick={toggleTrack}>
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="2x" />
    </button>
    <button
      className="button-set__button"
      onClick={() => changeTrackSecond(true)}
    >
      <FontAwesomeIcon icon={faForward} size="2x" />
    </button>
    <button
      className="button-set__button"
      onClick={() => setNextEpisode(selectedEpisodeIndex)}
    >
      <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
    </button>
  </div>
);

export default ButtonSet;
