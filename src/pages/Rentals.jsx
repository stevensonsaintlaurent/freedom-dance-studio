import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Music2,
  PartyPopper,
  Users,
  Sparkles,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import rehearsal from "../assets/rehearsal.jpeg";
import room1 from "../assets/rent/main.jpg";
import room2 from "../assets/rent/small.jpg";
import studio from "../assets/rent/main5.jpg";

const StudioRental = () => {
  const navigate = useNavigate();

  const handleRental = () => {
    navigate("/rentalStudio");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const rentalUses = [
    {
      icon: PartyPopper,
      title: "Private Events",
      text: "A flexible studio space for private events and special gatherings.",
    },
    {
      icon: Music2,
      title: "Classes",
      text: "Rent studio space for your classes and regular sessions.",
    },
    {
      icon: Sparkles,
      title: "Workshops",
      text: "A professional environment for workshops and group activities.",
    },
    {
      icon: Users,
      title: "Orchestra & Band Repetitions",
      text: "Space available for orchestra and band rehearsal sessions.",
    },
  ];

  const spaces = [
    {
      src: room1,
      title: "720 SQ. FT.",
      subtitle: "Main Studio Space",
      description:
        "A spacious studio area available for classes, workshops, rehearsals and private events.",
      badge: "720 SQ. FT.",
    },
    {
      src: room2,
      title: "639 SQ. FT.",
      subtitle: "Studio Space",
      description:
        "A flexible studio space suitable for classes, workshops, rehearsals and smaller gatherings.",
      badge: "639 SQ. FT.",
    },
  ];

  const galleryImages = [
    {
      src: rehearsal,
      title: "Studio Interior",
      description:
        "A professional and welcoming environment for your next rental.",
    },
    {
      src: room1,
      title: "720 SQ. FT. Space",
      description: "Spacious studio area for classes, workshops and events.",
    },
    {
      src: room2,
      title: "639 SQ. FT. Space",
      description: "Flexible space for rehearsals and other activities.",
    },
    {
      src: studio,
      title: "Freedom Dance Studio",
      description: "A versatile space available for rent in Las Vegas.",
    },
  ];

  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (725) 724-0962",
      href: "tel:+17257240962",
    },
    {
      icon: Mail,
      label: "Email",
      value: "freedomdancelasvegas@gmail.com",
      href: "mailto:freedomdancelasvegas@gmail.com",
    },
    {
      icon: Globe,
      label: "Website",
      value: "vegasfreedomdancestudio.com",
      href: "https://www.vegasfreedomdancestudio.com",
      external: true,
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@freedom_dance_las_vegas",
      href: "https://www.instagram.com/freedom_dance_las_vegas/",
      external: true,
    },
  ];

  return (
    <section className="min-h-screen overflow-hidden bg-base-200">
      {/* =====================================================
          HERO
      ====================================================== */}

      <div className="relative isolate overflow-hidden bg-neutral">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Text */}

            <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
              <div className="badge badge-primary badge-lg gap-2 px-4 py-4">
                <Building2 size={16} />
                Studio For Rent
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Find Your
                <span className="text-primary"> Perfect Space.</span>
                <br />
                Rent With Freedom.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Freedom Dance Studio offers flexible studio spaces in Las Vegas
                for private events, classes, workshops and orchestra/band
                repetitions.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <Clock3 className="text-primary" size={28} />
                </div>

                <div>
                  <p className="text-sm text-white/60">Rates From</p>

                  <p className="text-3xl font-black text-white sm:text-4xl">
                    $20–$120
                    <span className="ml-2 text-lg font-medium text-white/60">
                      /hr
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleRental}
                  className="
                    btn btn-primary btn-lg
                    rounded-full
                    shadow-xl shadow-primary/20
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  Request Studio Rental
                  <ArrowRight size={19} />
                </button>

                {/* FIXED: regular anchor for page section */}
                <a
                  href="#spaces"
                  className="
                    btn btn-outline btn-secondary btn-lg
                    rounded-full
                  "
                >
                  View Our Spaces
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-primary" />
                  720 SQ. FT.
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-primary" />
                  639 SQ. FT.
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-primary" />
                  Las Vegas
                </span>
              </div>
            </motion.div>

            {/* Hero Image */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeRight}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
                <img
                  src={rehearsal}
                  alt="Freedom Dance Studio rental space"
                  className="
                    h-[350px]
                    w-full
                    rounded-[1.5rem]
                    object-cover
                    sm:h-[450px]
                  "
                />
              </div>

              <div
                className="
                  absolute
                  -bottom-5
                  left-5
                  rounded-2xl
                  border
                  border-white/10
                  bg-base-100
                  px-5
                  py-4
                  shadow-2xl
                  sm:left-10
                "
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-2 text-primary">
                    <Building2 size={22} />
                  </div>

                  <div>
                    <p className="text-xs text-base-content/60">
                      Freedom Dance Studio
                    </p>

                    <p className="font-bold">Studio For Rent</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =====================================================
          QUICK INFORMATION
      ====================================================== */}

      <div className="relative z-10 mx-auto -mt-8 max-w-6xl px-6">
        <div className="grid overflow-hidden rounded-3xl bg-base-100 shadow-2xl sm:grid-cols-3">
          <div className="flex items-center gap-4 border-b border-base-200 p-6 sm:border-b-0 sm:border-r">
            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
              <Building2 size={25} />
            </div>

            <div>
              <p className="font-bold">720 SQ. FT.</p>
              <p className="text-sm text-base-content/60">Studio space</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-base-200 p-6 sm:border-b-0 sm:border-r">
            <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
              <Building2 size={25} />
            </div>

            <div>
              <p className="font-bold">639 SQ. FT.</p>
              <p className="text-sm text-base-content/60">Studio space</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
              <Clock3 size={25} />
            </div>

            <div>
              <p className="font-bold">$20–$120 / HR</p>
              <p className="text-sm text-base-content/60">Rental rates</p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PERFECT FOR
      ====================================================== */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="badge badge-secondary badge-lg">Rental Options</div>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            What Can You Use the Studio For?
          </h2>

          <p className="mt-5 text-base leading-8 text-base-content/70 sm:text-lg">
            Our studio spaces are available for a variety of classes,
            rehearsals, workshops and events.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rentalUses.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="
                  group
                  rounded-3xl
                  border
                  border-base-300
                  bg-base-100
                  p-6
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-primary/40
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                    transition-all
                    duration-300
                    group-hover:bg-primary
                    group-hover:text-primary-content
                  "
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-2 leading-7 text-base-content/60">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* =====================================================
          STUDIO SPACES
      ====================================================== */}

      <section id="spaces" className="bg-base-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="badge badge-primary badge-lg">Our Spaces</div>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Choose Your Space
            </h2>

            <p className="mt-5 text-base-content/70 sm:text-lg">
              Freedom Dance Studio has two flexible studio spaces available for
              rent.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {spaces.map((space, index) => (
              <motion.div
                key={space.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={index === 0 ? fadeLeft : fadeRight}
                whileHover={{ y: -8 }}
                className="card overflow-hidden bg-base-200 shadow-xl"
              >
                <figure className="relative">
                  <img
                    src={space.src}
                    alt={space.title}
                    className="
                      h-80
                      w-full
                      object-cover
                      transition
                      duration-700
                      hover:scale-105
                    "
                  />

                  <div className="absolute left-5 top-5">
                    <div className="badge badge-primary badge-lg">
                      {space.badge}
                    </div>
                  </div>
                </figure>

                <div className="card-body p-7">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    {space.subtitle}
                  </p>

                  <h3 className="card-title mt-1 text-3xl">{space.title}</h3>

                  <p className="mt-2 leading-7 text-base-content/60">
                    {space.description}
                  </p>

                  <button
                    onClick={handleRental}
                    className="btn btn-primary mt-5 rounded-full"
                  >
                    Ask About This Space
                    <ArrowRight size={17} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING
      ====================================================== */}

      <section className="bg-base-200 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="badge badge-secondary badge-lg">Rental Rates</div>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Flexible Rates for Your Needs
            </h2>

            <p className="mt-5 text-base-content/70 sm:text-lg">
              Studio rental rates range from $20 to $120 per hour. Contact us to
              discuss your specific rental needs.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            className="
              relative
              mt-12
              overflow-hidden
              rounded-[2rem]
              bg-neutral
              p-8
              text-neutral-content
              shadow-2xl
              sm:p-12
            "
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

            <div className="relative grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Clock3 size={28} />
                </div>

                <h3 className="mt-6 text-3xl font-black sm:text-4xl">
                  $20–$120
                  <span className="ml-2 text-xl font-medium text-white/60">
                    /hour
                  </span>
                </h3>

                <p className="mt-4 leading-8 text-white/65">
                  Our rental rates vary depending on the space and type of
                  rental. Contact Freedom Dance Studio for details and
                  availability.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Available For
                </p>

                <ul className="mt-5 space-y-4">
                  {[
                    "Private Events",
                    "Classes",
                    "Workshops",
                    "Orchestra/Band Repetitions",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={20}
                        className="shrink-0 text-primary"
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleRental}
                  className="btn btn-primary mt-7 w-full rounded-full"
                >
                  Check Availability
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LOCATION / CONTACT
      ====================================================== */}

      <section className="bg-base-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Address */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeLeft}
            >
              <div className="badge badge-primary badge-lg">Visit Us</div>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Located in Las Vegas
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-base-content/70">
                Come visit Freedom Dance Studio and see which rental space works
                best for your needs.
              </p>

              <div className="mt-8 rounded-3xl bg-base-200 p-7 shadow-lg">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-base-content/50">
                      Address
                    </p>

                    <p className="mt-2 text-xl font-bold leading-8">
                      3110 E. Sunset Rd.
                      <br />
                      Ste. C
                      <br />
                      Las Vegas, NV 89120
                    </p>
                  </div>
                </div>
              </div>

              {/* FIXED: <a> instead of React Router Link */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=3110+E+Sunset+Rd+Ste+C+Las+Vegas+NV+89120"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-primary mt-5 rounded-full"
              >
                Get Directions
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* Contact */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeRight}
            >
              <div className="badge badge-secondary badge-lg">Contact Us</div>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Ready to Rent?
              </h2>

              <p className="mt-5 leading-8 text-base-content/70">
                Contact Freedom Dance Studio to ask about availability, rental
                rates and your specific studio needs.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-base-300
                        bg-base-100
                        p-4
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary/40
                        hover:shadow-lg
                      "
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-content">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-base-content/45">
                          {item.label}
                        </p>

                        <p className="mt-1 truncate font-medium">
                          {item.value}
                        </p>
                      </div>

                      <ArrowRight
                        size={18}
                        className="ml-auto shrink-0 text-base-content/30 transition group-hover:translate-x-1 group-hover:text-primary"
                      />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section className="bg-base-200 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="badge badge-secondary badge-lg">Inside Freedom</div>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Take a Look Inside
            </h2>

            <p className="mt-5 text-base-content/70 sm:text-lg">
              Explore the studio spaces available for rent.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-3xl bg-base-100 shadow-xl ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="
                    h-72
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{image.title}</h3>

                  <p className="mt-1 max-w-md text-sm text-white/75">
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-neutral py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-gradient-to-br
              from-primary
              to-secondary
              p-8
              text-center
              shadow-2xl
              sm:p-12
              lg:p-16
            "
          >
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-black/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Building2 size={32} />
              </div>

              <h2 className="mt-6 text-3xl font-black text-white sm:text-5xl">
                Studio For Rent
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Looking for a space for your next class, workshop, private event
                or orchestra/band rehearsal? Contact Freedom Dance Studio today.
              </p>

              <div className="mt-4 text-2xl font-black text-white">
                Rates From $20–$120 / Hour
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  onClick={handleRental}
                  className="
                    btn
                    btn-lg
                    rounded-full
                    border-none
                    bg-white
                    text-base-content
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-base-100
                  "
                >
                  Request Studio Rental
                  <ArrowRight size={19} />
                </button>

                {/* FIXED: <a> instead of React Router Link */}
                <a
                  href="tel:+17257240962"
                  className="
                    btn
                    btn-lg
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    text-white
                    hover:bg-white/20
                  "
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default StudioRental;
