import { useRef, useState } from "react";

import video from "../../assets/interviewclip.mp4";

const Interview = ({ interviews, setInterviews }) => {
  const players = useRef(null);
  const closePlayer = (e) => {
    e.preventDefault();
    if (e.target === players.current) {
      setInterviews(false);
    }
  };
  return (
    <div
      className={`video-player ${interviews ? "" : "hide"}`}
      ref={players}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Interview;
