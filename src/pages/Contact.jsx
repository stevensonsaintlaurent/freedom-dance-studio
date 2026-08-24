import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import useOnSudmit from "./../hooks/useOnSudmit";

const Contact = () => {
  const { setText, hidden, onSubmit } = useOnSudmit();

  const handleSubmit = (event) => {
    setText(
      "Thank you for contacting Freedom Dance Studio. We received your message and will get back to you as soon as possible.",
    );

    onSubmit(event);
  };

  return (
    <section className="bg-base-100 py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-primary">Contact Us</h2>

          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you're interested in classes,
            private lessons, rentals, or upcoming events, feel free to reach
            out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body space-y-5">
                <h3 className="card-title text-2xl text-primary">
                  Freedom Dance Studio
                </h3>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-primary text-xl mt-1" />

                  <div>
                    <p className="font-semibold">Address</p>

                    <p>
                      3110 E Sunset Rd Suite C
                      <br />
                      Las Vegas, NV 89120
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-primary text-xl" />

                  <div>
                    <p className="font-semibold">Phone</p>

                    <a href="tel:7267240962" className="link link-hover">
                      (726) 724-0962
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-primary text-xl" />

                  <div>
                    <p className="font-semibold">Email</p>

                    <a
                      href="mailto:freedomdancelasvegas@gmail.com"
                      className="link link-hover"
                    >
                      freedomdancelasvegas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="divider">Follow Us</div>

                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/VegasFD"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-circle btn-primary"
                  >
                    <FaInstagram size={20} />
                  </a>

                  <a
                    href="https://facebook.com/VegasFD"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-circle btn-secondary"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                title="Freedom Dance Studio"
                src="https://maps.google.com/maps?q=3110%20E%20Sunset%20Rd%20Suite%20C%20Las%20Vegas%20NV%2089120&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-3xl mb-4">Send Us a Message</h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Web3Forms subject */}
                <input
                  type="hidden"
                  name="subject"
                  value="Freedom Dance Studio - Contact Message"
                  readOnly
                />

                {/* Name */}
                <div>
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 555-5555"
                    className="input input-bordered w-full"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell us how we can help..."
                    className="textarea textarea-bordered w-full"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={hidden}
                >
                  {hidden ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
