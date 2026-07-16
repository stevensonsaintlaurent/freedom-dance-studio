import { Link } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 4, url: "about", text: "about" },
  // { id: 2, url: "schedule", text: "schedule" },
  // { id: 3, url: "instructor", text: "instructors" },
  { id: 5, url: "contact", text: "contact" },
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
