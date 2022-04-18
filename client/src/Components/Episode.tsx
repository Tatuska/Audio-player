import React, { FC } from "react";
import { IEpisode } from "../interfaces";

const Episode: FC<IEpisode> = ({ episode, selectEpisode, index }) => (
  <li className="episode">
    <button
      className="episode__button"
      onClick={() => selectEpisode(episode, index)}
    >
      <div className="episode__image"></div>
      <div className="episode__name">{episode.name}</div>
    </button>
  </li>
);

export default Episode;
