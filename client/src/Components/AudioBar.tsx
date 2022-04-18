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
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  useEffect(() => {
    setProgressTime(currentTime);
  }, [currentTime]);

  return (
    <div>
      {progressTime && <span>{Math.round(progressTime)}</span>}
      <progress
        value={progressTime}
        max={!isNaN(duration) ? duration : 0}
        onMouseDown={(e) => handleProgressDrag(e)}
        className="audio-bar"
      ></progress>
      {!isNaN(duration) ? <span>{duration}</span> : null}
    </div>
  );
};

export default AudioBar;
