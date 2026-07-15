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
          <h1>Freedom Dance Studio</h1>
        </div>
      </div>

      <NavLinks mobileMenu={mobileMenu} />

      {/* <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="schedule" smooth={true} offset={0} duration={500}>
            Schedule
          </Link>
        </li>

        <li>
          <Link to="instructors" smooth={true} offset={-10} duration={500}>
            Instructors
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} offset={-210} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to="program" smooth={true} offset={-150} duration={500}>
            Info
          </Link>
        </li>

        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul> */}
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
