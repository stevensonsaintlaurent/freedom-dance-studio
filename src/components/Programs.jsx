import "./Program.css";
import group from "../../../assets/studios-spt.jpg";
import prive from "../../../assets/schedules-spt.jpg";
import social from "../../../assets/prices2.jpg";
import { useEffect, useState } from "react";
import EventCenter from "./EventCenter";
import Schedule from "./Schedule";
import PriceList from "./PriceList";
import BookEvent from "../Contact/BookEvent";
import useOnSudmit from "../hooks/useOnSudmit";

const Programs = () => {
  const [programs, setPrograms] = useState(true);
  const [show, setShow] = useState(false);
  const { hidden } = useOnSudmit();
  const [result, setResult] = useState("");

  useEffect(() => {
    return () => {
      setPrograms(true);
    };
  }, [setPrograms]);

  return (
    <div className="programs">
      {/* ======= Event Center ======= */}

      {show ? (
        <BookEvent
          show={show}
          setShow={setShow}
          result={result}
          setResult={setResult}
        />
      ) : (
        <div className="program">
          <EventCenter show={show} setShow={setShow} />
          <img src={group} alt="" />
        </div>
      )}

      {/* ======= Schedule ======= */}

      <div className={!show ? "program" : "program hidden"}>
        <Schedule />
        <img src={prive} alt="" />
      </div>

      {/* ======= Price List ======= */}

      <div className={!show ? "program" : "program hidden"}>
        <PriceList />
        <img src={social} alt="" />
      </div>
    </div>
  );
};

export default Programs;
