import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div>
      
      <Header />

      <div style={{ paddingTop: "5rem" }}>
        <Outlet />
      </div>

    </div>
  );
};

export default MasterLayout;
