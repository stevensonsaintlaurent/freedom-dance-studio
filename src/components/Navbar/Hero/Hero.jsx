import "./Hero.css";
import dark_arrow from "../../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>WELCOME TO OUR DANCE Academy</h1>

        <p>
          We’re excited to have you join our community of artists and
          performers! Our studio offers a variety of dance classes and music
          lessons for all ages and skill levels. We also host events and
          workshops to celebrate creativity and connection. Thank you for being
          here, and we can’t wait to create and perform together!
        </p>

        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
