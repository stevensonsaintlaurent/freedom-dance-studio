import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 4, url: "about", text: "about" },
  { id: 2, url: "classes", text: "classes" },
  { id: 8, url: "membership", text: "prices" },
  { id: 6, url: "rental", text: " Studio Rental" },
  { id: 5, url: "contact", text: "contact" },
];

export const NavLinks = ({ mobileMenu }) => {
  const scroolUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scroolUp();
  });
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li
            key={id}
            className="list-none hover:bg-base-content   transition-all"
          >
            <NavLink
              to={url}
              className="capitalize sm:block"
              onClick={scroolUp}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
