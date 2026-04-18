import { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../../assets/next-icon.png";
import back_icon from "../../../assets/back-icon.png";
import TestiSlider from "./TestiSlider";
import { testimonials } from "../Contact/data";

const Testimonials = () => {
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
    <div className="slider-container">
      {/* <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      /> */}
      <TestiSlider />;
    </div>
  );
};

export default Testimonials;
