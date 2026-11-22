import { Footer, Navbar } from "../components";
import { Outlet, ScrollRestoration } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      {/* Main navigation */}
      <Navbar />

      {/* Page content */}
      <main id="main-content" className="flex-1 pt-[76px]">
        <Outlet />
      </main>

      {/* Global footer */}
      <Footer />

      {/* Restore scroll position between pages */}
      <ScrollRestoration />
    </div>
  );
};

export default HomeLayout;
