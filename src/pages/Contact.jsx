import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import { CheckCircle2, Send } from "lucide-react";

import useOnSudmit from "./../hooks/useOnSudmit";

const Contact = () => {
  const { setText, hidden, onSubmit } = useOnSudmit();

  const [messageSent, setMessageSent] = useState(false);
  const [messageReference, setMessageReference] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (hidden) return;

    /*
     * Set the message BEFORE onSubmit.
     */
    setText(
      "Thank you for contacting Freedom Dance Studio. We received your message and will get back to you as soon as possible.",
    );

    try {
      const result = await onSubmit(event);

      /*
       * Only show success if Web3Forms
       * actually confirms the submission.
       */
      if (result?.success) {
        const reference = `MSG-${Date.now().toString().slice(-6)}`;

        setMessageReference(reference);

        setMessageSent(true);
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
    }
  };

  /*
   * =========================================================
   * SUCCESS SCREEN
   * =========================================================
   */

  if (messageSent) {
    return (
      <section className="min-h-screen bg-base-200 px-5 py-16 flex items-center">
        <div className="max-w-3xl w-full mx-auto">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body items-center text-center p-8 md:p-12">
              {/* SUCCESS ICON */}

              <div className="mb-6">
                <CheckCircle2
                  size={90}
                  className="text-success"
                  strokeWidth={1.5}
                />
              </div>

              {/* TITLE */}

              <h1 className="text-4xl md:text-5xl font-bold text-success">
                Message Sent!
              </h1>

              <p className="text-lg mt-4 max-w-xl">
                Thank you for contacting Freedom Dance Studio. Your message has
                been successfully received.
              </p>

              {/* REFERENCE */}

              <div className="badge badge-primary badge-lg mt-5 p-4">
                Message #{messageReference}
              </div>

              {/* INFO */}

              <div className="alert alert-info mt-8 text-left">
                <span>
                  📧 Our team will review your message and get back to you as
                  soon as possible.
                </span>
              </div>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
                <a href="/" className="btn btn-primary flex-1">
                  Back to Home
                </a>

                <a href="/schedule" className="btn btn-outline flex-1">
                  View Classes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /*
   * =========================================================
   * CONTACT PAGE
   * =========================================================
   */

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
          {/* =====================================================
              CONTACT INFO
          ===================================================== */}

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

          {/* =====================================================
              CONTACT FORM
          ===================================================== */}

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
                  {hidden ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
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
