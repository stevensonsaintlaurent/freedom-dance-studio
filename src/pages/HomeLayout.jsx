import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />

      <section className="align-element py-20">
        <Outlet />
      </section>

      <Footer />
    </>
  );
};

export default HomeLayout;
