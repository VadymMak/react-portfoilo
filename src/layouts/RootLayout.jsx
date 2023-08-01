import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";

import styled from "./RootLayout.module.scss";

const RootLayout = () => {
  return (
    <div className={styled.container}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
