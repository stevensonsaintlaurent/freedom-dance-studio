import { Footer, Navbar } from "../components";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Events from "./Events";

const HomeLayout = () => {
  return (
    <>
      <Navbar />

      <section className=" py-2">
        <Outlet />
      </section>
      <Events />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default HomeLayout;
