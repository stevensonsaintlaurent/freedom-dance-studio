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

/* =====================================================
   MAIN NAVIGATION
===================================================== */

const mainLinks = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: Home,
  },

  {
    id: 2,
    url: "/studiopricing",
    text: "Studio Rental",
    icon: Building2,
  },

  {
    id: 3,
    url: "/events",
    text: "Upcoming Events",
    icon: PartyPopper,
  },

  // Classes dropdown
  {
    id: 4,
    url: "#",
    text: "Classes",
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
    text: "Freedom Dance Classes",
    description: "Classes offered by Freedom Dance Studio",
  },
  {
    id: 2,
    url: "/independent",
    text: "Classes Hosted at Freedom",
    description: "Classes from independent instructors",
  },
];

/* =====================================================
   MORE NAVIGATION
===================================================== */

const moreLinks = [
  {
    id: 5,
    url: "/schedule",
    text: "Schedule",
    icon: CalendarDays,
  },
  {
    id: 6,
    url: "/about",
    text: "About",
    icon: Info,
  },
  {
    id: 7,
    url: "/membership",
    text: "Prices",
    icon: DollarSign,
  },
  {
    id: 8,
    url: "/teachers",
    text: "Teachers",
    icon: Users,
  },
  {
    id: 9,
    url: "/reviews",
    text: "Testimonials",
    icon: Star,
  },
  {
    id: 10,
    url: "/gallery",
    text: "Gallery",
    icon: Images,
  },
  {
    id: 11,
    url: "/contact",
    text: "Contact",
    icon: Mail,
  },
];

/* =====================================================
   COMPONENT
===================================================== */

export const NavLinks = ({ mobileMenu = false, footer = false }) => {
  const location = useLocation();

  const isClassesActive =
    location.pathname === "/classes" || location.pathname === "/independent";

  /* =====================================================
     FOOTER NAVIGATION
  ===================================================== */

  if (footer) {
    return (
      <nav className="w-full" aria-label="Footer navigation">
        <div className="grid grid-cols-1 gap-1">
          {/* Main Links */}
          {mainLinks.map((link) => {
            const Icon = link.icon;

            /* ==========================
               Classes Dropdown
            ========================== */

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

                    <span>Classes</span>
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
                        <div>{classLink.text}</div>

                        <div className="text-xs opacity-60 mt-0.5">
                          {classLink.description}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            /* ==========================
               Normal Main Link
            ========================== */

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
                  ease-out
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
                      <Icon
                        size={17}
                        strokeWidth={2}
                        className="shrink-0 transition-all duration-300 group-hover:scale-110"
                      />

                      <span className="truncate">{link.text}</span>
                    </span>

                    <span
                      className={`
                        shrink-0
                        text-primary
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
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

          {/* ==========================
              More Links
          ========================== */}

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
                  ease-out
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
                      <Icon
                        size={17}
                        strokeWidth={2}
                        className="shrink-0 transition-all duration-300 group-hover:scale-110"
                      />

                      <span className="truncate">{link.text}</span>
                    </span>

                    <span
                      className={`
                        shrink-0
                        text-primary
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
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
          lg:max-h-none
          lg:overflow-visible
          lg:overscroll-auto
          lg:pb-0
          lg:pr-0
        "
        aria-label="Mobile navigation"
      >
        {/* Main Links */}
        {mainLinks.map((link) => {
          const Icon = link.icon;

          /* ==========================
             Classes Dropdown
          ========================== */

          if (link.dropdown) {
            return (
              <div key={link.id} className="w-full">
                <div
                  className={`
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
                    ${
                      isClassesActive
                        ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                        : "text-base-content"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <Icon size={20} />

                    <span>Classes</span>
                  </div>

                  <ChevronDown size={18} />
                </div>

                <div className="ml-5 mt-1 pl-5 border-l border-base-content/10 space-y-1">
                  {classLinks.map((classLink) => (
                    <NavLink
                      key={classLink.id}
                      to={classLink.url}
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
                      <div className="whitespace-normal break-words leading-tight">
                        {classLink.text}
                      </div>

                      <div className="text-xs opacity-60 mt-0.5 whitespace-normal break-words leading-relaxed">
                        {classLink.description}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }

          /* ==========================
             Normal Mobile Link
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
              <Icon
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:scale-110"
              />

              <span className="min-w-0 flex-1 whitespace-normal break-words leading-tight">
                {link.text}
              </span>
            </NavLink>
          );
        })}

        {/* Divider */}
        <div className="flex items-center gap-3 my-3 px-4">
          <div className="h-px flex-1 bg-base-content/10" />

          <span className="text-xs uppercase tracking-widest text-base-content/40">
            More
          </span>

          <div className="h-px flex-1 bg-base-content/10" />
        </div>

        {/* More Links */}
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
              <Icon
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:scale-110"
              />

              <span className="min-w-0 flex-1 whitespace-normal break-words leading-tight">
                {link.text}
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
      {/* Main Links */}
      {mainLinks.map((link) => {
        const Icon = link.icon;

        /* ==========================
           Classes Dropdown
        ========================== */

        if (link.dropdown) {
          return (
            <div key={link.id} className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className={`
                  group
                  relative
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
                  ease-out
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

                <span>Classes</span>

                <ChevronDown
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </div>

              <ul
                tabIndex={0}
                className="
                  dropdown-content
                  menu
                  mt-3
                  w-80
                  rounded-2xl
                  bg-base-100
                  p-2
                  shadow-2xl
                  border
                  border-base-200
                  z-[100]
                "
              >
                {classLinks.map((classLink) => (
                  <li key={classLink.id}>
                    <NavLink
                      to={classLink.url}
                      className={({ isActive }) =>
                        `
                        group
                        flex
                        flex-col
                        items-start
                        gap-0.5
                        rounded-xl
                        px-4
                        py-3
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
                      <span className="font-semibold">{classLink.text}</span>

                      <span className="text-xs opacity-60 group-hover:opacity-80">
                        {classLink.description}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        /* ==========================
           Normal Desktop Link
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
              capitalize
              transition-all
              duration-300
              ease-out
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
              {link.text}
            </span>
          </NavLink>
        );
      })}

      {/* =====================================================
          MORE DROPDOWN
      ===================================================== */}

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

          <span>More</span>

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
                    {link.text}
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
