import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainLayout from "../MainLayout/MainLayout";

const FullLayout = () => {
  return (
    <div className="w-full max-w-7xl h-screen min-h-screen flex p-4">
      <Sidebar />
      <MainLayout />
    </div>
  );
};

export default FullLayout;
