import React from "react";
import TopBar from "./TopBar/TopBar";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import ContentList from "./WatchingSection/ContentList";

const MainLayout = () => {
  return (
    <div className="mainLayout w-full md:w-4/5 relative overflow-y-auto text-white">
      <TopBar />
      <div className="mainLayout w-full min-h-screen mt-16 flex flex-col gap-8 overflow-y-auto  text-white bg-[var(--color-primary)] rounded-xl p-3 md:p-2 md:px-0">
        <FeaturedSection />
        <div className="content-container flex flex-col gap-6">
          <ContentList />
          <ContentList />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
