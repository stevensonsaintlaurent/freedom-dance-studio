import { Link } from "react-router-dom";
import heroVideo from "../assets/clipVideo/bachataclip2.mp4";
import heroImage from "../assets/recentClip1.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* =========================
          BACKGROUND VIDEO
      ========================== */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

      {/* =========================
          HERO CONTENT
      ========================== */}
      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
            {/* =========================
                LEFT CONTENT
            ========================== */}
            <div className="w-full max-w-2xl text-center lg:text-left">
              {/* Badge */}
              <div className="mb-6 inline-flex">
                <span className="badge badge-primary badge-lg animate-pulse px-4 py-4">
                  💃 Welcome to Freedom Dance Studio
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Dance.
                <span className="text-primary"> Connect.</span>
                <br />
                Live with
                <span className="text-secondary"> Freedom.</span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg lg:mx-0">
                Join Las Vegas' Freedom community and learn Bachata, Salsa,
                Urban Kiz, Konpa, and more. Whether you're dancing for fun,
                fitness, or performance, we have classes for every level.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link to="/schedule" className="btn btn-primary btn-lg">
                  Book Your First Class
                </Link>

                <Link
                  to="/classes"
                  className="btn btn-outline btn-secondary btn-lg"
                >
                  Explore Classes
                </Link>
              </div>

              {/* =========================
                  STATS
              ========================== */}
              <div className="mt-10 grid grid-cols-3 gap-2 rounded-2xl bg-base-100/90 p-4 text-center shadow-2xl backdrop-blur-md sm:gap-4">
                <div>
                  <h2 className="text-xl font-bold text-primary sm:text-2xl">
                    130+
                  </h2>
                  <p className="text-xs sm:text-sm">Students</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-secondary sm:text-2xl">
                    10+
                  </h2>
                  <p className="text-xs sm:text-sm">Weekly Classes</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">10+</h2>
                  <p className="text-xs sm:text-sm">Years</p>
                </div>
              </div>
            </div>

            {/* =========================
                RIGHT IMAGE
            ========================== */}
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src={heroImage}
                alt="Dancers at Freedom Dance Studio"
                className="w-full rounded-3xl border-4 border-white/80 shadow-2xl transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
