import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  Sparkles,
  Ticket,
  PartyPopper,
  Music2,
  Plane,
  Users,
} from "lucide-react";

import heroImage from "../assets/recentClip1.jpeg";
import septemberSocial from "../assets/freeman.jpeg";
import workshop from "../assets/lady/sandra.jpg";
import havasu from "../assets/havasu.png";

/* =========================================================
   HERO DATA

   EVENT RULE:
   - eventStart determines whether an event is upcoming.
   - Past events are automatically removed.
   - The closest upcoming event is automatically displayed.
   - You do NOT need to manually change the active Hero.
========================================================= */

const HERO_DATA = {
  workshop: {
    type: "event",
    eyebrowKey: "hero.workshop.eyebrow",
    titleKey: "hero.workshop.title",
    highlightKey: "hero.workshop.highlight",
    descriptionKey: "hero.workshop.description",
    eventStart: "2026-08-22",
    dateKey: "hero.workshop.date",
    timeKey: "hero.workshop.time",
    price: "$25",
    priceLabelKey: "hero.workshop.priceLabel",
    secondaryPrice: "FREE",
    secondaryPriceLabelKey: "hero.workshop.secondaryPriceLabel",
    image: workshop,
    buttonKey: "hero.workshop.button",
    link: "/events",
    icon: Sparkles,
    accent: "secondary",
  },

  havasu: {
    type: "event",
    eyebrowKey: "hero.havasu.eyebrow",
    titleKey: "hero.havasu.title",
    highlightKey: "hero.havasu.highlight",
    descriptionKey: "hero.havasu.description",
    eventStart: "2026-08-28",
    dateKey: "hero.havasu.date",
    timeKey: "hero.havasu.time",
    priceKey: "hero.havasu.price",
    priceLabelKey: "hero.havasu.priceLabel",
    image: havasu,
    buttonKey: "hero.havasu.button",
    link: "/events",
    icon: Plane,
    accent: "primary",
  },

  social: {
    type: "event",
    eyebrowKey: "hero.social.eyebrow",
    titleKey: "hero.social.title",
    highlightKey: "hero.social.highlight",
    descriptionKey: "hero.social.description",
    eventStart: "2026-09-04",
    dateKey: "hero.social.date",
    timeKey: "hero.social.time",
    price: "$20",
    priceLabelKey: "hero.social.priceLabel",
    image: septemberSocial,
    buttonKey: "hero.social.button",
    link: "/book",
    icon: Music2,
    accent: "primary",
  },

  learn: {
    type: "message",
    eyebrowKey: "hero.learn.eyebrow",
    titleKey: "hero.learn.title",
    highlightKey: "hero.learn.highlight",
    descriptionKey: "hero.learn.description",
    buttonKey: "hero.learn.button",
    link: "/schedule",
    icon: CalendarCheck,
    accent: "primary",
    image: heroImage,
  },

  studio: {
    type: "message",
    eyebrowKey: "hero.studio.eyebrow",
    titleKey: "hero.studio.title",
    highlightKey: "hero.studio.highlight",
    descriptionKey: "hero.studio.description",
    buttonKey: "hero.studio.button",
    link: "/rentalStudio",
    icon: PartyPopper,
    accent: "secondary",
    image: heroImage,
  },

  community: {
    type: "message",
    eyebrowKey: "hero.community.eyebrow",
    titleKey: "hero.community.title",
    highlightKey: "hero.community.highlight",
    descriptionKey: "hero.community.description",
    buttonKey: "hero.community.button",
    link: "/schedule",
    icon: Users,
    accent: "primary",
    image: heroImage,
  },
};

/* =========================================================
   GET THE NEXT UPCOMING EVENT

   Events are automatically sorted by date.

   Example on August 20, 2026:

   August 22 → Salsa On2 Ladies Styling
   August 28 → SBK Lake Havasu
   September 4 → Freedom Dance Social

   Any event before today is ignored.
========================================================= */

const getUpcomingEvent = () => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const upcomingEvents = Object.values(HERO_DATA)
    .filter((hero) => {
      if (hero.type !== "event" || !hero.eventStart) {
        return false;
      }

      const eventDate = new Date(`${hero.eventStart}T00:00:00`);

      return eventDate >= today;
    })
    .sort((first, second) => {
      const firstDate = new Date(`${first.eventStart}T00:00:00`);
      const secondDate = new Date(`${second.eventStart}T00:00:00`);

      return firstDate - secondDate;
    });

  return upcomingEvents[0] || HERO_DATA.community;
};

const handleClick = (link) => {
  window.location.href = link;
};

const HeroAnimation = () => {
  const { t } = useTranslation();
  const hero = getUpcomingEvent();

  const HeroIcon = hero.icon;

  return (
    <div className="relative min-h-[100svh]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 lg:bg-black/65" />

      <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/75 to-black/25 lg:block" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black lg:hidden" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-20 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-10 lg:py-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="text-center lg:text-left">
              {/* Top Badge */}

              <div className="mb-3 inline-flex sm:mb-6 lg:mb-7">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white shadow-xl backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.16em]">
                  <Sparkles size={12} className="shrink-0 text-primary" />

                  {hero.type === "event"
                    ? "Upcoming Event at Freedom Dance"
                    : "Las Vegas Dance Community"}
                </div>
              </div>

              <div className="min-h-[420px] sm:min-h-[440px] lg:min-h-[500px]">
                {/* Eyebrow */}

                <div className="mb-3 flex items-center justify-center gap-2 lg:mb-5 lg:justify-start lg:gap-3">
                  <span className="h-px w-6 bg-primary sm:w-10" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-primary sm:text-xs sm:tracking-[0.2em]">
                    {t(hero.eyebrowKey)}
                  </span>
                </div>

                {/* Title */}

                <h1 className="text-[3rem] font-black leading-[0.9] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  {t(hero.titleKey)}

                  <br />

                  <span
                    className={
                      hero.accent === "secondary"
                        ? "text-secondary"
                        : "text-primary"
                    }
                  >
                    {t(hero.highlightKey)}
                  </span>
                </h1>

                {/* Description */}

                <p className="mx-auto mt-4 max-w-[340px] text-sm leading-6 text-white/75 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-7 lg:mx-0">
                  {t(hero.descriptionKey)}
                </p>

                {/* =================================================
                    EVENT INFORMATION
                ================================================= */}

                {hero.type === "event" && (
                  <div className="mx-auto mt-5 grid max-w-[390px] grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-black/45 backdrop-blur-xl">
                    {/* Date */}

                    <div className="p-2.5 text-center">
                      <CalendarCheck
                        size={15}
                        className="mx-auto mb-1 text-primary"
                      />

                      <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                        {t("hero.common.date")}
                      </p>

                      <p className="mt-0.5 text-[10px] font-bold text-white">
                        {t(hero.dateKey)}
                      </p>
                    </div>

                    {/* Time */}

                    <div className="border-x border-white/10 p-2.5 text-center">
                      <Clock3
                        size={15}
                        className="mx-auto mb-1 text-secondary"
                      />

                      <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                        {t("hero.common.time")}
                      </p>

                      <p className="mt-0.5 text-[10px] font-bold text-white">
                        {t(hero.timeKey)}
                      </p>
                    </div>

                    {/* Price */}

                    <div className="p-2.5 text-center">
                      <Ticket size={15} className="mx-auto mb-1 text-primary" />

                      <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                        {t("hero.common.price")}
                      </p>

                      {hero.secondaryPrice ? (
                        <>
                          <p className="mt-0.5 text-[9px] font-black text-primary">
                            {hero.secondaryPrice}
                          </p>

                          <p className="text-[7px] text-white/50">
                            {hero.secondaryPriceLabelKey
                              ? t(hero.secondaryPriceLabelKey)
                              : ""}
                          </p>

                          <p className="mt-0.5 text-[9px] font-black text-primary">
                            {hero.priceKey ? t(hero.priceKey) : hero.price}
                          </p>

                          <p className="text-[7px] text-white/50">
                            {hero.priceLabelKey ? t(hero.priceLabelKey) : ""}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="mt-0.5 text-[10px] font-black text-primary">
                            {hero.priceKey ? t(hero.priceKey) : hero.price}
                          </p>

                          {hero.priceLabel && (
                            <p className="text-[7px] text-white/50">
                              {hero.priceLabelKey ? t(hero.priceLabelKey) : ""}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* =================================================
                    BUTTONS
                ================================================= */}

                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    to={hero.link}
                    state={{
                      bookingData: {
                        type: hero.type,
                        event: t(hero.titleKey),
                        highlight: t(hero.highlightKey),
                        description: t(hero.descriptionKey),
                        date: hero.dateKey ? t(hero.dateKey) : "",
                        time: hero.timeKey ? t(hero.timeKey) : "",
                        price: hero.priceKey ? t(hero.priceKey) : hero.price,
                        priceLabel: hero.priceLabelKey
                          ? t(hero.priceLabelKey)
                          : "",
                        secondaryPrice: hero.secondaryPrice,
                        secondaryPriceLabel: hero.secondaryPriceLabelKey
                          ? t(hero.secondaryPriceLabelKey)
                          : "",
                        location: t("hero.common.studioName"),
                      },
                    }}
                    className="btn btn-primary btn-md w-full rounded-full px-6 shadow-2xl shadow-primary/25 sm:btn-lg sm:w-auto sm:px-8"
                  >
                    <HeroIcon size={18} />

                    {t(hero.buttonKey)}

                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/studiopricing"
                    className="btn btn-md w-full rounded-full border border-white/20 bg-white/10 px-6 text-white backdrop-blur-xl sm:btn-lg sm:w-auto sm:px-8"
                  >
                    <PartyPopper size={18} />
                    {t("hero.common.rentStudio")}
                  </Link>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE IMAGE
            ================================================= */}

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-1.5 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem] sm:p-2">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]">
                  <img
                    src={hero.image}
                    alt={
                      hero.type === "event"
                        ? hero.title
                        : t("hero.common.imageAlt")
                    }
                    className={`h-[270px] w-full sm:h-[430px] lg:h-[620px] ${
                      hero.type === "event" ? "object-contain" : "object-cover"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

                  {/* =================================================
                      EVENT CARD
                  ================================================= */}

                  {hero.type === "event" ? (
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                      <div className="rounded-xl border border-white/15 bg-black/60 p-3 backdrop-blur-xl sm:rounded-2xl sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[9px] font-black uppercase tracking-wider text-primary-content">
                              <Sparkles size={9} />
                              {t("hero.common.upcomingEvent")}
                            </div>

                            <h3 className="truncate text-base font-black text-white sm:text-2xl">
                              {t(hero.titleKey)}{" "}
                              <span
                                className={
                                  hero.accent === "secondary"
                                    ? "text-secondary"
                                    : "text-primary"
                                }
                              >
                                {t(hero.highlightKey)}
                              </span>
                            </h3>
                          </div>

                          <div className="hidden rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center sm:block">
                            {hero.secondaryPrice ? (
                              <>
                                <p className="text-[9px] uppercase tracking-wider text-white/40">
                                  {t("hero.common.members")}
                                </p>

                                <p className="text-lg font-black text-primary">
                                  {t("hero.common.free")}
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-wider text-white/40">
                                  {t("hero.common.nonMembers")}
                                </p>

                                <p className="text-lg font-black text-primary">
                                  {hero.priceKey
                                    ? t(hero.priceKey)
                                    : hero.price}
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="text-[9px] uppercase tracking-wider text-white/40">
                                  {hero.priceLabelKey
                                    ? t(hero.priceLabelKey)
                                    : t("hero.common.cover")}
                                </p>

                                <p className="text-lg font-black text-primary">
                                  {hero.priceKey
                                    ? t(hero.priceKey)
                                    : hero.price}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* =================================================
                       MESSAGE CARD
                    ================================================= */

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                      <div className="rounded-xl border border-white/10 bg-black/55 p-3 backdrop-blur-xl sm:rounded-2xl sm:p-5">
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary sm:text-xs">
                          {t("hero.common.studioName")}
                        </p>

                        <p className="mt-1 text-base font-black text-white sm:text-2xl">
                          {t("hero.common.danceLearnCreate")}
                        </p>

                        <p className="mt-1 text-xs text-white/60 sm:text-sm">
                          {t("hero.common.communitySpaceFreedom")}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
