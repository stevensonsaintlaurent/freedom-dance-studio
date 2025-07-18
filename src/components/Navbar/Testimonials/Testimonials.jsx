import { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../../assets/next-icon.png";
import back_icon from "../../../assets/back-icon.png";
import user_1 from "../../../assets/user-1.jpg";
import user_2 from "../../../assets/user-2.jpg";
import user_3 from "../../../assets/ally3.jpg";
import user_4 from "../../../assets/maribel.jpg";
import user_5 from "../../../assets/adriana.jpg";
import user_6 from "../../../assets/Kanani.jpg";
import user_7 from "../../../assets/jesus.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -40) {
      tx -= 25;

      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;

      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info ">
                <img src={user_1} alt="" />
                <div>
                  <h3>Gabriela Oman</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                The instructors at Freedom Dance are amazing. I&apos;m so happy
                I found this company. Stevenson is very humble and patient. He
                encourages you to own your sexiness and motivates you to keep
                learning and coming back by always being so inclusive and
                friendly.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info  ">
                <img src={user_2} alt="" />
                <div>
                  <h3>Zagir</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                The instructors are super patient and professional, they
                constantly motivate and challenge you to continue learning in a
                positive, respectful way, on your time and free of pressure.
                They completely understand that we are all different and learn
                differently. In Freedom Dance I have found a family.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Allyson Corella</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                My first ever dance class was with Stevenson at Freedom Dance.
                What I appreciate the most about Stevenson is he encourages
                diversity and inclusivity by suggesting students explore
                different instructors. My favorite part about class is the
                combination of learning and fun, plus the new friends I&apos;ve
                made along the way. I would encourage anyone who wants to find
                new joy in their life, to sign up for Bachata and Kizomba with
                Freedom Dance💓
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Maribel Magana</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                I started taking Bachata and Kizomba classes with Stevenson at
                Freedom Dance earlier this year. Stevenson is a very skilled and
                talented dancer who makes it his goal to encourage and teach his
                students to improve their dance skills while boosting their
                confidence. Not only is he a great teacher but his classes are
                also really fun. I highly recommend anyone who has a passion for
                dancing to go take his classes. You&apos;ll be learning from the
                best!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt="" />
                <div>
                  <h3>Adriana Luna Blake</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                I love attending Freedom Dance Company because the classes are
                fun. They focus on correcting and perfectioning the techniques,
                and Stevenson is very patient and professional with his
                students. They give each student the right amount of attention
                and encouragement. I would highly recommend this dance studio.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_6} alt="" />
                <div>
                  <h3>Kanani Jane</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                Freedom Dance is actually where I fell in love with Kizomba. 💜
                Just walked into Stevenson&apos;s class, knowing nothing about
                Kizomba, and BAMM!! Melted, lol. Later I took a Bachata Bootcamp
                and learned from a dancer from Romania. Such a beautiful dancer
                with so much skill and experience. I was blessed with being able
                to learn from her as well as Stevenson.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_7} alt="" />
                <div>
                  <h3>Jesús Silva</h3>
                  <span>Freedom Dance ,Las Vegas</span>
                </div>
              </div>
              <p>
                Freedom dance is one of the best dance studio in Vegas
                instructor Stevenson is a very nice and funny teacher He knows
                the dances he is teaching and puts all the enthusiasm to each
                class so come and join the team you will not regret it
                Personally I am very happy because there is a very good vibe
                with all the students come and practice Bachata and Kizomba.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
