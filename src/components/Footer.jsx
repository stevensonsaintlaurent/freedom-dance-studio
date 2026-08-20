import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import { NavLinks } from "./NavLinks";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  // Scroll to top when the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/profile.php?id=100095031592137&mibextid=LQQJ4d",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/vegas_freedom_dance_studio?igsh=MXVoNmJtODh1azJ4Zg==",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "#",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@fd.las_vegas?_t=8qEDieUuXCJ&_r=1",
    },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden bg-neutral text-neutral-content">
      {/* =========================
          Decorative Background
      ========================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue glow */}
        <div
          className="
            absolute
            -top-32
            -left-32
            w-96
            h-96
            rounded-full
            bg-primary/20
            blur-3xl
            animate-pulse
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            top-1/3
            right-[-150px]
            w-96
            h-96
            rounded-full
            bg-secondary/20
            blur-3xl
            animate-pulse
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[-200px]
            left-1/3
            w-96
            h-96
            rounded-full
            bg-accent/10
            blur-3xl
          "
        />
      </div>

      {/* =========================
          Gradient Top Border
      ========================== */}

      <div className="relative h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-16">
        {/* =========================
            Main Footer Grid
        ========================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* =========================
              Studio Information
          ========================== */}

          <div
            className="
              group
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              p-7
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-primary/40
              hover:bg-white/10
            "
          >
            {/* Logo / Brand */}

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-2xl
                  bg-primary/10
                  text-primary
                  border border-primary/20
                  group-hover:scale-110
                  group-hover:rotate-6
                  transition-all
                  duration-500
                "
              >
                💃
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-primary">
                Freedom
              </h2>
            </div>

            <p className="mt-1 ml-15 text-sm font-medium text-white/50">
              Dance Studio
            </p>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Learn Bachata, Salsa, Urban Kiz, Konpa, and more in a welcoming
              environment. Join our growing dance family in Las Vegas and take
              your dancing to the next level.
            </p>

            {/* CTA */}

            <Link
              to="/classes"
              className="
                btn
                btn-primary
                rounded-full
                mt-6
                px-7
                shadow-lg
                shadow-primary/20
                hover:scale-105
                hover:shadow-primary/40
                transition-all
                duration-300
              "
            >
              Book Your First Class
            </Link>
          </div>

          {/* =========================
    Quick Links
========================== */}

          <div
            className="
    rounded-3xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    p-5
    sm:p-6
    lg:p-7
    shadow-xl
    transition-all
    duration-500
    hover:-translate-y-1
    hover:border-secondary/40
    hover:bg-white/10
    w-full
  "
          >
            <div className="mb-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Quick Links
              </h3>

              <div className="mt-2 h-1 w-10 rounded-full bg-secondary" />
            </div>

            <div className="w-full">
              <NavLinks footer />
            </div>
          </div>

          {/* =========================
              Contact Information
          ========================== */}

          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              p-7
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-accent/40
              hover:bg-white/10
            "
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>

            <div className="space-y-5">
              {/* Address */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=3110+E+Sunset+Rd+Suite+C+Las+Vegas+NV+89120"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  gap-4
                  items-start
                  text-white/70
                  hover:text-primary
                  transition-all
                  duration-300
                "
              >
                <FaMapMarkerAlt
                  className="
                    mt-1
                    text-primary
                    shrink-0
                    group-hover:scale-125
                    transition-transform
                    duration-300
                  "
                />

                <span className="text-sm leading-6">
                  3110 E Sunset Rd Suite C
                  <br />
                  Las Vegas, NV 89120
                </span>
              </a>

              {/* Phone */}

              <a
                href="tel:+17257240962"
                className="
                  group
                  flex
                  gap-4
                  items-center
                  text-white/70
                  hover:text-primary
                  transition-all
                  duration-300
                "
              >
                <FaPhone
                  className="
                    text-primary
                    group-hover:scale-125
                    transition-transform
                    duration-300
                  "
                />

                <span className="text-sm">(725) 724-0962</span>
              </a>

              {/* Email */}

              <a
                href="mailto:freedomdancelasvegas@gmail.com"
                className="
                  group
                  flex
                  gap-4
                  items-center
                  text-white/70
                  hover:text-primary
                  transition-all
                  duration-300
                  break-all
                "
              >
                <FaEnvelope
                  className="
                    text-primary
                    shrink-0
                    group-hover:scale-125
                    transition-transform
                    duration-300
                  "
                />

                <span className="text-sm">freedomdancelasvegas@gmail.com</span>
              </a>

              {/* Hours */}

              <div className="flex gap-4 items-start text-white/70">
                <FaClock className="text-primary mt-1 shrink-0" />

                <span className="text-sm leading-6">
                  Mon - Fri: 10 AM - 9 PM
                  <br />
                  Sat: 10:30 AM - 8 PM
                  <br />
                  Sun: Closed
                </span>
              </div>
            </div>

            {/* =========================
                Social Media
            ========================== */}

            <div className="flex gap-3 mt-7">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url !== "#" ? "_blank" : undefined}
                  rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  className="
                    group
                    btn
                    btn-circle
                    w-11
                    h-11
                    min-h-11
                    bg-white/5
                    border
                    border-white/10
                    text-white/70
                    hover:bg-primary
                    hover:border-primary
                    hover:text-white
                    hover:scale-110
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* =========================
              Google Map
          ========================== */}

          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              p-4
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-primary/40
              hover:bg-white/10
            "
          >
            <div className="px-3 pt-2 pb-4">
              <h3 className="text-xl font-bold">Find Us</h3>

              <p className="text-sm text-white/50 mt-1">
                Come dance with us in Las Vegas
              </p>
            </div>

            <div
              className="
                rounded-2xl
                overflow-hidden
                border
                border-white/10
                shadow-2xl
                transition-all
                duration-500
                hover:scale-[1.02]
              "
            >
              <iframe
                title="Freedom Dance Studio Las Vegas"
                src="https://www.google.com/maps?q=3110+E+Sunset+Rd+Suite+C,+Las+Vegas,+NV+89120&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=3110+E+Sunset+Rd+Suite+C+Las+Vegas+NV+89120"
              target="_blank"
              rel="noopener noreferrer"
              className="
                btn
                btn-outline
                btn-primary
                btn-sm
                rounded-full
                mt-4
                w-full
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* =========================
            Divider
        ========================== */}

        <div className="divider divider-primary opacity-30 my-10" />

        {/* =========================
            Bottom Footer
        ========================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-5
            text-sm
          "
        >
          <p className="text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Freedom Dance Studio Las Vegas.
            <span className="hidden sm:inline"> </span>
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/policy"
              className="
                link
                link-hover
                text-white/50
                hover:text-primary
                transition-colors
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/conditions"
              className="
                link
                link-hover
                text-white/50
                hover:text-primary
                transition-colors
              "
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* =========================
            Made With Love
        ========================== */}

        <div className="text-center mt-8">
          <p className="text-xs text-white/30 flex justify-center items-center gap-1">
            Made with
            <FaHeart className="text-primary animate-pulse" />
            for the Las Vegas dance community
          </p>
        </div>
      </div>

      {/* =========================
          Scroll To Top Button
      ========================== */}

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Scroll to top"
        className="
          fixed
          bottom-6
          right-6
          z-50
          btn
          btn-circle
          btn-primary
          shadow-xl
          shadow-primary/30
          hover:scale-110
          hover:-translate-y-1
          transition-all
          duration-300
        "
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
