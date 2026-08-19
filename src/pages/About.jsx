import {
  Music,
  Users,
  Heart,
  Sparkles,
  Building2,
  Mic2,
  GraduationCap,
  HandHeart,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const features = [
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "Learn to Dance",
      description:
        "From your very first basic step to advanced technique, our classes welcome dancers of every level and help you grow with confidence.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "A Real Community",
      description:
        "Freedom is a place where people connect, build friendships, support one another, and feel like they belong both on and off the dance floor.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Support & Growth",
      description:
        "We believe everyone deserves encouragement and respect. Our goal is to create an environment where dancers, teachers, and creators can grow together.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Social Dancing",
      description:
        "Dance beyond the classroom through socials, workshops, performances, special events, and experiences that bring the Las Vegas dance community together.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Rent the Studio",
      description:
        "Need a space for your class, workshop, rehearsal, private lesson, event, or special project? Our studio is available for independent instructors and creators.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Independent Instructors",
      description:
        "You don't have to be part of our regular teaching team to share your passion. Rent the studio, host your own class, and build your own community with our support.",
    },
    {
      icon: <Mic2 className="w-8 h-8 text-primary" />,
      title: "Music & Live Arts",
      description:
        "Freedom is also a space for music and live entertainment, from Latin music and social dance to Big Band, Jazz Orchestra, performances, and creative events.",
    },
    {
      icon: <HandHeart className="w-8 h-8 text-primary" />,
      title: "Freedom to Create",
      description:
        "We want people to feel free to teach, perform, organize, experiment, and create. If you have an idea that brings people together, we want to help you make it happen.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-6">
        {/* INTRO */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge badge-primary badge-lg mb-4">
            About Freedom Dance Studio
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            More Than Dance...
            <span className="text-primary"> It's Freedom.</span>
          </h2>

          <p className="text-lg text-base-content/70 leading-relaxed">
            Freedom Dance Studio is more than a place to learn Bachata, Salsa,
            Kizomba, and Latin partner dancing. We are a space built around
            people, creativity, music, and community. Whether you are a beginner
            discovering dance for the first time, an experienced dancer looking
            to grow, an instructor wanting to teach your own class, or an artist
            looking for a place to create, Freedom is a space where you can
            belong.
          </p>
        </div>

        {/* VALUES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="p-3 rounded-2xl bg-primary/10">
                  {feature.icon}
                </div>

                <h3 className="card-title mt-4">{feature.title}</h3>

                <p className="text-base-content/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* STUDIO RENTAL / INDEPENDENT INSTRUCTORS */}
        <div className="mt-20">
          <div className="hero bg-base-200 rounded-3xl overflow-hidden">
            <div className="hero-content text-center py-14 px-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 badge badge-primary badge-lg mb-5">
                  <Building2 className="w-4 h-4" />
                  Your Space. Your Class. Your Freedom.
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-5">
                  A Studio for <span className="text-primary">Everyone</span>
                </h3>

                <p className="text-lg text-base-content/70 leading-relaxed mb-6">
                  Freedom Dance Studio is open to independent instructors,
                  teachers, choreographers, performers, musicians, and creators.
                  You don't have to be one of our regular instructors to use the
                  space.
                </p>

                <p className="text-lg text-base-content/70 leading-relaxed mb-8">
                  Have your own class? Host it here. Want to organize a
                  workshop? We can help. Need space for rehearsals, private
                  lessons, events, or your next creative project? Rent the
                  studio and make it your own.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/studiopricing" className="btn btn-primary btn-lg">
                    Rent the Studio
                  </Link>

                  <Link
                    to="/classes"
                    className="btn btn-outline btn-primary btn-lg"
                  >
                    Explore Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MUSIC / ARTS */}
        <div className="mt-10">
          <div className="card bg-base-200 shadow-xl overflow-hidden">
            <div className="card-body md:p-10">
              <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
                <div className="p-4 rounded-2xl bg-primary/10 w-fit">
                  <Mic2 className="w-10 h-10 text-primary" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    More Than a Dance Floor
                  </h3>

                  <p className="text-base-content/70 text-lg leading-relaxed mb-4">
                    Music has always been at the heart of dance. That's why
                    Freedom is also a place where different forms of music and
                    live arts can come together.
                  </p>

                  <p className="text-base-content/70 text-lg leading-relaxed">
                    From Latin music and social dancing to live performances,
                    Big Band, Jazz Orchestra, musicians, and other creative
                    projects, we want to provide a space where artists and
                    audiences can connect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CORE MESSAGE */}
        <div className="hero bg-primary text-primary-content rounded-3xl mt-20">
          <div className="hero-content text-center py-16 px-6">
            <div className="max-w-3xl">
              <div className="flex justify-center mb-5">
                <div className="p-3 rounded-full bg-primary-content/10">
                  <Heart className="w-8 h-8" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-5">
                Support. Love. Respect. Growth.
              </h3>

              <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-6">
                These are the values behind Freedom Dance Studio.
              </p>

              <p className="text-lg leading-relaxed opacity-90 mb-8">
                We believe that everyone has something to share. A dancer, a
                teacher, a musician, an artist, a beginner, or someone simply
                looking for a place to connect with others — everyone deserves a
                space where they are welcomed, respected, supported, and
                encouraged to grow.
              </p>

              <p className="text-lg leading-relaxed opacity-90 mb-8">
                Freedom isn't about one person, one instructor, or one style of
                dance. It's about creating a community where we help each other
                become better, celebrate each other's success, and make space
                for new ideas.
              </p>

              <Link to="/membership" className="btn btn-secondary btn-lg">
                Come Be Part of Freedom
              </Link>
            </div>
          </div>
        </div>

        {/* FINAL MESSAGE */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Your Dance. Your Music. Your Community.
          </h3>

          <p className="text-base-content/70 text-lg leading-relaxed">
            Whether you want to learn, teach, perform, create, rent a studio,
            organize an event, or simply meet amazing people, there is a place
            for you at Freedom.
          </p>
        </div>
      </div>
    </section>
  );
}
