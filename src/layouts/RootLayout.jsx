import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
