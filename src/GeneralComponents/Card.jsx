import React from "react";
import Overlay from "./Overlay";
import MediaTitle from "../MainLayout/RecommendationSection/MediaCard/MediaTitle";
import MediaMeta from "../MainLayout/RecommendationSection/MediaCard/MediaMeta";

const Card = ({ show }) => {
  const { bannerImg, title, episode, time, width } = show;
  return (
    <div style={{backgroundImage: `url(${bannerImg})`}} className={`w-[90%] max-w-75 md:w-3/4 md:max-w-80 bg-white/20 h-45 max-h-45  rounded-xl overflow-hidden bg-cover bg-center flex justify-start items-end shrink-0 relative`}>
      <Overlay />
      <div className="content w-full relative flex flex-col gap-2 p-4">
        <MediaTitle title={title} />
        <MediaMeta episode={episode} time={time}/>
        <div className="progress w-full">
          <div className="outer relative w-full h-1.5 rounded-full bg-white/30">
            <div style={{width: `${width}%`}} className="inner absolute inset-0 bg-[var(--color-highlight)] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
