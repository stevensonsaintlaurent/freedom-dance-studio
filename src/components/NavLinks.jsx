import { NavLink } from "react-router-dom";
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

const mainLinks = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: Home,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: Info,
  },
  {
    id: 3,
    url: "/classes",
    text: "Classes",
    icon: Music2,
  },
  {
    id: 4,
    url: "/schedule",
    text: "Schedule",
    icon: CalendarDays,
  },
  {
    id: 5,
    url: "/events",
    text: "Events",
    icon: PartyPopper,
  },
  {
    id: 6,
    url: "/gallery",
    text: "Gallery",
    icon: Images,
  },
];

const moreLinks = [
  {
    id: 6,
    url: "/membership",
    text: "Prices",
    icon: DollarSign,
  },
  {
    id: 7,
    url: "/rental",
    text: "Studio Rental",
    icon: Building2,
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
    url: "/contact",
    text: "Contact",
    icon: Mail,
  },
];

export const NavLinks = ({ mobileMenu = false, footer = false }) => {
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
                      ? `
                        bg-primary/15
                        text-primary
                        translate-x-1
                      `
                      : `
                        text-white/65
                        hover:bg-white/5
                        hover:text-primary
                        hover:translate-x-1
                      `
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Left side */}

                    <span className="flex items-center gap-3 min-w-0">
                      <Icon
                        size={17}
                        strokeWidth={2}
                        className="
                          shrink-0
                          transition-all
                          duration-300
                          group-hover:scale-110
                        "
                      />

                      <span className="truncate">{link.text}</span>
                    </span>

                    {/* Arrow */}

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
                      ? `
                        bg-primary/15
                        text-primary
                        translate-x-1
                      `
                      : `
                        text-white/65
                        hover:bg-white/5
                        hover:text-primary
                        hover:translate-x-1
                      `
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
                        className="
                          shrink-0
                          transition-all
                          duration-300
                          group-hover:scale-110
                        "
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
        className="flex flex-col w-full gap-1.5"
        aria-label="Mobile navigation"
      >
        {mainLinks.map((link) => {
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
                    ? `
                      bg-primary
                      text-primary-content
                      shadow-lg
                      shadow-primary/20
                    `
                    : `
                      text-base-content
                      hover:bg-base-200
                      hover:text-primary
                      hover:translate-x-1
                    `
                }
              `
              }
            >
              <Icon
                size={20}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <span>{link.text}</span>
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
                    ? `
                      bg-primary
                      text-primary-content
                      shadow-lg
                      shadow-primary/20
                    `
                    : `
                      text-base-content
                      hover:bg-base-200
                      hover:text-primary
                      hover:translate-x-1
                    `
                }
              `
              }
            >
              <Icon
                size={20}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <span>{link.text}</span>
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
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span>{link.text}</span>
          </NavLink>
        );
      })}

      {/* More Dropdown */}

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
            className="
              transition-transform
              duration-300
              group-hover:rotate-12
            "
          />

          <span>More</span>

          <ChevronDown
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-y-0.5
            "
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
                    className="
                      transition-transform
                      duration-200
                      group-hover:scale-110
                    "
                  />

                  <span>{link.text}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
