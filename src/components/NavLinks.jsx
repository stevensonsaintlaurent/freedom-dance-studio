import { NavLink, useLocation } from "react-router-dom";

import {
  ChevronDown,
  Home,
  Info,
  Music2,
  CalendarDays,
  Images,
  MoreHorizontal,
  DollarSign,
  Building2,
  Users,
  Star,
  Mail,
  PartyPopper,
} from "lucide-react";

import { useState } from "react";
import { useTranslation } from "react-i18next";

/* =====================================================
   MAIN NAVIGATION
===================================================== */

const mainLinks = [
  {
    id: 1,
    url: "/",
    textKey: "nav.home",
    icon: Home,
  },

  {
    id: 2,
    url: "/studiopricing",
    textKey: "nav.studioRental",
    icon: Building2,
  },

  {
    id: 3,
    url: "/events",
    textKey: "nav.upcomingEvents",
    icon: PartyPopper,
  },

  {
    id: 4,
    url: "#",
    textKey: "nav.classes",
    icon: Music2,
    dropdown: true,
  },
];

/* =====================================================
   CLASS OPTIONS
===================================================== */

const classLinks = [
  {
    id: 1,
    url: "/classes",
    textKey: "nav.freedomClasses",
    descriptionKey: "nav.freedomClassesDescription",
  },

  {
    id: 2,
    url: "/independent",
    textKey: "nav.hostedClasses",
    descriptionKey: "nav.hostedClassesDescription",
  },
];

/* =====================================================
   MORE NAVIGATION
===================================================== */

const moreLinks = [
  {
    id: 5,
    url: "/schedule",
    textKey: "nav.schedule",
    icon: CalendarDays,
  },

  {
    id: 6,
    url: "/about",
    textKey: "nav.about",
    icon: Info,
  },

  {
    id: 7,
    url: "/membership",
    textKey: "nav.prices",
    icon: DollarSign,
  },

  {
    id: 8,
    url: "/teachers",
    textKey: "nav.teachers",
    icon: Users,
  },

  {
    id: 9,
    url: "/reviews",
    textKey: "nav.testimonials",
    icon: Star,
  },

  {
    id: 10,
    url: "/gallery",
    textKey: "nav.gallery",
    icon: Images,
  },

  {
    id: 11,
    url: "/contact",
    textKey: "nav.contact",
    icon: Mail,
  },
];

/* =====================================================
   COMPONENT
===================================================== */

export const NavLinks = ({ mobileMenu = false, footer = false }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const [classesOpen, setClassesOpen] = useState(false);

  const isClassesActive =
    location.pathname === "/classes" || location.pathname === "/independent";

  /* =====================================================
     FOOTER NAVIGATION
  ===================================================== */

  if (footer) {
    return (
      <nav className="w-full" aria-label={t("nav.footerNavigation")}>
        <div className="grid grid-cols-1 gap-1">
          {mainLinks.map((link) => {
            const Icon = link.icon;

            if (link.dropdown) {
              return (
                <div key={link.id} className="w-full">
                  <div
                    className={`
                      flex
                      items-center
                      gap-3
                      w-full
                      rounded-xl
                      px-3
                      sm:px-4
                      py-2.5
                      sm:py-3
                      text-sm
                      sm:text-base
                      font-medium
                      ${
                        isClassesActive
                          ? "bg-primary/15 text-primary"
                          : "text-white/65"
                      }
                    `}
                  >
                    <Icon size={17} />

                    <span>{t("nav.classes")}</span>
                  </div>

                  <div className="ml-8 mt-1 space-y-1">
                    {classLinks.map((classLink) => (
                      <NavLink
                        key={classLink.id}
                        to={classLink.url}
                        className={({ isActive }) =>
                          `
                          block
                          rounded-lg
                          px-3
                          py-2
                          text-sm
                          transition-all
                          duration-200
                          ${
                            isActive
                              ? "bg-primary/15 text-primary"
                              : "text-white/50 hover:bg-white/5 hover:text-primary"
                          }
                        `
                        }
                      >
                        <div>{t(classLink.textKey)}</div>

                        <div className="text-xs opacity-60 mt-0.5">
                          {t(classLink.descriptionKey)}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.id}
                to={link.url}
                className={({ isActive }) =>
                  `
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-3
                  sm:px-4
                  py-2.5
                  sm:py-3
                  text-sm
                  sm:text-base
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-primary/15 text-primary translate-x-1"
                      : "text-white/65 hover:bg-white/5 hover:text-primary hover:translate-x-1"
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-3 min-w-0">
                      <Icon size={17} className="shrink-0" />

                      <span className="truncate">{t(link.textKey)}</span>
                    </span>

                    <span
                      className={`
                        shrink-0
                        text-primary
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }
                      `}
                    >
                      →
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}

          {moreLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.id}
                to={link.url}
                className={({ isActive }) =>
                  `
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-3
                  sm:px-4
                  py-2.5
                  sm:py-3
                  text-sm
                  sm:text-base
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-primary/15 text-primary translate-x-1"
                      : "text-white/65 hover:bg-white/5 hover:text-primary hover:translate-x-1"
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-3 min-w-0">
                      <Icon size={17} className="shrink-0" />

                      <span className="truncate">{t(link.textKey)}</span>
                    </span>

                    <span
                      className={`
                        shrink-0
                        text-primary
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }
                      `}
                    >
                      →
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>
    );
  }

  /* =====================================================
     MOBILE NAVIGATION
  ===================================================== */

  if (mobileMenu) {
    return (
      <nav
        className="
          flex
          flex-col
          w-full
          gap-1.5
          max-h-[calc(100dvh-5rem)]
          overflow-y-auto
          overscroll-contain
          pb-4
          pr-1
        "
        aria-label={t("nav.mobileNavigation")}
      >
        {/* ============================
            MAIN LINKS
        ============================ */}

        {mainLinks.map((link) => {
          const Icon = link.icon;

          /* ==========================
             CLASSES
          ========================== */

          if (link.dropdown) {
            return (
              <div key={link.id} className="w-full">
                <button
                  type="button"
                  onClick={() => setClassesOpen((previous) => !previous)}
                  aria-expanded={classesOpen}
                  aria-controls="mobile-classes-menu"
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    gap-4
                    w-full
                    rounded-2xl
                    px-5
                    py-3.5
                    min-h-[52px]
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      isClassesActive
                        ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                        : "text-base-content hover:bg-base-200 hover:text-primary"
                    }
                  `}
                >
                  <span className="flex items-center gap-4">
                    <Icon size={20} className="shrink-0" />

                    <span>{t("nav.classes")}</span>
                  </span>

                  <ChevronDown
                    size={18}
                    className={`
                      shrink-0
                      transition-transform
                      duration-300
                      ${classesOpen ? "rotate-180" : "rotate-0"}
                    `}
                  />
                </button>

                {/* CLASS OPTIONS */}

                <div
                  id="mobile-classes-menu"
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ease-out
                    ${
                      classesOpen
                        ? "max-h-60 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="ml-5 pl-5 border-l border-base-content/10 space-y-1">
                    {classLinks.map((classLink) => (
                      <NavLink
                        key={classLink.id}
                        to={classLink.url}
                        onClick={() => setClassesOpen(false)}
                        className={({ isActive }) =>
                          `
                          block
                          rounded-xl
                          px-4
                          py-3
                          text-sm
                          font-medium
                          transition-all
                          duration-200
                          ${
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-base-content/60 hover:bg-base-200 hover:text-primary"
                          }
                        `
                        }
                      >
                        <div className="leading-tight">
                          {t(classLink.textKey)}
                        </div>

                        <div className="mt-1 text-xs opacity-60 leading-relaxed">
                          {t(classLink.descriptionKey)}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          /* ==========================
             NORMAL MOBILE LINK
          ========================== */

          return (
            <NavLink
              key={link.id}
              to={link.url}
              className={({ isActive }) =>
                `
                group
                flex
                items-center
                gap-4
                w-full
                rounded-2xl
                px-5
                py-3.5
                min-h-[52px]
                font-semibold
                transition-all
                duration-300
                active:scale-[0.98]
                ${
                  isActive
                    ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                    : "text-base-content hover:bg-base-200 hover:text-primary hover:translate-x-1"
                }
              `
              }
            >
              <Icon size={20} className="shrink-0" />

              <span className="min-w-0 flex-1 whitespace-normal break-words leading-tight">
                {t(link.textKey)}
              </span>
            </NavLink>
          );
        })}

        {/* ============================
            DIVIDER
        ============================ */}

        <div className="flex items-center gap-3 my-3 px-4">
          <div className="h-px flex-1 bg-base-content/10" />

          <span className="text-xs uppercase tracking-widest text-base-content/40">
            {t("nav.more")}
          </span>

          <div className="h-px flex-1 bg-base-content/10" />
        </div>

        {/* ============================
            MORE LINKS
        ============================ */}

        {moreLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.id}
              to={link.url}
              className={({ isActive }) =>
                `
                group
                flex
                items-center
                gap-4
                w-full
                rounded-2xl
                px-5
                py-3.5
                min-h-[52px]
                font-semibold
                transition-all
                duration-300
                active:scale-[0.98]
                ${
                  isActive
                    ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                    : "text-base-content hover:bg-base-200 hover:text-primary hover:translate-x-1"
                }
              `
              }
            >
              <Icon size={20} className="shrink-0" />

              <span className="min-w-0 flex-1 whitespace-normal break-words leading-tight">
                {t(link.textKey)}
              </span>
            </NavLink>
          );
        })}
      </nav>
    );
  }

  /* =====================================================
     DESKTOP NAVIGATION
  ===================================================== */

  return (
    <div className="hidden lg:flex items-center gap-1">
      {/* ============================
          MAIN LINKS
      ============================ */}

      {mainLinks.map((link) => {
        const Icon = link.icon;

        {
          /* DESKTOP CLASSES DROPDOWN */
        }
        if (link.dropdown) {
          return (
            <div key={link.id} className="relative group">
              {/* CLASSES BUTTON */}
              <button
                type="button"
                className={`
          flex
          items-center
          gap-2
          rounded-xl
          px-4
          py-2.5
          font-semibold
          cursor-pointer
          transition-all
          duration-300
          hover:-translate-y-0.5
          ${
            isClassesActive
              ? "bg-primary text-primary-content shadow-lg"
              : "text-base-content hover:bg-base-200 hover:text-primary"
          }
        `}
              >
                <Icon
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span>{t("nav.classes")}</span>

                <ChevronDown
                  size={15}
                  className="
            transition-transform
            duration-300
            group-hover:rotate-180
          "
                />
              </button>

              {/* DROPDOWN */}
              <div
                className="
          absolute
          top-full
          right-0
          pt-3
          w-80
          z-[100]
          invisible
          opacity-0
          translate-y-2
          pointer-events-none
          group-hover:visible
          group-hover:opacity-100
          group-hover:translate-y-0
          group-hover:pointer-events-auto
          transition-all
          duration-200
        "
              >
                <div
                  className="
            bg-base-100
            rounded-2xl
            shadow-2xl
            border
            border-base-200
            p-2
          "
                >
                  {classLinks.map((classLink) => (
                    <NavLink
                      key={classLink.id}
                      to={classLink.url}
                      className={({ isActive }) => `
                block
                rounded-xl
                px-4
                py-3
                transition-all
                duration-200
                ${
                  isActive
                    ? "bg-primary text-primary-content"
                    : "text-base-content hover:bg-primary/10 hover:text-primary"
                }
              `}
                    >
                      <div className="font-semibold">
                        {t(classLink.textKey)}
                      </div>

                      <div className="text-xs opacity-60 mt-1">
                        {t(classLink.descriptionKey)}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        /* ==========================
           NORMAL DESKTOP LINK
        ========================== */

        return (
          <NavLink
            key={link.id}
            to={link.url}
            className={({ isActive }) =>
              `
              group
              relative
              flex
              items-center
              gap-2
              rounded-xl
              px-4
              py-2.5
              font-semibold
              transition-all
              duration-300
              hover:-translate-y-0.5
              ${
                isActive
                  ? "bg-primary text-primary-content shadow-lg"
                  : "text-base-content hover:bg-base-200 hover:text-primary"
              }
            `
            }
          >
            <Icon
              size={17}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span className="min-w-0 flex-1 whitespace-normal break-words leading-tight">
              {t(link.textKey)}
            </span>
          </NavLink>
        );
      })}

      {/* ============================
          MORE DROPDOWN
      ============================ */}

      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            px-4
            py-2.5
            font-semibold
            cursor-pointer
            transition-all
            duration-300
            hover:bg-base-200
            hover:text-primary
            hover:-translate-y-0.5
          "
        >
          <MoreHorizontal
            size={18}
            className="transition-transform duration-300 group-hover:rotate-12"
          />

          <span>{t("nav.more")}</span>

          <ChevronDown
            size={16}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </div>

        <ul
          tabIndex={0}
          className="
            dropdown-content
            menu
            mt-3
            w-60
            rounded-2xl
            bg-base-100
            p-2
            shadow-2xl
            border
            border-base-200
            z-[100]
          "
        >
          {moreLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.id}>
                <NavLink
                  to={link.url}
                  className={({ isActive }) =>
                    `
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-primary text-primary-content"
                        : "hover:bg-primary/10 hover:text-primary"
                    }
                  `
                  }
                >
                  <Icon
                    size={17}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />

                  <span className="min-w-0 flex-1 whitespace-normal break-words leading-tight">
                    {t(link.textKey)}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
