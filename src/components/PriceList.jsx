import React from "react";
import social from "../../../assets/prices2.jpg";
export default function PriceList() {
  return (
    <div>
      <div className="caption">
        <img src={social} alt="" />
        <p>Price List</p>
        {/* <button className="btn">Book Now</button> */}
      </div>
    </div>
  );
}
