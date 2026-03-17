import React, { useRef, useState } from "react";
import "./Instructor.css";
import desmond from "../../assets/adriana.jpg";
import steveandksenia from "../../assets/steveandkcenya.jpg";
import { teachers } from "./data-instructor";
import play_icon from "../../assets/play-icon.png";

export default function Instructor() {
  const [showFullBio, setShowFullBio] = useState();
  const [instructoVideo, setInstructorVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState();

  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setInstructorVideo(false);
    }
  };

  return (
    <section className=" instructors instructors-section">
      <h1>Meet Our Instructors</h1>

      <div>
        {teachers.map((info) => {
          const { id, href, role, image, bio, name, style, discipline, video } =
            info;
          console.log(id);
          return (
            <div
              key={id}
              className=" instructor-card"
              style={{ position: "relative" }}
            >
              <img src={image} />
              <h2> {name}</h2>
              <p className="role">{discipline}</p>
              <p>{showFullBio === id ? bio : bio.substring(0, 90) + "..."}</p>
              <button
                className="btn-text"
                onClick={(e) => {
                  e.preventDefault();
                  if (showFullBio === id) return setShowFullBio(null);

                  setShowFullBio(id);
                }}
              >
                {showFullBio === id ? "Less" : "More"}
              </button>
              {/* <img
                src={play_icon}
                alt={name}
                className="play-icon inst"
                onClick={(e) => {
                  e.preventDefault();
                  setInstructorVideo(true);
                }}
              /> */}
              {/* <div
                className={`video-player ${instructoVideo ? "" : "hide"}`}
                ref={player}
                onClick={closePlayer}
              >
                <video src={video} autoPlay muted controls></video>
              </div> */}
              {/* <a href={href}>{"steven"}</a> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
