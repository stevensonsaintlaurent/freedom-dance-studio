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

const createId = (title) =>
  title.toLowerCase().replaceAll("&", "and").replaceAll(" ", "-");

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

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-base-100">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-base-200">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-primary"
            >
              <ArrowLeft size={17} />
              Back to Freedom Dance Studio
            </Link>

            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-content shadow-lg">
                <ShieldCheck size={25} />
              </div>

              <span className="badge badge-primary badge-outline">
                Your Privacy Matters
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Privacy <span className="text-primary">Policy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-base-content/65 sm:text-lg">
              At Freedom Dance Studio, we respect your privacy and are committed
              to protecting the information you share with us.
            </p>

            <div className="mt-6 text-sm text-base-content/50">
              Last updated: August 21, 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          {/* ================= SIDEBAR ================= */}
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
                    className="block rounded-lg px-3 py-2 text-sm text-base-content/60 transition hover:bg-base-200 hover:text-primary"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* ================= MAIN ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {/* Welcome */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-base-300 bg-base-200/60 p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold">Welcome</h2>

              <p className="mt-4 leading-8 text-base-content/65">
                Freedom Dance Studio is committed to maintaining the trust of
                our students, instructors, renters, guests, and website
                visitors. This Privacy Policy explains how information may be
                collected, used, and protected when you interact with our studio
                and website.
              </p>
            </motion.div>

            {/* Sections */}
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <motion.article
                  key={section.title}
                  id={createId(section.title)}
                  variants={itemVariants}
                  className="group scroll-mt-24 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:scale-110">
                      <Icon size={23} />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-xl font-bold sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4">
                        {section.content.map((paragraph, index) => (
                          <p
                            key={index}
                            className="leading-8 text-base-content/65"
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

            {/* Contact */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl bg-primary p-7 text-primary-content shadow-xl sm:p-9"
            >
              <div className="flex items-start gap-4">
                <Mail className="mt-1 shrink-0" />

                <div>
                  <h2 className="text-xl font-bold">
                    Questions About Privacy?
                  </h2>

                  <p className="mt-2 leading-7 opacity-85">
                    If you have questions about this Privacy Policy, our camera
                    recording practices, or how your information is handled,
                    please contact Freedom Dance Studio.
                  </p>

                  <Link
                    to="/contact"
                    className="btn btn-sm mt-5 bg-white text-primary hover:bg-white/90"
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
