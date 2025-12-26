import React from "react";
import Tag from "../../GeneralComponents/Tag";
import FeaturedTags from "./FeaturedTags";
import FeaturedContent from "./FeaturedContent";
import Overlay from "../../GeneralComponents/Overlay";
import FeaturedActions from "./FeaturedActions";

const FeaturedSection = () => {
  return (
    <div id="featuredSection" className="relative  w-full rounded-2xl overflow-hidden bg-[url(./assets/images/banner.webp)] bg-cover bg-center">
      <Overlay />
      <div className="main-content relative flex flex-col justify-between  py-8 px-10 gap-4">
        <Tag text={"🔥 Now Trending"} />
        <div className="flex flex-col justify-between items-start gap-4">
          <FeaturedTags />
          <FeaturedContent />
          <FeaturedActions />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
