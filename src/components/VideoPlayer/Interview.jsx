import { useRef } from "react";
import "./VideoPlayer.css";
import video from "../../assets/interviewclip.mp4";

const Interview = ({ interviewClips, setInterviewClips }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setInterviewClips(false);
    }
  };
  return (
    <div
      className={`video-player ${interviewClips ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Interview;
