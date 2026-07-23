// import "./Navbar/About/About.css";
// import Party_1 from "../assets/sbkParty/FJ8A6466.jpg";
// import Party_2 from "../assets/sbkParty/FJ8A6603.jpg";
// import Party_3 from "../assets/sbkParty/FJ8A6605.jpg";
// // import about_img from "../../../assets/first-clip.jpg";
// // import play_icon from "../../../assets/play-icon.png";
// import concert from "../assets/concert-freedom-jazz/P1991000.jpg";
// import concert_1 from "../assets/concert-freedom-jazz/P1990994.jpg";
// import concert_2 from "../assets/concert-freedom-jazz/P1990974.jpg";
// import { StyleDance } from "./StyleDance";
// import { discipline } from "./instructor/data-instructor";
// import { useState } from "react";

// export const InfoContent = () => {
//   const [disc, setDisc] = useState(discipline);

//   return (
//     <div className="about info-content">
//       <div className="about-right  info-dance">
//         {disc.map((item) => {
//           return <StyleDance key={item.id} {...item} />;
//         })}

//         <h2>Music Community</h2>
//         <img src={concert} alt="" className="about-img" />
//         <h4> Inspiring creativity through the power of music!</h4>
//         <p>!We welcome high school student and adults!</p>

//         <p>
//           Discover the joy of music in a fun, encouraging, and create discover
//           the of music in a fun, encouraging, and creative environment!
//         </p>

//         <h3> JAZZ BAND</h3>
//         <img src={concert_1} alt="" className="about-img" />
//         <p>
//           Explore Improvisation and creativity learn essential techniques play
//           and collaborate with fellow musicians
//         </p>
//         <img src={concert_2} alt="" className="about-img" />

//         <h3> CLASSICAL ORCHESTRA </h3>
//         <p>
//           Perform timeless pieces strengthen your musical skills experience the
//           beauty of orchestral music
//         </p>

//         <h3> WHY JOIN US?</h3>
//         <p>
//           Whether you're an instermediate or avanced musician,our programs help
//           you grow, shine and share your love of music.
//         </p>

//         <h3> JOIN THE COMMUNITY!</h3>
//         <p>
//           Come make music with us at Freedom Dance Studio - Where creativity
//           connection, and expression come alive!
//         </p>
//       </div>
//       {/* ========== left to right ========== */}
//       <div className="about-left">
//         <img src={Party_1} alt="" className="about-img" />
//         <img src={Party_2} alt="" className="about-img" />
//         <img src={Party_3} alt="" className="about-img" />

//         {/* <img
//           src={play_icon}
//           alt=""
//           className="play-icon"
//           onClick={() => {
//             setPlayState(true);
//           }}
//         /> */}
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import Party_1 from "../assets/sbkParty/FJ8A6466.jpg";
import Party_2 from "../assets/sbkParty/FJ8A6603.jpg";
import Party_3 from "../assets/sbkParty/FJ8A6605.jpg";

import concert from "../assets/concert-freedom-jazz/P1991000.jpg";
import concert_1 from "../assets/concert-freedom-jazz/P1990994.jpg";
import concert_2 from "../assets/concert-freedom-jazz/P1990974.jpg";

// import { StyleDance } from "./StyleDance";
import { discipline } from "../data/data-instructor";

const InfoContent = () => {
  const [disc] = useState(discipline);

  return (
    <section className="bg-base-100 py-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge badge-primary badge-lg mb-4">
            Freedom Dance Studio
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Dance • Music • Community
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-lg text-base-content/70">
            At Freedom Dance Studio, we believe everyone deserves a place to
            learn, perform, grow, and connect. Whether you're passionate about
            dance or music, you'll find a welcoming community ready to help you
            succeed.
          </p>
        </div>

        {/* Dance Styles */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8">
            Our Dance Programs
          </h3>

          {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {disc.map((item) => (
              <StyleDance key={item.id} {...item} />
            ))}
          </div> */}
        </div>

        {/* Music Section */}
        <div className="hero bg-base-200 rounded-3xl shadow-xl">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <img
              src={concert}
              alt="Freedom Jazz Band"
              className="rounded-2xl shadow-2xl lg:w-1/2 object-cover"
            />

            <div>
              <h2 className="text-4xl font-bold mb-4">Music Community</h2>

              <p className="text-base-content/80 mb-4">
                We welcome high school students and adults of all experience
                levels. Our music program inspires creativity, confidence, and
                collaboration in a supportive environment.
              </p>

              <div className="space-y-3">
                <div className="card bg-base-100 shadow">
                  <div className="card-body">
                    <h3 className="card-title text-primary">🎷 Jazz Band</h3>

                    <p>
                      Develop improvisation, rhythm, ensemble performance, and
                      musicianship while playing exciting jazz repertoire.
                    </p>
                  </div>
                </div>

                <div className="card bg-base-100 shadow">
                  <div className="card-body">
                    <h3 className="card-title text-secondary">
                      🎻 Classical Orchestra
                    </h3>

                    <p>
                      Perform timeless orchestral works while improving
                      technique, musical expression, and teamwork.
                    </p>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary btn-lg mt-6">
                Join Our Music Program
              </button>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">Studio Life</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[Party_1, Party_2, Party_3].map((img, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
              >
                <figure>
                  <img
                    src={img}
                    alt={`Studio ${index + 1}`}
                    className="h-72 w-full object-cover hover:scale-105 transition duration-500"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Music Images */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="card bg-base-200 shadow-xl">
            <figure>
              <img
                src={concert_1}
                alt="Jazz Performance"
                className="h-72 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="card-title">Jazz Performance</h3>

              <p>
                Perform alongside talented musicians while building confidence
                on stage.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <figure>
              <img
                src={concert_2}
                alt="Classical Orchestra"
                className="h-72 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="card-title">Classical Orchestra</h3>

              <p>
                Experience the beauty of orchestral music and perform memorable
                concerts with our community ensemble.
              </p>
            </div>
          </div>
        </div>

        {/* Why Join */}
        <div className="mt-20">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            <div className="stat">
              <div className="stat-title">Programs</div>
              <div className="stat-value text-primary">Dance</div>
              <div className="stat-desc">Salsa • Bachata • Kizomba • Konpa</div>
            </div>

            <div className="stat">
              <div className="stat-title">Music</div>
              <div className="stat-value text-secondary">Jazz</div>
              <div className="stat-desc">
                Orchestra • Ensemble • Performance
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Community</div>
              <div className="stat-value text-accent">Everyone</div>
              <div className="stat-desc">
                High School Students & Adults Welcome
              </div>
            </div>
          </div>

          <div className="text-center mt-12 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-5">Join the Freedom Family</h2>

            <p className="text-lg text-base-content/70">
              Whether you're taking your first dance class, joining a jazz band,
              or preparing for your next performance, Freedom Dance Studio is a
              place where creativity, confidence, and lifelong friendships come
              together.
            </p>

            <button className="btn btn-primary btn-wide mt-8">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InfoContent;
