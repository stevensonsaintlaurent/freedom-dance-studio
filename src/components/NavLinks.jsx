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
    url: "about",
    text: "About",
    icon: Info,
  },
  {
    id: 3,
    url: "classes",
    text: "Classes",
    icon: Music2,
  },
  {
    id: 4,
    url: "schedule",
    text: "Schedule",
    icon: CalendarDays,
  },
  {
    id: 5,
    url: "gallery",
    text: "Gallery",
    icon: Images,
  },
];

const moreLinks = [
  {
    id: 6,
    url: "membership",
    text: "Prices",
    icon: DollarSign,
  },
  {
    id: 7,
    url: "rental",
    text: "Studio Rental",
    icon: Building2,
  },
  {
    id: 8,
    url: "teachers",
    text: "Teachers",
    icon: Users,
  },
  {
    id: 9,
    url: "reviews",
    text: "Testimonials",
    icon: Star,
  },
  {
    id: 10,
    url: "contact",
    text: "Contact",
    icon: Mail,
  },
];

export const NavLinks = ({ mobileMenu = false }) => {
  return (
    <>
      {/* ========================= */}
      {/* DESKTOP NAVIGATION */}
      {/* ========================= */}

      {!mobileMenu && (
        <div className="hidden lg:flex items-center gap-1">
          {mainLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.id}
                to={link.url}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 rounded-xl px-4 py-2.5
                  font-semibold capitalize
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5
                  ${
                    isActive
                      ? "bg-primary text-primary-content shadow-lg"
                      : "text-base-content hover:bg-base-200 hover:text-primary"
                  }`
                }
              >
                <Icon
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span>{link.text}</span>
              </NavLink>
            );
          })}

          {/* MORE DROPDOWN */}

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
                animate-[fadeIn_0.2s_ease-out]
              "
            >
              {moreLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.id}>
                    <NavLink
                      to={link.url}
                      className={({ isActive }) =>
                        `group flex items-center gap-3 rounded-xl transition-all duration-200
                        ${
                          isActive
                            ? "bg-primary text-primary-content"
                            : "hover:bg-primary/10 hover:text-primary"
                        }`
                      }
                    >
                      <Icon
                        size={17}
                        className="transition-transform duration-200 group-hover:scale-110"
                      />

                      <span>{link.text}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* ========================= */}
      {/* MOBILE NAVIGATION */}
      {/* ========================= */}

      {mobileMenu && (
        <div className="flex flex-col gap-2 w-full">
          {mainLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.id}
                to={link.url}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-2xl px-5 py-3.5
                  font-semibold capitalize
                  transition-all duration-300
                  hover:translate-x-1
                  ${
                    isActive
                      ? "bg-primary text-primary-content shadow-lg"
                      : "hover:bg-base-200 hover:text-primary"
                  }`
                }
              >
                <Icon
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span>{link.text}</span>
              </NavLink>
            );
          })}

          {/* MOBILE MORE */}

          <div className="divider my-2">More</div>

          {moreLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.id}
                to={link.url}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-2xl px-5 py-3.5
                  font-semibold capitalize
                  transition-all duration-300
                  hover:translate-x-1
                  ${
                    isActive
                      ? "bg-primary text-primary-content shadow-lg"
                      : "hover:bg-base-200 hover:text-primary"
                  }`
                }
              >
                <Icon
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span>{link.text}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};
