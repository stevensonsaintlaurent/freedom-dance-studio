import React, { useRef, useState } from "react";
import "./instructor.css";
import { teachers } from "./data-instructor";
import BookSchedule from "../Navbar/Contact/BookSchedule";
import SingleInstructor from "./SingleInstructor";

export default function Instructor() {
  const [showFullBio, setShowFullBio] = useState();
  const [instructoVideo, setInstructorVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState();
  const [hidden, setHidden] = useState(true);

  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setInstructorVideo(false);
    }
  };

  return (
    <section className=" instructors instructors-section">
      {hidden && <h1>Meet Our Instructors</h1>}
      <SingleInstructor
        teachers={teachers}
        setInstructorVideo={setInstructorVideo}
        setPlayVideo={setPlayVideo}
        setShowFullBio={setShowFullBio}
        showFullBio={showFullBio}
        instructoVideo={instructoVideo}
        playVideo={playVideo}
        player={player}
        closePlayer={closePlayer}
        setHidden={setHidden}
        hidden={hidden}
      />
    </section>
  );
}
