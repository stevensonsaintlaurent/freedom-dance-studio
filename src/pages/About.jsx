import { Music, Users, Heart, Sparkles } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "Learn to Dance",
      description:
        "From your first basic step to advanced techniques, our classes are designed for dancers of every level.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Amazing Community",
      description:
        "Become part of a welcoming family where friendships are built both on and off the dance floor.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Passionate Instructors",
      description:
        "Our experienced instructors are dedicated to helping you grow with confidence and have fun while learning.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Social Dancing",
      description:
        "Practice what you learn at weekly socials, workshops, and special events with dancers from across Las Vegas.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="badge badge-primary badge-lg mb-4">
            About Freedom Dance Studio
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            More Than Dance...
            <span className="text-primary"> It's Community.</span>
          </h2>

          <p className="text-lg text-base-content/70 leading-relaxed">
            Freedom Dance Studio is Las Vegas' home for Bachata, Salsa, Kizomba,
            and Latin partner dancing. Whether you're stepping onto the dance
            floor for the very first time or looking to perfect your technique,
            we provide a welcoming environment where everyone can learn, grow,
            and connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body items-center text-center">
                {feature.icon}

                <h3 className="card-title mt-4">{feature.title}</h3>

                <p className="text-base-content/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hero bg-primary text-primary-content rounded-3xl mt-20">
          <div className="hero-content text-center py-14">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Dance. Connect. Grow.</h3>

              <p className="mb-8 text-lg opacity-90">
                We believe dancing changes lives. Our mission is to create a
                fun, inclusive space where people of all backgrounds can build
                confidence, improve their skills, and create lasting memories
                through dance.
              </p>

              <a href="/classes" className="btn btn-secondary btn-lg">
                View Our Classes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
