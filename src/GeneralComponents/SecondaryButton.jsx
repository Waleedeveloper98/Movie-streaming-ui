import React from "react";

const SecondaryButton = ({ icon: Icon, text }) => {
  console.log(Icon);
  return (
    <button className="p-2 rounded-md bg-zinc-900/80 cursor-pointer">
      {Icon && <Icon size={22}/>}
      {text && <p className="px-2 md:px-4 text-xs md:text-sm font-medium">{text}</p>}
    </button>
  );
};

export default SecondaryButton;
