import { Link } from "react-router-dom";
import heroVideo from "../assets/freedom2.mp4";
import heroImage from "../assets/recentClip1.jpeg";

import hero1 from "../assets/konpaClip.jpeg";
import hero2 from "../assets/recentClip1.jpeg";
import hero3 from "../assets/recentClip2.jpeg";
import hero4 from "../assets/followerClip.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Content */}
      <div className="hero-content relative z-10 w-full max-w-7xl px-6 py-20">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left Side */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="badge badge-primary badge-lg mb-6 animate-pulse">
              💃 Welcome to Freedom Studio
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Dance.
              <span className="text-primary"> Connect.</span>
              <br />
              Live with
              <span className="text-secondary"> Freedom.</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-200 sm:text-lg">
              Join Las Vegas' Freedom community and learn Bachata, Salsa, Urban
              Kiz, Konpa, and more. Whether you're dancing for fun, fitness, or
              performance, we have classes for every level.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="schedule" className="btn btn-primary btn-lg">
                Book Your First Class
              </Link>

              <Link
                to="classes"
                className="btn btn-outline btn-secondary btn-lg"
              >
                Explore Classes
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl bg-base-100/90 p-4 text-center shadow-2xl backdrop-blur">
              <div>
                <h2 className="text-2xl font-bold text-primary">130+</h2>
                <p className="text-sm">Students</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-secondary">10+</h2>
                <p className="text-sm">Weekly Classes</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">10+</h2>
                <p className="text-sm">Years</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <img
              src={heroImage}
              alt="Freedom Dance Studio"
              className="w-full rounded-3xl border-4 border-white shadow-2xl transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
