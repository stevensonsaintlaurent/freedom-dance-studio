import { Link } from "react-scroll";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "schedule", text: "schedule" },
  { id: 3, url: "instructors", text: "instructors" },
  { id: 4, url: "about", text: "about" },
  { id: 5, url: "info", text: "info" },
];

export const NavLinks = ({ mobileMenu }) => {
  return (
    <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <Link to={url}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
};
