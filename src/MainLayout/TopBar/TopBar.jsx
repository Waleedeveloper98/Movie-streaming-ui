import React from "react";
import SearchBar from "./SearchBar";
import { BellDot } from "lucide-react";
import UserAvatar from "./UserAvatar";

const TopBar = () => {
  return (
    <div className="flex w-244 max-w-244 fixed z-50 justify-between items-center">
      <SearchBar />
      <div className="right flex items-center gap-4">
        <BellDot
          size={28}
          className="bg-[var(--color-highlight)]/20 rounded-full p-1.5"
        />
        <UserAvatar />
      </div>
    </div>
  );
};

export default TopBar;
