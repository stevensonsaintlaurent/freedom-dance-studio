import React, { useEffect } from "react";
import "./Contact.css";
import msg_icon from "../../../assets/msg-icon.png";
import mail_icon from "../../../assets/mail-icon.png";
import location_icon from "../../../assets/location-icon.png";
import phone_icon from "../../../assets/phone-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import RegistrationForm from "./RegistrationForm";
import useOnSudmit from "../../hooks/useOnSudmit";

const Contact = () => {
  const { result, hidden, onSubmit } = useOnSudmit();

  return (
    <div className="contact">
      {hidden ? null : (
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information bellow.Your feedback,questions,and suggestions are
            important to us as we strive to provide exceptional service to our
            Dance Company
          </p>

          <ul>
            <li>
              <a href="freedomdancelasvegas@gmail.com" className="link-item">
                <img src={mail_icon} alt="" />
                freedomdancelasvegas@gmail.com
              </a>
            </li>

            <li>
              <a href="7257240962" className="link-item">
                <img src={phone_icon} alt="" />
                7257240962
              </a>
            </li>

            <li>
              <a
                href=" 3110 E Sunset Rd Suite C, Las Vegas, NV 89120"
                className="link-item"
              >
                <img src={location_icon} alt="" /> 3110 E Sunset Rd Suite C, Las
                Vegas, NV 89120
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/profile.php?id=100095031592137&mibextid=LQQJ4d">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/vegas_freedom_dance_studio?igsh=MXVoNmJtODh1azJ4Zg== ">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>

            <li>
              <a href="https://www.tiktok.com/@fd.las_vegas?_t=8qEDieUuXCJ&_r=1">
                <FontAwesomeIcon icon={faTiktok} /> Tiktok
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="contact-col">
        {hidden === false ? (
          <>
            <h1>Register now for your first class free! </h1>
            <RegistrationForm onSubmit={onSubmit} />
          </>
        ) : (
          <span
            style={{
              fontSize: "28px",
              fontWidth: "inherit",
            }}
          >
            {result}
          </span>
        )}
      </div>
    </div>
  );
};

export default Contact;
