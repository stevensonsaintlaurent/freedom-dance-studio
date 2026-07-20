import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { NavLinks } from "./NavLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  const scroolUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Studio Info */}
          <div>
            <h2 className="text-3xl font-bold text-primary">
              Freedom Dance Studio
            </h2>

            <p className="mt-5 leading-7">
              Learn Bachata, Salsa, Urban Kiz, Konpa, and more in a welcoming
              environment. Join our growing dance family in Las Vegas and take
              your dancing to the next level.
            </p>

            <Link
              to="/classes"
              className="btn btn-primary mt-6"
              onClick={scroolUp}
            >
              Book Your First Class
            </Link>
          </div>

          {/* Quick Links */}
          <div className=" flex justify-center items-center flex-col gap-6 ">
            <h3 className="footer-title text-lg">Quick Links</h3>

            <NavLinks />
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-title text-lg">Contact Us</h3>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>
                  3110 E Sunset Rd Suite C
                  <br />
                  Las Vegas, NV 89120
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <FaPhone className="text-primary" />
                <span> 7257240962</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-primary" />
                <span>freedomdancelasvegas@gmail.com</span>
              </div>

              <div className="flex gap-3 items-start">
                <FaClock className="text-primary mt-1" />
                <span>
                  Mon - Fri: 5 PM - 10 PM
                  <br />
                  Sat - Sun: 12 PM - 8 PM
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=100095031592137&mibextid=LQQJ4d"
                className="btn btn-circle btn-outline btn-primary"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/vegas_freedom_dance_studio?igsh=MXVoNmJtODh1azJ4Zg== "
                className="btn btn-circle btn-outline btn-primary"
              >
                <FaInstagram />
              </a>

              <a href="#" className="btn btn-circle btn-outline btn-primary">
                <FaYoutube />
              </a>

              <a
                href="https://www.tiktok.com/@fd.las_vegas?_t=8qEDieUuXCJ&_r=1"
                className="btn btn-circle btn-outline btn-primary"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="footer-title text-lg">Find Us</h3>

            <div className="rounded-xl overflow-hidden shadow-xl">
              <iframe
                title="Freedom Dance Studio Las Vegas"
                src="https://www.google.com/maps?q=Las+Vegas+Nevada&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Freedom Dance Studio Las Vegas. All
            Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a className="link link-hover">Privacy Policy</a>

            <a className="link link-hover">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
