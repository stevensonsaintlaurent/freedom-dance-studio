import { useState } from "react";

const Booking = () => {
  const [booking, setBooking] = useState({
    fullName: "",
    email: "",
    phone: "",
    emergency: "",
    experience: "Beginner",
    message: "",
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your class has been booked successfully!");
    console.log(booking);
  };

  return (
    <section className="bg-base-200 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary">
            Confirm Your Booking
          </h1>
          <p className="mt-4 text-lg">
            Review your class information and complete your registration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Booking Summary */}

          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">Booking Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-bold">Class</span>
                  <span>Bachata Sensual</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-bold">Instructor</span>
                  <span>Stevenson St. Laurent</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-bold">Day</span>
                  <span>Tuesday</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-bold">Time</span>
                  <span>7:00 PM - 8:30 PM</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-bold">Location</span>
                  <span>Freedom Dance Studio</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-bold">Price</span>
                  <span className="text-success text-xl font-bold">$20</span>
                </div>

                <div className="divider"></div>

                <p>✔ Beginner Friendly</p>

                <p>✔ No Partner Required</p>

                <p>✔ Free Parking Available</p>

                <p>✔ Comfortable Clothing Recommended</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}

          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">Personal Information</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full"
                  name="fullName"
                  value={booking.fullName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  name="email"
                  value={booking.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  name="phone"
                  value={booking.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  placeholder="Emergency Contact"
                  className="input input-bordered w-full"
                  name="emergency"
                  value={booking.emergency}
                  onChange={handleChange}
                />

                <select
                  className="select select-bordered w-full"
                  name="experience"
                  value={booking.experience}
                  onChange={handleChange}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>

                <textarea
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Special Requests"
                  name="message"
                  value={booking.message}
                  onChange={handleChange}
                ></textarea>

                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    required
                  />
                  <span>
                    I agree to the studio policies and cancellation terms.
                  </span>
                </label>

                <button className="btn btn-primary w-full text-lg">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
