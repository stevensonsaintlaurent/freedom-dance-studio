import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rehearsal from "../assets/rehearsal.jpeg";

const StudioRental = () => {
  const navigate = useNavigate();
  const handleRental = () => {
    navigate("/rentalStudio");
  };

  const scroolUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scroolUp();
  });
  return (
    <section className="bg-base-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-primary">Rent Our Studio</h2>

          <p className="mt-5 text-lg max-w-3xl mx-auto">
            Looking for the perfect venue for your next event? Freedom Dance
            Studio offers a beautiful, spacious, and welcoming environment for
            parties, rehearsals, workshops, private lessons, fitness sessions,
            meetings, and special celebrations.
          </p>
        </div>

        {/* Images */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <div className="card bg-base-100 shadow-xl overflow-hidden">
            <figure>
              <img
                src={rehearsal}
                alt="Dance Studio"
                className="h-80 w-full object-cover"
              />
            </figure>
          </div>

          <div className="card bg-base-100 shadow-xl overflow-hidden">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
                alt="Studio Event Space"
                className="h-80 w-full object-cover"
              />
            </figure>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Hourly Rental</h3>

              <div className="text-5xl font-bold text-success mt-4">$20</div>

              <p className="text-lg mt-2">Starting price per hour</p>
            </div>
          </div>

          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Large Events</h3>

              <div className="text-5xl font-bold mt-4">$120</div>

              <p className="mt-2">
                Events with more than <strong>25 guests</strong>
              </p>
            </div>
          </div>

          <div className="card bg-error text-white shadow-xl">
            <div className="card-body text-center">
              <h3 className="card-title justify-center">Cleaning Fee</h3>

              <div className="text-5xl font-bold mt-4">$120</div>

              <p className="mt-2">Required after every event</p>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {/* Perfect For */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-3xl font-bold mb-5">Perfect For</h3>

              <ul className="space-y-3 text-lg">
                <li>🎉 Birthday Parties</li>
                <li>💃 Dance Rehearsals</li>
                <li>🧘 Yoga & Fitness Classes</li>
                <li>🎵 Music Rehearsals</li>
                <li>👨‍🏫 Workshops</li>
                <li>👥 Private Classes</li>
                <li>📸 Photo & Video Shoots</li>
                <li>🎭 Community Events</li>
              </ul>
            </div>
          </div>

          {/* Rental Details */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-3xl font-bold mb-5">Rental Details</h3>

              <div className="space-y-4 text-lg">
                <p>
                  ✅ Minimum rental price:
                  <span className="font-bold text-success"> $20/hour</span>
                </p>

                <p>
                  ✅ Events with more than
                  <strong> 25 guests </strong>
                  are charged
                  <span className="font-bold text-primary"> $120/hour</span>
                </p>

                <p>
                  ✅ Mandatory cleaning fee:
                  <span className="font-bold text-error"> $120</span>
                </p>

                <p>✅ Spacious dance floor</p>

                <p>✅ Mirrors & Sound System Available</p>

                <p>✅ Air Conditioned</p>

                <p>✅ Free Parking</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-5">Reserve Your Date Today</h3>

          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Whether you're hosting a private class, rehearsal, birthday
            celebration, workshop, or special event, Freedom Dance Studio
            provides a clean, modern, and welcoming space for your guests.
          </p>

          <button className="btn btn-primary btn-lg" onClick={handleRental}>
            Book Your Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudioRental;
