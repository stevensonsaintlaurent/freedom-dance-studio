import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
  // ============================

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-base-100/85
        backdrop-blur-xl
        border-b
        border-base-300/50
        shadow-sm
        transition-all
        duration-300
      "
    >
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[76px]">
        {/* ================================= */}
        {/* LOGO */}
        {/* ================================= */}

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
            {/* Logo */}

            <div
              className="
                relative
                flex
                items-center
                justify-center
                h-11
                w-11
                rounded-full
                overflow-hidden
                ring-2
                ring-primary/20
                group-hover:ring-primary
                transition-all
                duration-300
                shadow-lg
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

            {/* Brand */}

            <div className="hidden sm:block">
              <h1
                className="
                  text-xl
                  sm:text-2xl
                  font-black
                  tracking-tight
                  text-primary
                  leading-none
                  transition-all
                  duration-300
                  group-hover:tracking-wide
                "
              >
                Freedom
              </h1>

              <p
                className="
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-base-content/60
                  mt-1
                "
              >
                Dance Studio
              </p>
            </div>
          </NavLink>
        </div>

        {/* ================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================= */}

        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>

        {/* ================================= */}
        {/* RIGHT SIDE */}
        {/* ================================= */}

        <div className="navbar-end gap-2 sm:gap-3">
          {/* Theme Toggle */}

          <button
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
              <BsMoonFill
                className="
                  h-4
                  w-4
                  transition-all
                  duration-500
                "
              />
            ) : (
              <BsSunFill
                className="
                  h-5
                  w-5
                  text-warning
                  transition-all
                  duration-500
                "
              />
            )}
          </button>

          {/* Desktop CTA */}

          <NavLink
            to="/schedule"
            className="
              hidden
              md:flex
              btn
              btn-primary
              rounded-xl
              gap-2
              shadow-lg
              shadow-primary/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-primary/30
            "
          >
            <FaCalendarCheck className="text-sm" />

            <span>Book a Class</span>
          </NavLink>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              btn
              btn-circle
              btn-ghost
              lg:hidden
              transition-all
              duration-300
              hover:bg-primary/10
              hover:text-primary
            "
            aria-label="Toggle navigation"
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
              <FaBarsStaggered
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                "
              />
            )}
          </button>
        </div>
      </div>

      {/* ================================= */}
      {/* MOBILE MENU */}
      {/* ================================= */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-out
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
            backdrop-blur-xl
            px-4
            py-4
            shadow-xl
          "
        >
          <div
            className="
              max-w-2xl
              mx-auto
              rounded-2xl
              bg-base-200/60
              p-3
            "
          >
            <NavLinks mobileMenu={true} />

            {/* Mobile CTA */}

            <div className="mt-4 pt-4 border-t border-base-300">
              <NavLink
                to="/schedule"
                onClick={closeMobileMenu}
                className="
                  btn
                  btn-primary
                  btn-block
                  rounded-xl
                  gap-2
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
  );
};

export default Navbar;
