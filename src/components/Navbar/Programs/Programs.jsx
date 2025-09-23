import "./Program.css";
import group from "../../../assets/studios-spt.jpg";
import prive from "../../../assets/schedules-spt.jpg";
import social from "../../../assets/workshops-salsa.jpg";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={group} alt="" />

        <div className="caption">
          <img src={group} alt="" />
          <p>Event</p>
        </div>
      </div>

      <div className="program">
        <img src={prive} alt="" />

        <div className="caption">
          <img src={prive} alt="" />
          <p>Schedules</p>
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
