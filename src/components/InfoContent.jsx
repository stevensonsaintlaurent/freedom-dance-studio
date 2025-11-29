import "./Navbar/About/About.css";
// import about_img from "../../../assets/first-clip.jpg";
// import play_icon from "../../../assets/play-icon.png";
import concert from "../assets/concert-freedom-jazz/P1991000.jpg";
import concert_1 from "../assets/concert-freedom-jazz/P1990994.jpg";
import concert_2 from "../assets/concert-freedom-jazz/P1990974.jpg";
import { Bachata } from "./Bachata";

export const InfoContent = ({ setPlayState }) => {
  console.log(setPlayState);
  return (
    <div className="about info-content">
      <div className="about-right  info-dance">
        <Bachata />

        <h2>Music Community</h2>
        <img src={concert} alt="" className="about-img" />
        <h4> INSPIRING CREATIVITY THROUGH THE POWER OF MUSIC!</h4>
        <p>! WE WELCOME HIGH SCHOOL STUDENTS AND ADULTS!</p>

        <p>
          DISCOVER THE JOY OF MUSIC IN A FUN, ENCOURAGING, AND CREATIVE
          ENVIRONMENT!
        </p>

        <h3> JAZZ BAND</h3>
        <img src={concert_1} alt="" className="about-img" />
        <p>
          EXPLORE IMPROVISATION AND CREATIVITY LEARN ESSENTIAL TECHNIQUES PLAY
          AND COLLABORATE WITH FELLOW MUSICIANS
        </p>
        <img src={concert_2} alt="" className="about-img" />

        <h3> CLASSICAL ORCHESTRA </h3>
        <p>
          PERFORM TIMELESS PIECES STRENGTHEN YOUR MUSICAL SKILLS EXPERIENCE THE
          BEAUTY OF ORCHESTRAL MUSIC
        </p>

        <h3> WHY JOIN US?</h3>
        <p>
          WHETHER YOU’RE AN INTERMEDIATE OR ADVANCED MUSICIAN, OUR PROGRAMS HELP
          YOU GROW, SHINE, AND SHARE YOUR LOVE OF MUSIC.
        </p>

        <h3> JOIN THE COMMUNITY!</h3>
        <p>
          COME MAKE MUSIC WITH US AT FREEDOM DANCE STUDIO — WHERE CREATIVITY,
          CONNECTION, AND EXPRESSION COME ALIVE!
        </p>
      </div>
      {/* ========== left to right ========== */}
      <div className="about-left">
        {/* <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        /> */}
      </div>
    </div>
  );
};
