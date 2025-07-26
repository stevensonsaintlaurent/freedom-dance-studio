import "./Program.css";
import group from "../../../assets/prices2.jpg";
import prive from "../../../assets/schedule1.jpg";
import social from "../../../assets/event2.jpg";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={group} alt="" />

        <div className="caption">
          <img src={group} alt="" />
          <p>Prices</p>
        </div>
      </div>

      <div className="program">
        <img src={prive} alt="" />

        <div className="caption">
          <img src={prive} alt="" />
          <p>Schedule</p>
        </div>
      </div>

      <div className="program">
        <img src={social} alt="" />

        <div className="caption">
          <img src={social} alt="" />
          <p>Event</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
