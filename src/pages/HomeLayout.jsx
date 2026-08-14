import { Footer, Navbar } from "../components";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Events from "./Events";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <main className="pt-[76px]">
        <Outlet />

        <Events />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
};

export default HomeLayout;
