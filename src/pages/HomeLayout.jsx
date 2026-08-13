import { Footer, Navbar } from "../components";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Events from "./Events";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute left-0 top-0 -z-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-[700px] -z-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />

        {/* HOME / PAGE CONTENT */}
        <div className="relative z-10">
          <Outlet />
        </div>

        {/* EVENTS */}
        <div className="relative z-10">
          <Events />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* RESTORE SCROLL POSITION */}
      <ScrollRestoration />
    </div>
  );
};

export default HomeLayout;
