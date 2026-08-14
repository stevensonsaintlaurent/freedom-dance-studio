import React from "react";
import { Hero, Testimonials } from "../components";
import { Classes, Events, StudioRental } from "../pages";

const Landing = () => {
  return (
    <main>
      <Hero />
      <Events />
      <Classes />
      <StudioRental />
      <Testimonials />
    </main>
  );
};

export default Landing;
