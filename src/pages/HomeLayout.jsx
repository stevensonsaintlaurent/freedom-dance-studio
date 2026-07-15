import React from "react";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <section>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default HomeLayout;
