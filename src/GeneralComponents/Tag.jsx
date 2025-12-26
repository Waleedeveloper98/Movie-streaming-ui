import React from "react";

const Tag = ({ text }) => {
  return (
    <div className="px-4 py-2 rounded-full bg-white/20 w-fit backdrop-blur-xs text-xs">
      {text}
    </div>
  );
};

export default Tag;
