import { useState, useEffect, SyntheticEvent } from "react";
import { IMarker, IEpisodeItem } from "../interfaces";

export const usePlayer = (
  episode: IEpisodeItem,
  audioRef: { current: HTMLAudioElement | null }
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [marker, setMarker] = useState<IMarker>({
    start: 0,
    duration: 0,
    type: "",
  });
  const [isMarkerActive, setIsMarkerActive] = useState(false);

  const toggleTrack = () => {
    if (!isPlaying && audioRef.current) {
      setIsPlaying(true);
      audioRef.current.play();
    } else if (audioRef.current) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  };

  const updateProgress = (e: SyntheticEvent<HTMLAudioElement>) =>
    audioRef.current ? setCurrentTime(audioRef.current.currentTime) : null;

  useEffect(() => {
    const currentMarker = episode.markers.find(
      (marker: IMarker) =>
        currentTime &&
        marker.start <= currentTime &&
        currentTime < marker.start + marker.duration
    );
    if (currentMarker) {
      setMarker(currentMarker);
      setIsMarkerActive(true);
    } else setIsMarkerActive(false);
  }, [currentTime, episode.markers]);

  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(false);
  }, [episode]);

  return {
    isMarkerActive,
    marker,
    isPlaying,
    currentTime,
    toggleTrack,
    updateProgress,
  };
};
