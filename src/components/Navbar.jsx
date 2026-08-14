import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered, FaXmark, FaCalendarCheck } from "react-icons/fa6";

import { NavLinks } from "./NavLinks";
import logo from "../assets/logo.jpg";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.winter;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  // ============================
  // THEME
  // ============================

  const handleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;

    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ============================
  // CLOSE MOBILE MENU
  // Whenever the URL changes
  // ============================

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // ============================
  // CLOSE MENU
  // ============================

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          border-b
          border-base-300/50
          bg-base-100/90
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300
        "
      >
        <div
          className="
            navbar
            mx-auto
            min-h-[76px]
            max-w-7xl
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* ========================= */}
          {/* LOGO */}
          {/* ========================= */}

          <div className="navbar-start">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className="
                group
                flex
                items-center
                gap-3
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  shadow-lg
                  ring-2
                  ring-primary/20
                  transition-all
                  duration-300
                  group-hover:ring-primary
                "
              >
                <img
                  src={logo}
                  alt="Freedom Dance Studio"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              <div className="hidden sm:block">
                <h1
                  className="
                    text-xl
                    font-black
                    leading-none
                    tracking-tight
                    text-primary
                    transition-all
                    duration-300
                    group-hover:tracking-wide
                    sm:text-2xl
                  "
                >
                  Freedom
                </h1>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-base-content/60
                    sm:text-xs
                  "
                >
                  Dance Studio
                </p>
              </div>
            </NavLink>
          </div>

          {/* ========================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ========================= */}

          <div className="navbar-center hidden lg:flex">
            <NavLinks />
          </div>

          {/* ========================= */}
          {/* RIGHT SIDE */}
          {/* ========================= */}

          <div className="navbar-end gap-2 sm:gap-3">
            {/* THEME */}

            <button
              type="button"
              onClick={handleTheme}
              className="
                btn
                btn-circle
                btn-ghost
                relative
                overflow-hidden
                transition-all
                duration-300
                hover:bg-primary/10
                hover:text-primary
                hover:rotate-12
              "
              aria-label="Toggle theme"
            >
              {theme === themes.winter ? (
                <BsMoonFill className="h-4 w-4" />
              ) : (
                <BsSunFill className="h-5 w-5 text-warning" />
              )}
            </button>

            {/* DESKTOP CTA */}

            <NavLink
              to="/schedule"
              onClick={closeMobileMenu}
              className="
                btn
                btn-primary
                hidden
                gap-2
                rounded-xl
                shadow-lg
                shadow-primary/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-primary/30
                md:flex
              "
            >
              <FaCalendarCheck className="text-sm" />
              <span>Book a Class</span>
            </NavLink>

            {/* MOBILE BUTTON */}

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="
                btn
                btn-circle
                btn-ghost
                transition-all
                duration-300
                hover:bg-primary/10
                hover:text-primary
                lg:hidden
              "
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <FaXmark
                  className="
                    h-5
                    w-5
                    animate-[spin_0.25s_ease-out]
                  "
                />
              ) : (
                <FaBarsStaggered className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* ========================= */}
        {/* MOBILE MENU */}
        {/* ========================= */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            ease-out
            lg:hidden
            ${
              mobileOpen
                ? "max-h-[calc(100vh-76px)] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              border-t
              border-base-300/50
              bg-base-100/95
              px-4
              py-4
              shadow-xl
              backdrop-blur-xl
            "
          >
            <div
              className="
                mx-auto
                max-w-2xl
                rounded-2xl
                bg-base-200/60
                p-3
              "
            >
              <NavLinks mobileMenu />

              <div className="mt-4 border-t border-base-300 pt-4">
                <NavLink
                  to="/schedule"
                  onClick={closeMobileMenu}
                  className="
                    btn
                    btn-primary
                    btn-block
                    gap-2
                    rounded-xl
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >
                  <FaCalendarCheck />
                  Book Your First Class
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
