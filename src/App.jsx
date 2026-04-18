import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Programs from "./components/Navbar/Programs/Programs";
import Title from "./components/Navbar/Title/Title";
import About from "./components/Navbar/About/About";
// import Dance from "./components/Navbar/Dance/Dance";
import Testimonials from "./components/Navbar/Testimonials/Testimonials";
import Contact from "./components/Navbar/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { InfoContent } from "./components/InfoContent";
import Interview from "./components/VideoPlayer/Interview";
import MindbodySchedulesWidget from "./schedule/Schedules";
import Instructor from "./components/instructor/Instructor";

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [interviews, setInterviews] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMobileMenu(false);
    }, 10000);
  });
  return (
    <div>
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

      <Hero setInterviews={setInterviews} />
      <Title subtitle="Book through MindBody" title="Schedule a Class" />

      <MindbodySchedulesWidget />

      <div className="container">
        <Instructor playState={playState} setPlayState={setPlayState} />
        <About setPlayState={setPlayState} />
        <Title subtitle="Our PROGRAM" title="What We Offer" />
        <InfoContent />

        <Programs />
        <Testimonials />

        <Title subtitle="Contact Us" title="Get in Touch" />

        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Interview setInterviews={setInterviews} interviews={interviews} />
    </div>
  );
};

export default App;
