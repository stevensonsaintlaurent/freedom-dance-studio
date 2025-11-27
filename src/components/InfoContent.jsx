import "./Navbar/About/About.css";
// import about_img from "../../../assets/first-clip.jpg";
// import play_icon from "../../../assets/play-icon.png";

export const InfoContent = ({ setPlayState }) => {
  console.log(setPlayState);
  return (
    <div className="about info-content">
      <div className="about-left">
        {/* <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        /> */}
      </div>

      <div className="about-right  info-dance">
        <h2>Bachata</h2>
        <p>
          We offer vibrant and engaging Bachata classes for all skill levels.
          Our experienced instructors guide you through the sensual rhythms and
          smooth movements of Bachata, focusing on connection, musicality, and
          technique. Whether you’re a complete beginner or looking to refine
          your style, our supportive community and welcoming atmosphere will
          help you gain confidence on the dance floor. Join us to experience the
          joy, passion, and freedom of Bachata!
        </p>

        <h2>Salsa</h2>
        <p>
          We invite you to experience the energy and excitement of Salsa! Our
          Salsa classes are designed for dancers of all levels, from absolute
          beginners to seasoned enthusiasts. Learn fundamental steps, partner
          work, and dynamic turn patterns in a fun, supportive environment led
          by passionate instructors. At our studio, you’ll discover the
          infectious rhythms, vibrant culture, and social connection that make
          Salsa one of the world’s most popular dances.
        </p>

        <h2>Kizomba</h2>
        <p>
          Kizomba is a popular dance originating from Angola. This beautiful
          partner dance combines smooth, flowing movements with rhythmic music,
          creating a unique and engaging experience for dancers of all levels.
          Our skilled instructors will guide you through the basic steps and
          techniques, helping you build confidence and develop your style. Join
          us for classes, workshops, and social events, where you can connect
          with others who share your passion for dance. Come dance with us and
          experience the joy of Kizomba!
        </p>

        <h2>Konpa</h2>
        <p>
          We proudly offer Konpa classes, celebrating the vibrant rhythms and
          rich culture of this beloved Haitian partner dance. Our instructors
          will introduce you to the smooth steps, gentle hip movements, and
          unique musicality that define Konpa. Whether you’re just starting out
          or looking to refine your style, our supportive environment makes it
          easy to connect with others and enjoy the dance. Discover the warmth,
          joy, and community of Konpa at Freedom Dance Studio—where every class
          is a celebration of music and movement
        </p>

        <h2>Music Community</h2>
        <h4> INSPIRING CREATIVITY THROUGH THE POWER OF MUSIC!</h4>
        <p>! WE WELCOME HIGH SCHOOL STUDENTS AND ADULTS!</p>

        <p>
          DISCOVER THE JOY OF MUSIC IN A FUN, ENCOURAGING, AND CREATIVE
          ENVIRONMENT!
        </p>
        <h3> JAZZ BAND</h3>
        <p>
          EXPLORE IMPROVISATION AND CREATIVITY LEARN ESSENTIAL TECHNIQUES PLAY
          AND COLLABORATE WITH FELLOW MUSICIANS
        </p>

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
    </div>
  );
};
