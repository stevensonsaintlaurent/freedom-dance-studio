import steve from "../assets/stev.png";
import steveVideo from "../assets/BSteven.mp4";
import desmond from "../assets/desm.png";
import desmondV from "../assets/SDesmond.mp4";
import adriana from "../assets/adria.jpeg";
import adrianaVideo from "../assets/BAdriana.mp4";
import zagir from "../assets/zag.png";
import zagirVideo from "../assets/zagirVideo.mp4";
import allyson from "../assets/ally3.jpg";
const instructors = [
  {
    name: "Stevenson",
    role: "Founder • Band Leader",
    specialties: ["Bachata", "Kizomba", "Konpa"],
    image: steve,
    bio: "Passionate dance instructor, performer, and band leader dedicated to helping students grow on and off the dance floor.",
  },
  {
    name: "Zagir",
    role: "Dance Instructor",
    specialties: ["Ladies Styling Bachata", "Kids Latin Dance"],
    image: zagir,
    bio: "Specializes in ladies styling, confidence, musicality, and inspiring young dancers through fun Latin dance classes.",
  },
  {
    name: "Desmond",
    role: "Salsa Instructor",
    specialties: ["Salsa"],
    image: desmond,
    bio: "Brings energy, technique, and passion to every salsa class for students of all levels.",
  },
  {
    name: "Adriana",
    role: "Dance Instructor",
    specialties: ["Ladies Styling"],
    image: adriana,
    bio: "Focused on elegance, confidence, body movement, and styling for social dancers.",
  },
  {
    name: "Alain",
    role: "Band Leader",
    specialties: ["Live Music", "Performance"],
    image: "https://i.pravatar.cc/300?img=52",
    bio: "Leads the Freedom Dance Studio band, bringing live Latin music to socials and special events.",
  },
  {
    name: "Allyson",
    role: "Assistant Instructor",
    specialties: ["Bachata", "Student Support"],
    image: allyson,
    bio: "Assists classes, encourages new dancers, and helps create a welcoming learning environment.",
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-primary">
            Meet Our Instructors
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-base-content/70">
            Our experienced instructors are passionate about helping every
            student build confidence, improve technique, and enjoy the art of
            Latin dance.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((teacher, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
            >
              <figure className="pt-8">
                <div className="avatar">
                  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={teacher.image} alt={teacher.name} />
                  </div>
                </div>
              </figure>

              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl">{teacher.name}</h3>

                <p className="text-primary font-semibold">{teacher.role}</p>

                <p className="text-sm text-base-content/70">{teacher.bio}</p>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {teacher.specialties.map((skill, i) => (
                    <span key={i} className="badge badge-primary badge-outline">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="card-actions mt-6">
                  <button className="btn btn-primary">Book a Lesson</button>

                  <button className="btn btn-outline">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="alert alert-info shadow-lg max-w-3xl mx-auto">
            <span>
              💃 Ready to start dancing? Join a class with one of our talented
              instructors today!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
