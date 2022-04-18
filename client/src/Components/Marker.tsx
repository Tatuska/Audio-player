import React, { FC } from "react";
import { IMarker } from "../interfaces";

const Marker: FC<IMarker> = ({ content, type, link }) => (
  <div className="marker">
    {type === "image" && <img src={content} className="marker__image" alt="" />}
    {type === "text" && <p>{content}</p>}
    {type === "ad" && <a href={link}>{content}</a>}
  </div>
);

export default Marker;
