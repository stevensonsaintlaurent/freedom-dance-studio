import "./About.css";
// import about_img from "../../../assets/poster.jpg";
import play_icon from "../../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        {/* <img src={about_img} alt="" className="about-img" /> */}
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>

      <div className="about-right">
        <h3>About us</h3>
        <h2>Welcome to Freedom Dance!</h2>
        <p>
          At Freedom Dance, we believe in the transformative power of dance. Our
          passion for movement and expression drives us to create a space where
          individuals can discover the joy, creativity, and freedom that dance
          brings to life.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and empower people of all ages and
          backgrounds through the art of dance. We aim to cultivate a vibrant
          and inclusive community where everyone feels welcome to explore the
          world of dance, express themselves, and connect with others who share
          their love for movement.
        </p>

        <h3>What Sets Us Apart</h3>
        <h3>Expert Instructors</h3>
        <p>
          At Freedom Dance, we take pride in our team of experienced and
          passionate dance instructors. Each instructor brings a unique style
          and expertise to our classes, ensuring a diverse and enriching
          experience for our students.
        </p>

        <h3>Variety of Dance Styles</h3>
        <p>
          Whether you’re a beginner taking your first steps or an experienced
          dancer looking to refine your skills, we offer a variety of dance
          styles to suit every interest. From bachata dominicana,bachata
          sensual,kizomba to urban Kiz Tarraxo konpa and Salsa2 , there’s
          something for everyone at Freedom Dance.
        </p>

        <h3>Inclusive Community</h3>
        <p>
          Dance knows no boundaries, and neither do we. We foster an inclusive
          and supportive community where individuals of all backgrounds,
          abilities, and levels of experience can come together to share in the
          joy of dance.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision Freedom Dance as not just a dance studio, but a hub of
          creativity and inspiration. A place where dreams take flight, and
          individuals discover the limitless possibilities that dance offers for
          personal growth and self-expression.
        </p>

        <h3>Join Us on the Dance Floor</h3>
        <p>
          Whether you’re looking to learn a new dance style, stay active, or
          simply immerse yourself in the joy of movement, Freedom Dance is the
          perfect place for you. Join us on the dance floor, and let’s embark on
          this exciting journey together! Freedom Dance – Where Passion Meets
          Expression.
        </p>
      </div>
    </div>
  );
};

export default About;
