export interface IEpisodeItem {
  id: string;
  audio: string;
  name: string;
  markers: IMarker[];
}
export interface IMarker {
  type: string;
  start: number;
  duration: number;
  content?: string;
  link?: string;
}

export interface IEpisode {
  selectEpisode: (_episode: IEpisodeItem, _index: number) => void;
  index: number;
  episode: IEpisodeItem;
}

export interface IPlayer {
  episode: IEpisodeItem;
  setNextEpisode: (_index: number) => void;
  setPreviousEpisode: (_index: number) => void;
  selectedEpisodeIndex: number;
}

export interface IAudioBar {
  duration: number;
  setNewTime: (_time: number) => void;
  currentTime: number;
}

export interface IButtonSet {
  setNextEpisode: (_index: number) => void;
  changeTrackSecond: (_isForward: boolean) => void;
  selectedEpisodeIndex: number;
  setPreviousEpisode: (_index: number) => void;
  isPlaying: boolean;
  toggleTrack: () => void;
}
