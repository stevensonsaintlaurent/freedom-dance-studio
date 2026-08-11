import { Footer, Navbar } from "../components";
import { Outlet, ScrollRestoration } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />

      <section className=" py-2">
        <Outlet />
      </section>

      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default HomeLayout;
