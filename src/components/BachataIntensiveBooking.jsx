import React, { useState } from "react";

const BachataIntensiveBooking = () => {
  const [selection, setSelection] = useState(null);

  const passes = [
    {
      id: "full",
      title: "Full Pass",
      subtitle: "3 Days",
      early: 99,
      regular: 129,
    },
    {
      id: "two",
      title: "Two Day Pass",
      subtitle: "Choose 2 Days",
      early: 79,
      regular: 109,
    },
    {
      id: "one",
      title: "One Day Pass",
      subtitle: "Choose 1 Day",
      early: 45,
      regular: 65,
    },
  ];

  const privates = [
    {
      pass: "Full Pass",
      carlos: 100,
      michelle: 90,
    },
    {
      pass: "2 Day Pass",
      carlos: 120,
      michelle: 110,
    },
    {
      pass: "1 Day Pass",
      carlos: 125,
      michelle: 115,
    },
    {
      pass: "No Pass",
      carlos: 135,
      michelle: 125,
    },
  ];

  const book = (type, item) => {
    setSelection({
      type,
      ...item,
    });

    setTimeout(() => {
      document
        .getElementById("booking-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-yellow-500 tracking-[5px] uppercase">
            Freedom Dance Studio Presents
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mt-3">
            BACHATA
          </h1>

          <h2 className="text-4xl md:text-6xl italic text-red-500">
            Intensive Vol. 5
          </h2>

          <p className="text-2xl mt-5">Michelle 🇺🇸 & Carlos 🇪🇸</p>

          <p className="text-xl text-gray-300">October 2–4, 2026</p>

          <p className="mt-2 text-gray-400">Freedom Dance Studio • Las Vegas</p>
        </div>

        {/* SCHEDULE */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {[
            ["Friday • Oct 2", "8:30 PM – 10:00 PM"],
            ["Saturday • Oct 3", "8:30 PM – 10:00 PM"],
            ["Sunday • Oct 4", "5:00 PM – 6:30 PM"],
          ].map(([day, time]) => (
            <div
              key={day}
              className="border border-yellow-500 rounded-xl p-6 text-center"
            >
              <h3 className="text-xl font-bold text-yellow-400">{day}</h3>

              <p className="mt-2">{time}</p>

              <p className="text-gray-400 mt-2">Bachata Intensive</p>
            </div>
          ))}
        </div>

        {/* PASSES */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-center mb-3">
            Choose Your Pass
          </h2>

          <p className="text-center text-gray-400 mb-8">
            Early Bird available until October 1 at 11:59 PM
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {passes.map((pass) => (
              <div
                key={pass.id}
                className="bg-zinc-900 border border-yellow-500 rounded-2xl p-7 text-center"
              >
                <h3 className="text-2xl font-bold">{pass.title}</h3>

                <p className="text-gray-400">{pass.subtitle}</p>

                <div className="my-6">
                  <p className="text-sm text-yellow-500 uppercase">
                    Early Bird
                  </p>

                  <p className="text-5xl font-bold">${pass.early}</p>
                </div>

                <p className="text-gray-400">Regular ${pass.regular}</p>

                <button
                  onClick={() =>
                    book("Intensive Pass", {
                      name: pass.title,
                      price: pass.early,
                    })
                  }
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg mt-6"
                >
                  BUY PASS
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* INSTRUCTOR CLASS */}
        <div className="border-2 border-yellow-500 rounded-2xl p-8 mb-14 text-center">
          <p className="text-yellow-500 font-bold">VEGAS INSTRUCTORS ONLY</p>

          <h2 className="text-3xl font-bold mt-2">Instructor Bachata Class</h2>

          <p className="mt-3">Michelle & Carlos</p>

          <p className="text-gray-300 mt-3">Saturday, October 3</p>

          <p className="text-gray-300">6:30 PM – 8:00 PM</p>

          <p className="text-5xl font-bold text-yellow-400 my-5">$60</p>

          <p className="text-gray-400">Limited spots • Sign up in advance</p>

          <button
            onClick={() =>
              book("Instructor Class", {
                name: "Instructor Bachata Class",
                price: 60,
              })
            }
            className="bg-red-600 hover:bg-red-500 px-10 py-3 rounded-lg font-bold mt-6"
          >
            BOOK INSTRUCTOR CLASS
          </button>
        </div>

        {/* PRIVATE LESSONS */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-center">
            Private Session Rates
          </h2>

          <p className="text-center text-gray-400 mt-2 mb-8">
            Train privately with Michelle or Carlos
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {privates.map((rate) => (
              <div
                key={rate.pass}
                className="bg-zinc-900 rounded-xl border border-zinc-700 p-6"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-5">
                  {rate.pass}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() =>
                      book("Private Lesson", {
                        name: `Carlos Private • ${rate.pass}`,
                        price: rate.carlos,
                      })
                    }
                    className="border border-yellow-500 rounded-lg p-4 hover:bg-yellow-500 hover:text-black"
                  >
                    <strong>Carlos</strong>

                    <span className="block text-2xl">${rate.carlos}/hr</span>
                  </button>

                  <button
                    onClick={() =>
                      book("Private Lesson", {
                        name: `Michelle Private • ${rate.pass}`,
                        price: rate.michelle,
                      })
                    }
                    className="border border-yellow-500 rounded-lg p-4 hover:bg-yellow-500 hover:text-black"
                  >
                    <strong>Michelle</strong>

                    <span className="block text-2xl">${rate.michelle}/hr</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-950 border border-red-600 rounded-xl p-5 text-center mt-6">
            Private sessions held at Freedom Dance Studio have an additional{" "}
            <strong>$15/hour studio fee.</strong>
          </div>
        </div>

        {/* BOOKING FORM */}
        <div
          id="booking-form"
          className="max-w-2xl mx-auto bg-zinc-900 rounded-2xl p-7"
        >
          <h2 className="text-3xl font-bold">Complete Your Booking</h2>

          {selection ? (
            <div className="bg-black rounded-lg p-4 my-5 border border-yellow-500">
              <p className="text-gray-400">You selected</p>

              <p className="text-xl font-bold">{selection.name}</p>

              <p className="text-3xl font-bold text-yellow-400">
                ${selection.price}
              </p>
            </div>
          ) : (
            <p className="text-gray-400 my-5">
              Select a pass, instructor class, or private lesson above.
            </p>
          )}

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            {/* Replace with your Web3Forms access key */}
            <input
              type="hidden"
              name="access_key"
              value="YOUR_WEB3FORMS_ACCESS_KEY"
            />

            <input
              type="hidden"
              name="BookingType"
              value={selection?.type || ""}
            />

            <input
              type="hidden"
              name="Selection"
              value={selection?.name || ""}
            />

            <input type="hidden" name="Price" value={selection?.price || ""} />

            <input
              type="text"
              name="FullName"
              required
              placeholder="Full Name"
              className="w-full bg-black border border-zinc-700 rounded-lg p-4"
            />

            <input
              type="email"
              name="Email"
              required
              placeholder="Email"
              className="w-full bg-black border border-zinc-700 rounded-lg p-4"
            />

            <input
              type="tel"
              name="Phone"
              required
              placeholder="Phone Number"
              className="w-full bg-black border border-zinc-700 rounded-lg p-4"
            />

            <textarea
              name="Message"
              placeholder="Message or private lesson preferred date/time"
              rows="4"
              className="w-full bg-black border border-zinc-700 rounded-lg p-4"
            />

            <label className="flex gap-3 text-sm text-gray-300">
              <input type="checkbox" required />I understand that my spot is
              confirmed after payment is received and verified.
            </label>

            <button
              disabled={!selection}
              type="submit"
              className="w-full bg-yellow-500 disabled:bg-gray-700 disabled:text-gray-400 text-black font-bold text-lg py-4 rounded-lg"
            >
              SUBMIT BOOKING
            </button>
          </form>
        </div>

        {/* LOCATION */}
        <div className="text-center mt-12 text-gray-400">
          <p className="font-bold text-white">Freedom Dance Studio</p>

          <p>3110 E. Sunset Rd., Ste. C</p>
          <p>Las Vegas, NV 89120</p>
        </div>
      </div>
    </section>
  );
};

export default BachataIntensiveBooking;
