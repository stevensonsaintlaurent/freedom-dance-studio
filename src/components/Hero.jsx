import React from "react";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-black lg:min-h-screen"
    >
      <HeroAnimation />
    </section>
  );
};

export default Hero;
