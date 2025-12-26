import React from "react";
import SearchBar from "./SearchBar";
import { BellDot } from "lucide-react";
import UserAvatar from "./UserAvatar";

const TopBar = () => {
  return (
    <div className="flex w-fit md:w-244 md:max-w-244 fixed z-50 justify-between items-center gap-4 md:gap-0 px-1 md:px-0">
      <SearchBar />
      <div className="right flex items-center gap-4">
        <BellDot
          size={28}
          className="bg-[var(--color-highlight)]/20 hidden md:block rounded-full p-1.5"
        />
        <UserAvatar />
      </div>
    </div>
  );
};

export default TopBar;
