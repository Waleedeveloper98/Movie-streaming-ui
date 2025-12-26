import React from "react";
import Overlay from "./Overlay";
import MediaTitle from "../MainLayout/RecommendationSection/MediaCard/MediaTitle";
import MediaMeta from "../MainLayout/RecommendationSection/MediaCard/MediaMeta";

const Card = () => {
  return (
    <div className="w-1/3 max-w-80 bg-white/20 h-45 max-h-45  rounded-xl overflow-hidden bg-[url(./assets/images/card1.webp)] bg-cover bg-center flex justify-start items-end shrink-0 relative">
      <Overlay />
      <div className="content w-full relative flex flex-col gap-2 p-4">
        <MediaTitle title={"Midnight Mischief Squad"} />
        <MediaMeta />
        <div className="progress w-full">
          <div className="outer relative w-full h-1.5 rounded-full bg-white/30">
            <div className="inner absolute inset-0 bg-[var(--color-highlight)] w-2/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
