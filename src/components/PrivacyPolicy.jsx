import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  Mail,
  Camera,
  ArrowLeft,
  Megaphone,
  FileCheck2,
  Video,
  Users,
  AlertCircle,
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
      "When you interact with Freedom Dance Studio, we may collect information you voluntarily provide, such as your name, email address, phone number, date of birth, membership information, booking information, rental information, and other details needed to provide our services.",
      "We may also collect basic technical information when you visit our website, such as browser type, device information, general website usage data, and information necessary to maintain website security and functionality.",
    ],
  },

  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to process class registrations, memberships, studio rental requests, event bookings, private lessons, and other services you request.",
      "Your information may also be used to communicate with you about bookings, class schedules, schedule changes, events, promotions, membership information, studio announcements, and other services related to your interaction with Freedom Dance Studio.",
      "We may use information provided through our forms to respond to questions, confirm requests, and provide customer support.",
    ],
  },

  {
    icon: Lock,
    title: "How We Protect Your Information",
    content: [
      "Freedom Dance Studio takes reasonable administrative, technical, and organizational measures to protect personal information provided through our website and studio services.",
      "We do not intentionally sell your personal information to third parties.",
      "Access to personal information is limited to authorized persons and service providers who reasonably need the information to operate the studio, provide requested services, communicate with customers, or maintain our website and business systems.",
      "Although we take reasonable precautions to protect information, no website, online service, or electronic transmission can be guaranteed to be completely secure.",
    ],
  },

  // ======================================================
  // SECURITY CAMERAS
  // ======================================================

  {
    icon: Camera,
    title: "Studio Security Cameras & Recording",
    content: [
      "For safety, security, operational, and property-protection purposes, Freedom Dance Studio uses security cameras and recording equipment in designated areas of the studio and surrounding areas.",
      "Activities taking place in areas covered by our security cameras may be recorded and stored. By entering the studio, you acknowledge that you may be captured by our security and recording systems where legally permitted.",
      "Recorded footage may be used for security, safety investigations, incident documentation, protection of students, instructors, guests, staff, and property, and other legitimate studio purposes.",
      "Freedom Dance Studio does not intentionally place security cameras in areas where people have a reasonable expectation of privacy, including restrooms or changing areas.",
      "Access to recorded security footage is limited to authorized persons and may be disclosed when reasonably necessary for safety, security, legal, insurance, or law-enforcement purposes.",
    ],
  },

  // ======================================================
  // PHOTO & VIDEO
  // ======================================================

  {
    icon: Video,
    title: "Photo & Video Recording for Class Promotion",
    content: [
      "Freedom Dance Studio may photograph or record video during dance classes, workshops, social events, performances, rehearsals, special events, and other studio activities for promotional and educational purposes.",
      "Promotional photographs and videos may show students, instructors, guests, or other participants dancing, interacting, participating in classes, or attending studio events.",
      "Promotional content may be used to showcase our dance classes, instructors, students, events, studio community, and dance programs.",
      "This promotional photography and video recording is separate from the studio's security camera system. Security cameras are used primarily for safety and security purposes, while promotional photography and video are used to promote and document Freedom Dance Studio activities.",
    ],
  },

  // ======================================================
  // PROMOTIONAL USE
  // ======================================================

  {
    icon: Megaphone,
    title: "How Promotional Photos & Videos May Be Used",
    content: [
      "If you provide consent for promotional photography and video, Freedom Dance Studio may use your image, likeness, voice, or participation in photographs and video recordings created during studio activities for legitimate promotional purposes.",
      "Promotional content may appear on the Freedom Dance Studio website, social media platforms, digital advertisements, printed flyers, posters, promotional materials, email communications, studio displays, event promotions, and other marketing channels operated or authorized by Freedom Dance Studio.",
      "Content may be edited, cropped, combined with other images or video, captioned, or otherwise formatted for promotional purposes while maintaining the general context of the original recording.",
      "Freedom Dance Studio may continue to use promotional materials that were created and published before a withdrawal of consent, subject to applicable law and reasonable operational limitations.",
    ],
  },

  // ======================================================
  // PHOTO & VIDEO CONSENT
  // ======================================================

  {
    icon: FileCheck2,
    title: "Photo & Video Consent",
    content: [
      "By selecting the photo and video consent option on the membership or registration form, you voluntarily authorize Freedom Dance Studio to photograph or record you during eligible studio classes, workshops, events, and activities and to use those recordings for the promotional purposes described in this policy.",
      "You understand that promotional content may be viewed by members of the public when published on websites, social media platforms, advertisements, or other promotional channels.",
      "You understand that you will not receive payment, royalties, or other compensation for the use of photographs or videos covered by this consent unless otherwise agreed to in writing.",
      "Participation in photography or video recording does not guarantee that your image will be used in promotional materials. Freedom Dance Studio may choose which photographs or recordings to use.",
    ],
  },

  // ======================================================
  // WITHDRAWING CONSENT
  // ======================================================

  {
    icon: ShieldCheck,
    title: "Withdrawing Photo & Video Consent",
    content: [
      "Photo and video promotional consent is separate from your membership request and other required studio agreements.",
      "If you previously provided promotional photo or video consent and would like to withdraw that consent for future use, you may contact Freedom Dance Studio and request that your consent be removed from our records.",
      "A withdrawal request applies to future promotional use where reasonably practicable. It may not be possible to recall, remove, or alter materials that have already been printed, distributed, published, shared, reposted, or otherwise used before the withdrawal request was received.",
      "Freedom Dance Studio will make reasonable efforts to honor future withdrawal requests consistent with applicable law and the practical limitations of previously published promotional materials.",
    ],
  },

  // ======================================================
  // THIRD PARTY
  // ======================================================

  {
    icon: Users,
    title: "Third-Party Services",
    content: [
      "Our website may use third-party services for forms, communications, scheduling, payments, analytics, hosting, social media, marketing, or other business functions.",
      "These services may process information according to their own privacy policies and terms. We encourage you to review the privacy policies of third-party services you use through our website.",
      "When you interact directly with a third-party platform, such as a social media website, that platform may independently collect and process information according to its own policies.",
    ],
  },

  // ======================================================
  // COMMUNICATIONS
  // ======================================================

  {
    icon: Mail,
    title: "Communications",
    content: [
      "If you provide your contact information, we may contact you regarding your bookings, classes, memberships, studio rentals, events, inquiries, schedule changes, or other services you have requested.",
      "We may also send promotional communications about Freedom Dance Studio classes, workshops, events, memberships, or special offers where permitted by applicable law.",
      "You may contact us if you no longer wish to receive certain promotional communications.",
    ],
  },

  // ======================================================
  // MEMBERSHIP
  // ======================================================

  {
    icon: AlertCircle,
    title: "Membership & Independent Classes",
    content: [
      "Freedom Dance Studio offers memberships that may provide access to eligible studio classes and member benefits according to the membership selected and the studio's current membership policies.",
      "Freedom Dance Studio also hosts classes taught by independent instructors. Independent instructor classes are separate from Freedom Dance Studio memberships and are not automatically included in a studio membership.",
      "Independent instructors may manage their own registration, pricing, payments, attendance requirements, cancellations, and other class policies. Please review the information associated with each independent class before registering.",
      "The class schedule may include both Freedom Dance Studio classes and independent instructor classes. Members are responsible for reviewing the schedule and class information to determine which classes are included with their membership.",
    ],
  },
];

// ======================================================
// Helper
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
      staggerChildren: 0.07,
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
        {/* Decorative Background */}
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Back */}
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
            <p className="mt-5 max-w-3xl text-sm leading-7 text-base-content/65 sm:mt-6 sm:text-lg sm:leading-8">
              Freedom Dance Studio respects your privacy and is committed to
              being transparent about how we collect, use, protect, and handle
              information provided through our studio and website.
            </p>

            {/* Updated */}
            <div className="mt-5 text-xs text-base-content/50 sm:mt-6 sm:text-sm">
              Last updated: September 21, 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          QUICK PHOTO / VIDEO NOTICE
      ================================================== */}

      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            rounded-2xl
            border
            border-primary/20
            bg-primary/5
            p-5
            sm:rounded-3xl
            sm:p-7
          "
        >
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
              <Camera size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold sm:text-xl">
                Photo & Video for Class Promotion
              </h2>

              <p className="mt-2 text-sm leading-7 text-base-content/65 sm:text-base">
                From time to time, Freedom Dance Studio may photograph or record
                video during classes, workshops, and events to promote our dance
                community and classes. Promotional photo and video consent is
                separate from our security camera system and is addressed
                separately in our membership and registration forms.
              </p>

              <a
                href="#photo-and-video-recording-for-class-promotion"
                className="link link-primary mt-3 inline-block text-sm font-semibold"
              >
                Learn more about photo & video use →
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[250px_1fr] lg:gap-10">
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

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.title}
                    href={`#${createId(section.title)}`}
                    className="
                      block
                      rounded-lg
                      px-3
                      py-2.5
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
            viewport={{
              once: true,
              amount: 0.08,
            }}
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
                our students, instructors, renters, guests, independent
                instructors, and website visitors. This Privacy Policy explains
                how information may be collected, used, protected, and shared
                when you interact with our studio and website.
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
                PHOTO / VIDEO AGREEMENT CARD
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-secondary/20
                bg-secondary/5
                sm:rounded-3xl
              "
            >
              <div className="p-5 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary/10 text-secondary sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Camera size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                      Important
                    </p>

                    <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                      Photo & Video Consent Is Separate
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-base-content/65 sm:text-base">
                      Agreeing to our membership, liability waiver, or studio
                      policies does not automatically mean that you consent to
                      promotional photography or video use.
                    </p>

                    <p className="mt-3 text-sm leading-7 text-base-content/65 sm:text-base">
                      Promotional photo and video consent is presented
                      separately on applicable membership and registration forms
                      so you can make a specific choice regarding the use of
                      your image for studio promotion.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

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
                    Questions About Privacy or Media?
                  </h2>

                  <p className="mt-2 text-sm leading-7 opacity-85 sm:text-base">
                    If you have questions about this Privacy Policy, security
                    cameras, promotional photography, video recording, or how
                    your information is handled, please contact Freedom Dance
                    Studio.
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
