import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMobileMenu(false);
    }, 10000);
  });
  return (
    <section>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default HomeLayout;
