import { Play } from "lucide-react";
import React from "react";

const PrimaryButton = ({bgcolor}) => {
  return (
    <button
      className={`text-xs md:text-sm text-black px-3 py-1.5 md:px-4 md:py-2 rounded-md font-semibold cursor-pointer flex items-center gap-1 ${bgcolor}`}
    >
      <Play fill="black" stroke="none"/> Watch Now
    </button>
  );
};

export default PrimaryButton;
