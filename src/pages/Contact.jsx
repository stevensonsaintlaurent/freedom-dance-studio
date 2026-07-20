// import React, { useEffect } from "react";
// import msg_icon from "../assets/msg-icon.png";
// import mail_icon from "../assets/mail-icon.png";
// import location_icon from "../assets/location-icon.png";
// import phone_icon from "../assets/phone-icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faTiktok } from "@fortawesome/free-brands-svg-icons";
// import RegistrationForm from "../components/RegistrationForm";
// import useOnSudmit from "../hooks/useOnSudmit";

// const Contact = () => {
//   const { result, hidden, onSubmit } = useOnSudmit();

//   return (
//     <div className="contact">
//       {hidden ? null : (
//         <div className="contact-col">
//           <h3>
//             Send us a message <img src={msg_icon} alt="" />
//           </h3>
//           <p>
//             Feel free to reach out through contact form or find our contact
//             information bellow.Your feedback,questions,and suggestions are
//             important to us as we strive to provide exceptional service to our
//             Dance Company
//           </p>

//           <ul>
//             <li>
//               <a href="freedomdancelasvegas@gmail.com" className="link-item">
//                 {/* <img src={mail_icon} alt="" /> */}
//                 freedomdancelasvegas@gmail.com
//               </a>
//             </li>

//             <li>
//               <a href="7257240962" className="link-item">
//                 {/* <img src={phone_icon} alt="" /> */}
//                 7257240962
//               </a>
//             </li>

//             <li>
//               <a
//                 href=" 3110 E Sunset Rd Suite C, Las Vegas, NV 89120"
//                 className="link-item"
//               >
//                 {/* <img src={location_icon} alt="" /> 3110 E Sunset Rd Suite C, Las */}
//                 Vegas, NV 89120
//               </a>
//             </li>

//             <li>
//               <a href="https://www.facebook.com/profile.php?id=100095031592137&mibextid=LQQJ4d">
//                 {/* <FontAwesomeIcon icon={faFacebook} /> Facebook */}
//               </a>
//             </li>

//             <li>
//               <a href="https://www.instagram.com/vegas_freedom_dance_studio?igsh=MXVoNmJtODh1azJ4Zg== ">
//                 {/* <FontAwesomeIcon icon={faInstagram} /> Instagram */}
//               </a>
//             </li>

//             <li>
//               <a href="https://www.tiktok.com/@fd.las_vegas?_t=8qEDieUuXCJ&_r=1">
//                 {/* <FontAwesomeIcon icon={faTiktok} /> Tiktok */}
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}

//       <div className="contact-col">
//         {hidden === false ? (
//           <>
//             <h1>Register now for your first class free! </h1>
//             <RegistrationForm onSubmit={onSubmit} />
//           </>
//         ) : (
//           <span
//             style={{
//               fontSize: "28px",
//               fontWidth: "inherit",
//             }}
//           >
//             {result}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Contact;

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import useOnSudmit from "./../hooks/useOnSudmit";

const Contact = () => {
  const { setText, onSubmit } = useOnSudmit();
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

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-primary text-xl" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:7267240962" className="link link-hover">
                      (726) 724-0962
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-primary text-xl" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:info@freedomdancestudio.com"
                      className="link link-hover"
                    >
                      freedomdancelasvegas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="divider">Follow Us</div>

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

              <form className="space-y-5" onSubmit={onSubmit}>
                <div>
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="input input-bordered w-full"
                    name="phone"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell us how we can help..."
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={() => setText("you successfuly send message ")}
                >
                  Send Message
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
