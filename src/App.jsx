import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Programs from "./components/Navbar/Programs/Programs";
import Title from "./components/Navbar/Title/Title";
import About from "./components/Navbar/About/About";
import Dance from "./components/Navbar/Dance/Dance";
import Testimonials from "./components/Navbar/Testimonials/Testimonials";
import Contact from "./components/Navbar/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Dance Photos" />
        <Dance />
        <Title subtitle="TESTIMONIALS" title="What Dancers Says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
