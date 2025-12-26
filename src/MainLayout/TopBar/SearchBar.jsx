import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="bgBorder md:w-100 flex items-center rounded-xl px-4 py-2 gap-3">
      <Search size={18} className="text-[var(--color-white)]" />
      <input
        className="outline-none flex-1 border-none placeholder:text-xs"
        type="text"
        placeholder="Search for films, directors, or actors..."
      />
    </div>
  );
};

export default SearchBar;
