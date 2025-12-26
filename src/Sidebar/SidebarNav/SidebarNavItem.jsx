import { House } from "lucide-react";
import React from "react";

const SidebarNavItem = ({ item }) => {
  return (
    <div className="text-[var(--color-white)] flex items-center gap-4 my-4 nth-[6]:pt-8 nth-[5]:pb-4 nth-[6]:border-t-[1.2px] border-t-[var(--color-highlight)]/30 nth-last-1:border-t-[1.2px] nth-last-1:pt-6 nth-last-2:pb-2 cursor-pointer">
      <item.icon size={18} />
      <h2 className="text-xs font-light">{item.text}</h2>
    </div>
  );
};

export default SidebarNavItem;
