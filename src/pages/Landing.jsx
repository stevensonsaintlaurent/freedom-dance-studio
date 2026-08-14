import React from "react";
import { Hero } from "../components";
import { Classes, Events, StudioRental } from "../pages";

const Landing = () => {
  return (
    <main>
      <Hero />
      <Classes />
      <StudioRental />
      <Events />
    </main>
  );
};

export default Landing;
