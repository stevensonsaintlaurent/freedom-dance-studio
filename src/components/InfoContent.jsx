import "./Navbar/About/About.css";
import Party_1 from "../assets/sbkParty/FJ8A6466.jpg";
import Party_2 from "../assets/sbkParty/FJ8A6603.jpg";
import Party_3 from "../assets/sbkParty/FJ8A6605.jpg";
// import about_img from "../../../assets/first-clip.jpg";
// import play_icon from "../../../assets/play-icon.png";
import concert from "../assets/concert-freedom-jazz/P1991000.jpg";
import concert_1 from "../assets/concert-freedom-jazz/P1990994.jpg";
import concert_2 from "../assets/concert-freedom-jazz/P1990974.jpg";
import { Bachata } from "./Bachata";

export const InfoContent = ({ setPlayState }) => {
  return (
    <div className="about info-content">
      <div className="about-right  info-dance">
        <Bachata />

        <h2>Music Community</h2>
        <img src={concert} alt="" className="about-img" />
        <h4> Inspiring creativity through the power of music!</h4>
        <p>! We welcome high school student and adults !</p>

        <p>
          Discover the joy of music in a fun, encouraging, and create discover
          the of music in a fun, encouraging, and creative environment!
        </p>

        <h3> JAZZ BAND</h3>
        <img src={concert_1} alt="" className="about-img" />
        <p>
          Explore Improvisation and creativity learn essential techniques play
          and collaborate with fellow musicians
        </p>
        <img src={concert_2} alt="" className="about-img" />

        <h3> CLASSICAL ORCHESTRA </h3>
        <p>
          Perform timeless pieces strengthen your musical skills experience the
          beauty of orchestral music
        </p>

        <h3> WHY JOIN US?</h3>
        <p>
          Whether you're an instermediate or avanced musician,our programs help
          you grow, shine and share your love of music.
        </p>

        <h3> JOIN THE COMMUNITY!</h3>
        <p>
          Come make music with us at Freedom Dance Studio - Where creativity
          connection, and expression come alive!
        </p>
      </div>
      {/* ========== left to right ========== */}
      <div className="about-left">
        <img src={Party_1} alt="" className="about-img" />
        <img src={Party_2} alt="" className="about-img" />
        <img src={Party_3} alt="" className="about-img" />

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
