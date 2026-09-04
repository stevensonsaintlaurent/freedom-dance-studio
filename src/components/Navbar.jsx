import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBars, FaXmark, FaCalendarCheck } from "react-icons/fa6";

import { NavLinks } from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/logo.jpg";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  if (typeof window === "undefined") {
    return themes.winter;
  }

  return localStorage.getItem("theme") || themes.winter;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  // ----------------------------------------
  // THEME
  // ----------------------------------------

  const handleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;

    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  // ----------------------------------------
  // CLOSE MOBILE MENU WHEN ROUTE CHANGES
  // ----------------------------------------

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // ----------------------------------------
  // CLOSE MOBILE MENU
  // ----------------------------------------

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className="
        fixed
        inset-x-0
        top-0
        z-[100]
        w-full
        border-b
        border-base-300/60
        bg-base-100/95
        shadow-sm
        backdrop-blur-xl
      "
    >
      {/* ======================================
          MAIN NAVBAR
      ======================================= */}

      <div
        className="
          mx-auto
          flex
          h-[72px]
          w-full
          max-w-[1500px]
          items-center
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* ======================================
            LOGO
        ======================================= */}

        <div className="flex shrink-0 items-center">
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="
              group
              flex
              items-center
              gap-2.5
              transition-transform
              duration-200
              hover:scale-[1.02]
            "
          >
            <div
              className="
                h-10
                w-10
                shrink-0
                overflow-hidden
                rounded-full
                ring-2
                ring-primary/20
                shadow-md
                transition-all
                duration-200
                group-hover:ring-primary/50
              "
            >
              <img
                src={logo}
                alt="Freedom Dance Studio"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            <div className="hidden sm:block">
              <div
                className="
                  text-lg
                  font-black
                  leading-none
                  tracking-tight
                  text-primary
                  lg:text-xl
                "
              >
                Freedom
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-base-content/60
                  lg:text-[10px]
                "
              >
                Dance Studio
              </div>
            </div>
          </NavLink>
        </div>

        {/* ======================================
            DESKTOP NAVIGATION

            IMPORTANT:
            lg starts the navigation only when
            there is enough space.
        ======================================= */}

        <div className="ml-auto hidden lg:flex">
          <NavLinks />
        </div>

        {/* ======================================
            RIGHT SIDE
        ======================================= */}

        <div
          className="
            ml-auto
            flex
            shrink-0
            items-center
            gap-1.5
            sm:gap-2
            lg:ml-4
            xl:ml-6
          "
        >
          {/* LANGUAGE */}

          <LanguageSwitcher />

          {/* THEME */}

          <button
            type="button"
            onClick={handleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="
              btn
              btn-circle
              btn-ghost
              btn-sm
              h-10
              min-h-10
              w-10
              transition-all
              duration-200
              hover:bg-primary/10
              hover:text-primary
            "
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
              h-10
              min-h-10
              gap-2
              rounded-xl
              px-4
              text-sm
              font-bold
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-lg
              xl:flex
            "
          >
            <FaCalendarCheck className="text-sm" />
            <span>Book a Class</span>
          </NavLink>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            className="
              btn
              btn-circle
              btn-ghost
              btn-sm
              h-10
              min-h-10
              w-10
              transition-all
              duration-200
              hover:bg-primary/10
              hover:text-primary
              lg:hidden
            "
          >
            {mobileOpen ? (
              <FaXmark className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* ======================================
          MOBILE MENU
      ======================================= */}

      <div
        className={`
          overflow-hidden
          border-t
          border-base-300/50
          bg-base-100
          transition-all
          duration-300
          lg:hidden
          ${
            mobileOpen
              ? "max-h-[calc(100vh-72px)] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            max-h-[calc(100vh-72px)]
            overflow-y-auto
            px-4
            py-4
            sm:px-6
          "
        >
          <div
            className="
              mx-auto
              max-w-xl
              rounded-2xl
              border
              border-base-300/50
              bg-base-200/40
              p-2
            "
          >
            <NavLinks mobileMenu onNavigate={closeMobileMenu} />

            {/* MOBILE CTA */}

            <div
              className="
                mt-2
                border-t
                border-base-300/60
                pt-3
              "
            >
              <NavLink
                to="/schedule"
                onClick={closeMobileMenu}
                className="
                  btn
                  btn-primary
                  btn-block
                  h-12
                  min-h-12
                  gap-2
                  rounded-xl
                  font-bold
                  shadow-md
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
