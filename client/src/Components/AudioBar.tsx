import React, { FC, useState, useEffect, MouseEvent } from "react";
import { IAudioBar } from "../interfaces";

const AudioBar: FC<IAudioBar> = ({ duration = 0, setNewTime, currentTime }) => {
  const [progressTime, setProgressTime] = useState(0);

  const handleProgressDrag = (e: MouseEvent<HTMLProgressElement>) => {
    const newTime = calcClickedTime(e);
    setProgressTime(newTime);
    setNewTime(newTime);
  };

  const calcClickedTime = (e: MouseEvent) => {
    const clickPositionInPage = e.pageX;
    const target = e.target as HTMLProgressElement;
    const barStart = target.offsetLeft + window.scrollX;
    const barWidth = target.offsetWidth;
    const clickedSecond = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickedSecond;
  };

  useEffect(() => {
    setProgressTime(currentTime);
  }, [currentTime]);

  return (
    <div className="audio-bar">
      <div className="audio-bar__details">
        {progressTime && <span>{Math.round(progressTime)}</span>}
        {!isNaN(duration) ? <span>{Math.round(duration)}</span> : null}
      </div>
      <progress
        value={progressTime}
        max={!isNaN(duration) ? duration : 0}
        onMouseDown={(e) => handleProgressDrag(e)}
        className="audio-bar__progress"
      ></progress>
    </div>
  );
};

export default AudioBar;
