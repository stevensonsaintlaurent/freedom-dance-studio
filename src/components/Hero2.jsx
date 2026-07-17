import hero1 from "../assets/konpaClip.jpeg";
import hero2 from "../assets/recentClip1.jpeg";
import hero3 from "../assets/recentClip2.jpeg";
import hero4 from "../assets/followerClip.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-base-100 flex items-center">
      <div className="hero-content max-w-7xl mx-auto flex-col-reverse gap-16 lg:flex-row px-6 py-20">
        {/* LEFT SIDE */}

        <div className="flex-1">
          <div className="badge badge-primary badge-lg mb-6">
            Freedom Dance Studio • Las Vegas
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Dance with
            <span className="text-primary block">Passion.</span>
            Connect with
            <span className="text-secondary block">Freedom.</span>
          </h1>

          <p className="py-8 text-lg opacity-80 max-w-xl">
            Learn Bachata, Salsa, Kizomba, and Konpa from experienced
            instructors in a welcoming community. Whether you're taking your
            first dance steps or preparing for the social dance floor, Freedom
            Dance Studio is the place to grow, connect, and have fun.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary btn-lg">
              Book Your First Class
            </button>

            <button className="btn btn-outline btn-lg">View Schedule</button>
          </div>

          <div className="stats shadow mt-10 bg-base-200">
            <div className="stat">
              <div className="stat-value text-primary">4+</div>

              <div className="stat-desc">Latin Dance Styles</div>
            </div>

            <div className="stat">
              <div className="stat-value text-secondary">All</div>

              <div className="stat-desc">Skill Levels Welcome</div>
            </div>

            <div className="stat">
              <div className="stat-value">❤️</div>

              <div className="stat-desc">Friendly Community</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-5">
            <img
              src={hero1}
              className="rounded-3xl shadow-2xl h-80 object-cover hover:scale-105 duration-300"
            />

            <img
              src={hero2}
              className="rounded-3xl shadow-2xl h-56 mt-14 object-cover hover:scale-105 duration-300"
            />

            <img
              src={hero3}
              className="rounded-3xl shadow-2xl h-56 object-cover hover:scale-105 duration-300"
            />

            <img
              src={hero4}
              className="rounded-3xl shadow-2xl h-80 -mt-14 object-cover hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
