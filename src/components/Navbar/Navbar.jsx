import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";
import { IoCloseSharp } from "react-icons/io5";
import Schedule from "./Programs/Schedule";
import { NavLinks } from "./NavLinks";

const Navbar = ({ setMobileMenu, mobileMenu }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
      setMobileMenu(false);
    });
  }, []);

  function toggleMenu() {
    setMobileMenu(!mobileMenu);
  }

  // function handleCloseM() {
  //   setMobileMenu(false);
  //   console.log("stev");
  // }

  return (
    <nav className={` ${sticky ? "dark-nav" : ""}`}>
      <div className="logo-title">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div>
          <h1>Freedom Studio</h1>
        </div>
      </div>

      <NavLinks mobileMenu={mobileMenu} />

      {mobileMenu ? (
        <IoCloseSharp className="close-icon" onClick={toggleMenu} />
      ) : (
        <img
          src={menu_icon}
          alt=""
          className="menu-icon"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
