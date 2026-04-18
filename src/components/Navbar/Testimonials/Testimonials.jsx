import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import next_icon from "../../../assets/next-icon.png";
import back_icon from "../../../assets/back-icon.png";
import TestiSlider from "./TestiSlider";
import { testimonials } from "../Contact/data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const [people, setPeople] = useState(testimonials);
  const [currentPerson, setCurrentPerson] = useState(0);
  console.log(people);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(slider);
  }, [currentPerson]);

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -40) {
      tx -= 25;

      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;

      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };
  return (
    <div className="slider-container ">
      {/* <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button> */}
      <div className="slide">
        <TestiSlider />
      </div>
    </div>
  );
};

export default Testimonials;
