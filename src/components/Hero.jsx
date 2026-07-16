import { Link } from "react-router-dom";

import hero1 from "../assets/konpaClip.jpeg";
import hero2 from "../assets/recentClip1.jpeg";
import hero3 from "../assets/recentClip2.jpeg";
import hero4 from "../assets/followerClip.jpeg";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-3xl font-bold tracking-tight sm:text-6xl">
          Welcome to our Community
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          We’re excited to have you join our community of artists and
          performers! Our community offers a variety of dance classes and music
          lessons for all ages and skill levels. We also host events and
          workshops to celebrate creativity and connection. Thank you for being
          here, and we can’t wait to create and perform together!
        </p>

        <div className=" mt-10">
          <Link to="/about" className="btn btn-primary">
            Explore more
          </Link>
        </div>
      </div>

      <div className=" h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item py-1">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover py-1"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;

// import "./Hero.css";
// import dark_arrow from "../../assets/dark-arrow.png";

// const Hero = ({ setInterviews }) => {
//   return (
//     <div className="hero container">
//       <div className="hero-text">
//         <h1>WELCOME TO OUR COMMUNITY</h1>

//         <p>
//           We’re excited to have you join our community of artists and
//           performers! Our community offers a variety of dance classes and music
//           lessons for all ages and skill levels. We also host events and
//           workshops to celebrate creativity and connection. Thank you for being
//           here, and we can’t wait to create and perform together!
//         </p>

//         <button
//           className="btn"
//           onClick={() => {
//             setInterviews(true);
//           }}
//         >
//           Explore more <img src={dark_arrow} alt="" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
