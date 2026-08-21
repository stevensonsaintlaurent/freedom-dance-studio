import { Link } from "react-router-dom";
import {
  Home,
  Info,
  CalendarDays,
  GraduationCap,
  Building2,
  Images,
  Phone,
} from "lucide-react";

const footerLinks = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "About Us",
    path: "/about",
    icon: Info,
  },
  {
    name: "Select a Class",
    path: "/classes",
    icon: GraduationCap,
  },
  {
    name: "Schedule",
    path: "/schedule",
    icon: CalendarDays,
  },
  {
    name: "Studio Rental",
    path: "/rentalStudio",
    icon: Building2,
  },
  {
    name: "Upcoming Events",
    path: "/events",
    icon: CalendarDays,
  },
  {
    name: "Gallery",
    path: "/galeries",
    icon: Images,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Phone,
  },
];

const FooterNavLinks = () => {
  return (
    <nav aria-label="Footer navigation" className="w-full">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2">
        {footerLinks.map(({ name, path, icon: Icon }) => (
          <Link
            key={name}
            to={path}
            className="
              group
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-2.5
              text-sm
              font-medium
              text-white/65
              transition-all
              duration-300
              hover:bg-white/10
              hover:text-primary
              hover:translate-x-1
            "
          >
            <Icon
              size={17}
              strokeWidth={1.8}
              className="
                shrink-0
                text-primary/70
                transition-all
                duration-300
                group-hover:text-primary
                group-hover:scale-110
              "
            />

            <span>{name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default FooterNavLinks;
