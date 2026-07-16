import React from "react";
import group from "../../../assets/studios-spt.jpg";
import BookEvent from "../Contact/BookEvent";
import { faLess } from "@fortawesome/free-brands-svg-icons";

const EventCenter = ({ show, setShow }) => {
  return (
    <div>
      <div className="caption">
        <img src={group} alt="" />
        <p>Event Center</p>
        <button className="btn" onClick={() => setShow(true)}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCenter;
