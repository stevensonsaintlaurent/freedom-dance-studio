import { motion } from "framer-motion";
import {
  FileText,
  CalendarCheck,
  CreditCard,
  Users,
  Building2,
  AlertCircle,
  CheckCircle2,
  Camera,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: CalendarCheck,
    title: "Bookings & Reservations",
    content: [
      "All class registrations, event reservations, and studio rental bookings are subject to availability and confirmation by Freedom Dance Studio.",
      "Please provide accurate contact and booking information when submitting a reservation request.",
      "A booking may not be considered confirmed until any required payment, deposit, or confirmation has been received.",
    ],
    url: "/studiopricing",
  },
  {
    icon: CreditCard,
    title: "Payments & Fees",
    content: [
      "Prices, rental rates, class fees, event prices, and other charges may vary depending on the service or event.",
      "Any applicable deposit, booking fee, or payment requirement will be communicated during the booking process.",
      "Freedom Dance Studio reserves the right to update pricing and promotional offers when necessary.",
    ],
  },
  {
    icon: Building2,
    title: "Studio Rentals",
    content: [
      "Studio renters are responsible for using the space respectfully and leaving the studio in the condition in which it was provided.",
      "Renters may be responsible for damages, excessive cleaning, lost equipment, or other costs resulting from misuse of the studio.",
      "The studio may establish specific rules regarding capacity, permitted activities, equipment, music volume, setup, cleanup, and operating hours.",
    ],
    url: "studiopricing",
  },
  {
    icon: Camera,
    title: "Studio Cameras & Recording",
    content: [
      "Freedom Dance Studio uses security cameras and recording equipment in designated areas of the studio and surrounding areas for safety, security, operational purposes, and property protection.",
      "By entering or using the studio, you acknowledge that you may be recorded by our camera systems while you are in areas covered by the cameras.",
      "Activities occurring in camera-covered areas may be recorded and stored. Recorded footage may be used for security, safety investigations, incident documentation, property protection, insurance matters, and other legitimate studio purposes.",
      "Cameras are not intentionally placed in restrooms, changing areas, or other locations where individuals have a reasonable expectation of privacy.",
      "Guests, students, instructors, renters, and visitors are expected to understand and comply with this recording policy while using the studio.",
    ],
  },
  {
    icon: Users,
    title: "Classes & Events",
    content: [
      "Class and event schedules may change due to instructor availability, studio operations, special events, or circumstances outside our control.",
      "Freedom Dance Studio may modify, postpone, or cancel a class or event when necessary.",
      "Participation in classes and events requires respectful behavior toward instructors, staff, students, and other guests.",
    ],
    url: "/classes",
  },
  {
    icon: CheckCircle2,
    title: "Participant Responsibilities",
    content: [
      "Participants are expected to follow studio rules and reasonable instructions from instructors and staff.",
      "Guests should arrive prepared and on time and should respect the studio, its equipment, and other participants.",
      "Freedom Dance Studio reserves the right to refuse service or ask a guest to leave when conduct is unsafe, disruptive, threatening, or inappropriate.",
    ],
    url: "",
  },
  {
    icon: AlertCircle,
    title: "Cancellations & Changes",
    content: [
      "Cancellation and refund policies may vary depending on the class, event, rental, workshop, or promotional offer.",
      "When a specific cancellation policy applies, that policy will take precedence over general booking terms.",
      "If you need to change or cancel a reservation, please contact Freedom Dance Studio as soon as possible.",
    ],
    url: "",
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

const TermsConditions = () => {
  return (
    <main className="min-h-screen bg-base-100">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-base-200">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

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
                <FileText size={24} />
              </div>

              <span className="badge badge-primary badge-outline">
                Studio Guidelines
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Terms & <span className="text-primary">Conditions</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-base-content/65 sm:text-lg">
              These terms help us create a safe, respectful, and enjoyable
              experience for everyone in the Freedom Dance Studio community.
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
                Quick Navigation
              </p>

              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.title}
                    href={section.url}
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
            viewport={{ once: true, amount: 0.08 }}
            className="space-y-6"
          >
            {/* Welcome */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-base-300 bg-base-200/60 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <FileText className="mt-1 shrink-0 text-primary" />

                <div>
                  <h2 className="text-2xl font-bold">
                    Welcome to Freedom Dance Studio
                  </h2>

                  <p className="mt-4 leading-8 text-base-content/65">
                    By using our website, booking a class, participating in an
                    event, or renting our studio, you agree to follow the
                    applicable terms and guidelines described below.
                  </p>
                </div>
              </div>
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

            {/* Important Notice */}
            <motion.div
              variants={itemVariants}
              className="rounded-3xl border border-warning/20 bg-warning/10 p-7 sm:p-9"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="mt-1 shrink-0 text-warning" />

                <div>
                  <h2 className="text-xl font-bold">Important Notice</h2>

                  <p className="mt-3 leading-7 text-base-content/65">
                    These terms are intended to provide general guidelines for
                    using Freedom Dance Studio. Specific events, rentals,
                    classes, memberships, or promotions may have additional
                    terms that apply to that particular service.
                  </p>

                  <Link to="/contact" className="btn btn-primary mt-5">
                    Contact the Studio
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

export default TermsConditions;
