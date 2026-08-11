import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "classes", text: "classes" },
  { id: 4, url: "membership", text: "prices" },
  { id: 5, url: "rental", text: " Studio Rental" },
  { id: 6, url: "gallery", text: " Gallery" },
  { id: 7, url: "reviews", text: " Testimonials" },
  { id: 8, url: "contact", text: "contact" },
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
          <li key={id} className="list-none  transition-all">
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
