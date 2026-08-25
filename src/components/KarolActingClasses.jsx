import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Clock3,
  MessageCircle,
  Mic2,
  Sparkles,
  Star,
  Theater,
  Users,
  X,
} from "lucide-react";

import karol_profil from "../public/images/1.jpeg";
import karol_profil1 from "../public/images/2.jpeg";
import karol_profil2 from "../public/images/3.jpeg";
import karol_profil3 from "../public/images/4.jpeg";

const galleryImages = [
  { src: karol_profil, alt: "Karol Di Nassif - Acting Instructor" },
  { src: karol_profil1, alt: "Kids Acting Classes at Freedom Dance Studio" },
  { src: karol_profil2, alt: "Kids Acting Classes promotional flyer" },
  { src: karol_profil3, alt: "Kids Acting Classes promotional flyer" },
];

const experience = [
  {
    icon: Camera,
    title: "TV & Film",
    text: "Experienced in Brazilian television, soap operas, children's programming and entertainment.",
  },
  {
    icon: Theater,
    title: "50+ Stage Productions",
    text: "Over 50 stage productions with multiple awards and extensive live performance experience.",
  },
  {
    icon: Mic2,
    title: "TV Presenter",
    text: "Presented for major Brazilian sports and entertainment television networks.",
  },
  {
    icon: Clapperboard,
    title: "Kids TV Experience",
    text: "Years of experience preparing young performers for television and acting opportunities.",
  },
];

const benefits = [
  "Build confidence and self-expression",
  "Learn how to perform in front of a camera",
  "Develop storytelling and improvisation skills",
  "Practice audition and performance techniques",
  "Make new friends in a creative environment",
  "Learn from a professional working actress",
];

const pricingPlans = [
  {
    title: "Monthly Program",
    price: "$80",
    suffix: "/ month",
    description:
      "The best value for children who want to attend the weekly acting program.",
    icon: CalendarDays,
    featured: true,
    button: "Join for $80/month",
    items: [
      "Weekly Friday acting class",
      "Ages 6–12",
      "Acting and performance training",
      "Camera and audition practice",
      "Confidence and creativity development",
    ],
  },
  {
    title: "Drop-In Class",
    price: "$25",
    suffix: "/ class",
    description:
      "Perfect for families who want to try a class or attend occasionally.",
    icon: Star,
    featured: false,
    button: "Book a $25 Class",
    items: [
      "One Friday acting class",
      "Ages 6–12",
      "No monthly commitment",
      "Learn acting fundamentals",
      "Fun creative activities",
    ],
  },
];

export default function KarolActingClasses() {
  const [selectedImage, setSelectedImage] = useState(null);

  const bookingMessage = encodeURIComponent(
    "Hi Karol! I would like to reserve a spot for my child in the Kids Acting Classes at Freedom Dance Studio. Can you please send me the registration information?",
  );

  const whatsappUrl = `https://wa.me/17024967934?text=${bookingMessage}`;

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : (prev + 1) % galleryImages.length,
    );
  };

  const previousImage = () => {
    setSelectedImage((prev) =>
      prev === null
        ? galleryImages.length - 1
        : (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <div className="w-full overflow-hidden pb-5">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                NEW INDEPENDENT CLASS
              </div>

              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Acting Classes
                <span className="block text-yellow-300">For Kids</span>
              </h1>

              <p className="mt-5 text-xl font-medium text-purple-100 sm:text-2xl">
                Let your child shine on stage and in front of the camera.
              </p>

              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-purple-100/80 lg:mx-0">
                A creative acting experience designed to help children discover
                confidence, imagination, storytelling and the joy of performing.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
                <div className="badge badge-lg border-white/20 bg-white/10 px-4 py-4 text-white">
                  <Users className="mr-2 h-4 w-4" />
                  Ages 6–12
                </div>

                <div className="badge badge-lg border-white/20 bg-white/10 px-4 py-4 text-white">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Fridays
                </div>

                <div className="badge badge-lg border-white/20 bg-white/10 px-4 py-4 text-white">
                  <Clock3 className="mr-2 h-4 w-4" />
                  4:00 PM
                </div>
              </div>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-warning btn-lg rounded-full px-7 shadow-xl transition hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  Reserve a Spot
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#karol-about"
                  className="btn btn-outline btn-lg rounded-full border-white/40 px-7 text-white hover:border-white hover:bg-white hover:text-purple-900"
                >
                  Meet Karol
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mx-auto w-full max-w-md"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur">
                <img
                  src={karol_profil3}
                  alt="Karol Di Nassif"
                  className="h-[430px] w-full rounded-[1.5rem] object-cover object-top sm:h-[500px]"
                />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/60 p-4 text-white backdrop-blur-lg">
                  <p className="text-xs font-bold uppercase tracking-wider text-yellow-300">
                    Instructor
                  </p>

                  <h2 className="mt-1 text-2xl font-black">Karol Di Nassif</h2>

                  <p className="mt-1 text-sm text-white/80">
                    Actress • TV Presenter • Stage Performer • Acting Coach
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="bg-base-100">
        <div className="mx-auto grid max-w-6xl gap-3 px-5 py-5 sm:grid-cols-3 lg:px-8">
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm">
            <CalendarDays className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="font-bold">Every Friday</p>
              <p className="text-xs text-base-content/60">
                Starting September 11, 2026
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm">
            <Clock3 className="h-6 w-6 shrink-0 text-secondary" />
            <div>
              <p className="font-bold">4:00 PM</p>
              <p className="text-xs text-base-content/60">
                Weekly acting class
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm">
            <Users className="h-6 w-6 shrink-0 text-accent" />
            <div>
              <p className="font-bold">Ages 6–12</p>
              <p className="text-xs text-base-content/60">Creative learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-base-200">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge badge-warning mb-4">SIMPLE PRICING</div>

            <h2 className="text-3xl font-black sm:text-4xl">
              Choose the Best Option for Your Child
            </h2>

            <p className="mt-3 text-base text-base-content/60">
              Give your child the opportunity to learn, perform and grow in a
              fun and creative environment.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`relative overflow-hidden rounded-3xl bg-base-100 p-7 shadow-lg ${
                    plan.featured
                      ? "border-2 border-primary shadow-xl"
                      : "border border-base-300"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute right-4 top-4">
                      <span className="badge badge-primary">BEST VALUE</span>
                    </div>
                  )}

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      plan.featured
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <p
                    className={`mt-5 text-sm font-bold uppercase tracking-wider ${
                      plan.featured ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {plan.title}
                  </p>

                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="mb-2 text-base text-base-content/60">
                      {plan.suffix}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-base-content/60">
                    {plan.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {plan.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn mt-7 w-full rounded-full ${
                      plan.featured
                        ? "btn-primary"
                        : "btn-outline btn-secondary"
                    }`}
                  >
                    <MessageCircle className="h-5 w-5" />
                    {plan.button}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </motion.div>
              );
            })}
          </div>

          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center">
            <p className="text-sm font-medium">
              <span className="font-black text-primary">
                Save with the monthly option:
              </span>{" "}
              $80/month gives your child access to the weekly Friday acting
              class instead of paying $25 each time.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT KAROL */}
      <section
        id="karol-about"
        className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge badge-secondary mb-4">
              MEET YOUR INSTRUCTOR
            </div>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Learn from someone who has lived the world of{" "}
              <span className="text-primary">TV, film and theater.</span>
            </h2>

            <div className="mt-5 space-y-3 text-sm leading-7 text-base-content/70 sm:text-base">
              <p>
                Karol's artistic journey began at just 12 years old when she
                became a reporter for <strong>"Angel Mix"</strong>, a children's
                show on Rede Globo.
              </p>

              <p>
                She went on to appear in Brazilian television productions
                including <strong>"Sítio do Pica Pau Amarelo"</strong>,{" "}
                <strong>"Páginas da Vida"</strong> and the Emmy-winning{" "}
                <strong>"Caminho das Índias"</strong>.
              </p>

              <p>
                Her stage career includes more than 50 productions and multiple
                awards. She has also worked as a stage manager and backstage
                manager.
              </p>

              <p>
                She has also presented television entertainment and sports
                programming and has experience preparing young performers for
                television and acting opportunities.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-6 rounded-full"
            >
              <MessageCircle className="h-5 w-5" />
              Talk to Karol
            </a>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {experience.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-black">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-base-content/60">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-base-200">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="badge badge-primary mb-4">THE EXPERIENCE</div>

            <h2 className="text-3xl font-black sm:text-4xl">
              More Than an Acting Class
            </h2>

            <p className="mt-3 text-base text-base-content/60">
              Give your child a place to express themselves, build confidence
              and discover what they can do.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL FINALE */}
      <section className="bg-gradient-to-r from-purple-950 via-violet-900 to-purple-950">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-7 text-center text-white backdrop-blur sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-300 text-purple-900">
              <Star className="h-7 w-7 fill-current" />
            </div>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
              Special Finale
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Special Class with Claudio Galvan
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-purple-100 sm:text-base">
              Featuring Claudio Galvan, the voice of Disney's Brazilian Donald
              Duck.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning mt-6 rounded-full px-7"
            >
              Reserve a Spot
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="badge badge-secondary mb-4">KIDS ACTING PROGRAM</div>

          <h2 className="text-3xl font-black sm:text-4xl">See the Program</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-base-300 shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`h-72 w-full transition duration-500 group-hover:scale-105 ${
                  index === 0
                    ? "object-cover object-top"
                    : "object-contain bg-base-200"
                }`}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
                <div className="rounded-full bg-white p-3 opacity-0 shadow-lg transition group-hover:opacity-100">
                  <Camera className="h-5 w-5 text-black" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* FINAL BOOKING CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-5xl px-5 py-10 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto h-8 w-8 text-primary-content" />

          <h2 className="mt-4 text-3xl font-black text-primary-content sm:text-4xl">
            Ready to Let Your Child Shine?
          </h2>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <span className="badge badge-warning badge-lg px-5 py-4 font-black">
              $80 / Month
            </span>

            <span className="badge badge-outline badge-lg border-primary-content px-5 py-4 font-black text-primary-content">
              $25 / Class
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-content/80 sm:text-base">
            Contact Karol today to reserve your child's place in the Kids Acting
            Classes at Freedom Dance Studio.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning rounded-full px-7"
            >
              <MessageCircle className="h-5 w-5" />
              Book Through WhatsApp
            </a>

            <a
              href="tel:+17024967934"
              className="btn btn-outline rounded-full border-primary-content/50 text-primary-content hover:border-primary-content hover:bg-primary-content hover:text-primary"
            >
              Call (702) 496-7934
            </a>
          </div>

          <p className="mt-5 text-xs text-primary-content/60">
            Freedom Dance Studio • 3110 E Sunset Rd, Las Vegas, NV 89120
          </p>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="btn btn-circle btn-ghost absolute right-4 top-4 z-10 text-white"
          >
            <X />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="btn btn-circle btn-neutral absolute left-3 z-10"
          >
            <ChevronLeft />
          </button>

          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] max-w-[88vw] rounded-2xl object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="btn btn-circle btn-neutral absolute right-3 z-10"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
