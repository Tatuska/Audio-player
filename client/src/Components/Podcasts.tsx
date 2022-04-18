import React, { FC } from "react";
import Episode from "./Episode";
import Player from "./Player";
import { usePodcasts } from "../hooks/usePodcasts";
import { IEpisodeItem } from "../interfaces";

const Podcasts: FC = () => {
  const {
    episodes,
    selectEpisode,
    selectedEpisode,
    setNextEpisode,
    setPreviousEpisode,
    selectedEpisodeIndex,
  } = usePodcasts();

  return (
    <div className="podcasts">
      <h1 className="podcasts__title">Welcome to player</h1>
      <ul className="podcasts__list">
        {episodes &&
          episodes.length &&
          episodes.map((item: IEpisodeItem, index: number) => (
            <Episode
              episode={item}
              key={`episode__${index}`}
              selectEpisode={selectEpisode}
              index={index}
            />
          ))}
      </ul>
      {selectedEpisode ? (
        <Player
          episode={selectedEpisode}
          setNextEpisode={setNextEpisode}
          setPreviousEpisode={setPreviousEpisode}
          selectedEpisodeIndex={selectedEpisodeIndex}
        />
      ) : null}
    </div>
  );
};

export default Podcasts;
