import React from "react";
import "./Program.css";
import prive from "../../../assets/schedules-spt.jpg";

const Schedule = () => {
  return (
    <div>
      <div className="caption">
        <img src={prive} alt="" />
        <p>Schedules</p>
        {/* <button className="btn">Book Now</button> */}
      </div>
    </div>
  );
};

export default Schedule;
