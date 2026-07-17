import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 4, url: "about", text: "about" },
  { id: 2, url: "classes", text: "classes" },
  { id: 2, url: "membership", text: "prices" },
  { id: 5, url: "contact", text: "contact" },
];

export const NavLinks = ({ mobileMenu }) => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li key={id}>
            <NavLink to={url} className="capitalize">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
