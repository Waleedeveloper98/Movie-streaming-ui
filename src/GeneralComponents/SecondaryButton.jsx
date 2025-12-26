import React from "react";

const SecondaryButton = ({ icon: Icon, text }) => {
  console.log(Icon);
  return (
    <button className="px-2 py-2 rounded-md bg-zinc-900/80 cursor-pointer">
      {Icon && <Icon size={22} />}
      {text && <p className="px-4 text-sm font-medium">{text}</p>}
    </button>
  );
};

export default SecondaryButton;
