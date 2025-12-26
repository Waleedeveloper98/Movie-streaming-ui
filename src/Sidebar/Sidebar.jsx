import React from "react";
import SidebarLogo from "./SidebarLogo";
import {
  Bookmark,
  Clock,
  Compass,
  Download,
  FolderOpen,
  House,
  Layers,
  Logs,
  Play,
  Settings,
} from "lucide-react";
import SidebarNavItem from "./SidebarNav/SidebarNavItem";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  const navItems = [
    {
      text: "Home",
      icon: House,
    },
    {
      text: "Explore",
      icon: Compass,
    },
    {
      text: "Genres",
      icon: Layers,
    },
    {
      text: "Favourites",
      icon: Bookmark,
    },
    {
      text: "Continue Watching",
      icon: Play,
    },
    {
      text: "Recently Added",
      icon: Clock,
    },
    {
      text: "My Collections",
      icon: FolderOpen,
    },
    {
      text: "Downloads",
      icon: Download,
    },
    {
      text: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="w-[18%] md:w-60 h-screen md:max-h-200 lg:max-h-140  rounded-xl flex flex-col justify-between items-start text-white px-3 py-2 border-[1.5px] border-[var(--color-highlight)]/30 bg-[var(--color-highlight)]/10 backdrop-blur-2xl hidden md:flex">
      <div className="top-side w-full">
        <div className="top flex mb-8 justify-between items-center">
          <SidebarLogo />
          <Logs
            size={18}
            className="text-[var(--color-white)] cursor-pointer"
          />
        </div>

        {navItems.map((item, idx) => {
          return <SidebarNavItem key={idx} item={item} />;
        })}
      </div>

      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
