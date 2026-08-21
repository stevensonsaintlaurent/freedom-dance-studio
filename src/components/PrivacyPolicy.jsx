import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  Mail,
  Camera,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

// ======================================================
// Privacy Policy Sections
// ======================================================

const sections = [
  {
    icon: UserCheck,
    title: "Information We Collect",
    content: [
      "When you interact with Freedom Dance Studio, we may collect information you voluntarily provide, such as your name, email address, phone number, booking information, and other details needed to provide our services.",
      "We may also collect basic technical information when you visit our website, such as browser type, device information, and general website usage data.",
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to process class registrations, studio rental requests, event bookings, memberships, and other services you request.",
      "Your information may also be used to communicate with you about bookings, schedule changes, events, promotions, and important studio announcements.",
    ],
  },
  {
    icon: Lock,
    title: "How We Protect Your Information",
    content: [
      "Freedom Dance Studio takes reasonable measures to protect the personal information provided through our website.",
      "We do not intentionally sell your personal information to third parties. Access to personal information is limited to what is reasonably necessary to operate our studio and provide requested services.",
    ],
  },
  {
    icon: Camera,
    title: "Studio Cameras & Recording",
    content: [
      "For safety, security, operational, and property-protection purposes, Freedom Dance Studio uses security cameras and recording equipment in designated areas of the studio and surrounding areas.",
      "Activities taking place in areas covered by our cameras may be recorded and stored. By entering the studio, you acknowledge that you may be captured by our security and recording systems where legally permitted.",
      "Recorded footage may be used for security, safety investigations, incident documentation, protection of students, instructors, guests, staff, and property, and other legitimate studio purposes.",
      "Freedom Dance Studio does not intentionally place cameras in areas where people have a reasonable expectation of privacy, including restrooms or changing areas.",
      "Access to recorded footage is limited to authorized persons and may be disclosed when reasonably necessary for safety, security, legal, insurance, or law-enforcement purposes.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Third-Party Services",
    content: [
      "Our website may use third-party services for payments, scheduling, communications, analytics, social media, or other business functions.",
      "These services may process information according to their own privacy policies. We encourage you to review the privacy policies of any third-party service you use through our website.",
    ],
  },
  {
    icon: Mail,
    title: "Communications",
    content: [
      "If you provide your contact information, we may contact you regarding your bookings, classes, events, studio rentals, or other services you have requested.",
      "You may contact us if you no longer wish to receive certain promotional communications.",
    ],
  },
];

// ======================================================
// Helpers
// ======================================================

const createId = (title) =>
  title.toLowerCase().replaceAll("&", "and").replaceAll(" ", "-");

// ======================================================
// Animations
// ======================================================

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// ======================================================
// Component
// ======================================================

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-base-100">
      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden bg-base-200">
        {/* Decorative background */}
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />

        <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Back link */}
            <Link
              to="/"
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-base-content/60
                transition
                hover:text-primary
                sm:mb-8
              "
            >
              <ArrowLeft size={17} />
              <span>Back to Freedom Dance Studio</span>
            </Link>

            {/* Badge */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-content shadow-lg sm:h-12 sm:w-12">
                <ShieldCheck size={23} className="sm:h-[25px] sm:w-[25px]" />
              </div>

              <span className="badge badge-primary badge-outline">
                Your Privacy Matters
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Privacy <span className="text-primary">Policy</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-base-content/65 sm:mt-6 sm:text-lg sm:leading-7">
              At Freedom Dance Studio, we respect your privacy and are committed
              to protecting the information you share with us.
            </p>

            {/* Updated */}
            <div className="mt-5 text-xs text-base-content/50 sm:mt-6 sm:text-sm">
              Last updated: August 21, 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-base-content/40">
                On this page
              </p>

              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.title}
                    href={`#${createId(section.title)}`}
                    className="
                      block
                      rounded-lg
                      px-3
                      py-2
                      text-sm
                      text-base-content/60
                      transition
                      hover:bg-base-200
                      hover:text-primary
                    "
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* ==================================================
              MAIN CONTENT
          ================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-5 sm:space-y-6"
          >
            {/* ==================================================
                WELCOME
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                rounded-2xl
                border
                border-base-300
                bg-base-200/60
                p-5
                sm:rounded-3xl
                sm:p-8
              "
            >
              <h2 className="text-xl font-bold sm:text-2xl">Welcome</h2>

              <p className="mt-3 text-sm leading-7 text-base-content/65 sm:mt-4 sm:text-base sm:leading-8">
                Freedom Dance Studio is committed to maintaining the trust of
                our students, instructors, renters, guests, and website
                visitors. This Privacy Policy explains how information may be
                collected, used, and protected when you interact with our studio
                and website.
              </p>
            </motion.div>

            {/* ==================================================
                POLICY SECTIONS
            ================================================== */}

            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <motion.article
                  key={section.title}
                  id={createId(section.title)}
                  variants={itemVariants}
                  className="
                    group
                    scroll-mt-24
                    rounded-2xl
                    border
                    border-base-300
                    bg-base-100
                    p-5
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    sm:rounded-3xl
                    sm:p-8
                  "
                >
                  <div className="flex items-start gap-3 sm:gap-5">
                    {/* Icon */}
                    <div
                      className="
                        grid
                        h-10
                        w-10
                        shrink-0
                        place-items-center
                        rounded-xl
                        bg-primary/10
                        text-primary
                        transition
                        duration-300
                        group-hover:scale-110
                        sm:h-12
                        sm:w-12
                        sm:rounded-2xl
                      "
                    >
                      <Icon size={20} className="sm:h-[23px] sm:w-[23px]" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-bold leading-snug sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                        {section.content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="
                              text-sm
                              leading-7
                              text-base-content/65
                              sm:text-base
                              sm:leading-8
                            "
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            {/* ==================================================
                CONTACT
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                rounded-2xl
                bg-primary
                p-5
                text-primary-content
                shadow-xl
                sm:rounded-3xl
                sm:p-9
              "
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 sm:h-6 sm:w-6" />

                <div className="min-w-0">
                  <h2 className="text-lg font-bold sm:text-xl">
                    Questions About Privacy?
                  </h2>

                  <p className="mt-2 text-sm leading-7 opacity-85 sm:text-base sm:leading-7">
                    If you have questions about this Privacy Policy, our camera
                    recording practices, or how your information is handled,
                    please contact Freedom Dance Studio.
                  </p>

                  <Link
                    to="/contact"
                    className="
                      btn
                      btn-sm
                      mt-4
                      bg-white
                      text-primary
                      hover:bg-white/90
                      sm:mt-5
                    "
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
