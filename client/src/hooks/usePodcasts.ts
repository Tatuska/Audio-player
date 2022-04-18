import { useState, useEffect } from "react";
import { IEpisodeItem } from "../interfaces";

export const usePodcasts = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState<IEpisodeItem>();
  const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState(0);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:1337/episodes");
      const fetchedEpisodes = await response.json();
      setEpisodes(fetchedEpisodes);
    }
    fetchMyAPI();
  }, []);

  const selectEpisode = (episode: IEpisodeItem, index: number) => {
    setSelectedEpisode(episode);
    setSelectedEpisodeIndex(index);
  };

  const setNextEpisode = (index: number) => {
    const newEpisodeIndex = index >= episodes.length - 1 ? 0 : index + 1;
    setSelectedEpisodeIndex(newEpisodeIndex);
  };

  const setPreviousEpisode = (index: number) => {
    const newEpisodeIndex = index <= 0 ? 0 : index - 1;
    setSelectedEpisodeIndex(newEpisodeIndex);
  };

  useEffect(() => {
    setSelectedEpisode(episodes[selectedEpisodeIndex]);
  }, [selectedEpisodeIndex, episodes]);
  return {
    episodes,
    selectEpisode,
    selectedEpisode,
    setNextEpisode,
    setPreviousEpisode,
    selectedEpisodeIndex,
  };
};
