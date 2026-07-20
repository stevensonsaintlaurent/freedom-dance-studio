import concert from "../assets/concert-freedom-jazz/P1991000.jpg";
import concert1 from "../assets/concert-freedom-jazz/P1990994.jpg";
import concert2 from "../assets/concert-freedom-jazz/P1990974.jpg";

const classes = [
  {
    title: "Youth Orchestra",
    day: "Tuesday",
    time: "4:30 PM - 6:00 PM",
    ages: "Ages 8-18",
    instructor: "Freedom Music Staff",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=900",
  },
  {
    title: "Jazz Band",
    day: "Saturday",
    time: "5:00 PM - 7:00 PM",
    ages: "Teens & Adults",
    instructor: "Professional Jazz Director",
    image: concert,
  },
  {
    title: "Beginner Band",
    day: "Saturday",
    time: "10:30 AM - 12:00 PM",
    ages: "All Ages",
    instructor: "Music Instructor",
    image: concert1,
  },
];

const pricing = [
  {
    name: "Single Lesson",
    price: "$30",
    description: "One music class",
  },
  {
    name: "Monthly Membership",
    price: "Free",
    description: "Unlimited Orchestra & Jazz Classes",
    featured: true,
  },
  {
    name: "Private Lessons",
    price: "$60",
    description: "One-on-one instruction (1 Hour)",
  },
];

const instruments = [
  "🎺 Trumpet",
  "🎷 Saxophone",
  "🎹 Piano",
  "🥁 Drums",
  "🎸 Bass Guitar",
  "🎻 Violin",
  "🎼 Music Theory",
  "🎤 Vocal Training",
];

function MusicClasses() {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="hero bg-base-100 rounded-3xl shadow-xl mb-20">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <img
              src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=900"
              alt="Music Class"
              className="rounded-3xl shadow-xl max-w-lg w-full"
            />

            <div>
              <h1 className="text-5xl font-bold">
                Orchestra & Jazz Band Classes
              </h1>

              <p className="py-6 text-lg">
                Join Freedom Dance Studio's Music Department and learn from
                experienced musicians. Whether you dream of performing in an
                orchestra or playing jazz, we have a class for you.
              </p>

              <button className="btn btn-primary btn-lg">Enroll Today</button>
            </div>
          </div>
        </div>

        {/* Schedule */}

        <h2 className="text-4xl font-bold text-center mb-12">
          Weekly Schedule
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((music, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
            >
              <figure>
                <img
                  src={music.image}
                  alt={music.title}
                  className="h-64 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{music.title}</h2>

                <p>
                  <strong>Day:</strong> {music.day}
                </p>

                <p>
                  <strong>Time:</strong> {music.time}
                </p>

                <p>
                  <strong>Students:</strong> {music.ages}
                </p>

                <p>
                  <strong>Instructor:</strong> {music.instructor}
                </p>

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary">Reserve Your Seat</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Tuition & Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`card shadow-xl ${
                  plan.featured
                    ? "bg-primary text-primary-content scale-105"
                    : "bg-base-100"
                }`}
              >
                <div className="card-body text-center">
                  <h2 className="card-title justify-center text-2xl">
                    {plan.name}
                  </h2>

                  <div className="text-6xl font-bold my-5">{plan.price}</div>

                  <p>{plan.description}</p>

                  <button
                    className={`btn mt-6 ${
                      plan.featured ? "btn-secondary" : "btn-primary"
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instruments */}

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-10">
            Instruments We Teach
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instruments.map((instrument, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body items-center text-center">
                  <h3 className="text-xl font-bold">{instrument}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Join Our Music Program?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">🎼</span>
                <h3 className="font-bold text-xl">Professional Conductors</h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">🎷</span>
                <h3 className="font-bold text-xl">Live Performances</h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">🎵</span>
                <h3 className="font-bold text-xl">Music Theory Included</h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">🏆</span>
                <h3 className="font-bold text-xl">
                  Concert & Festival Opportunities
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MusicClasses;
