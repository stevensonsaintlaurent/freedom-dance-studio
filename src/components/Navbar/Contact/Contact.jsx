import React from "react";
import "./Contact.css";
import msg_icon from "../../../assets/msg-icon.png";
import mail_icon from "../../../assets/mail-icon.png";
import location_icon from "../../../assets/location-icon.png";
import phone_icon from "../../../assets/phone-icon.png";
import white_arrow from "../../../assets/white-arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTiktok} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3148a73d-e80f-42d9-a521-d4c3192cb2c7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
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
            <img src={mail_icon} alt="" />
            freedomdancelasvegas@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            <a href="7026084001">7026084001</a>
          </li>
          <li>
            <img src={location_icon} alt="" /> 601 Mall Ring Cir, Henderson, NV
            89014(Diamond Dance studio)
          </li>
          <li>
          
            <a href="https://www.facebook.com/profile.php?id=100095031592137&mibextid=LQQJ4d">
            <FontAwesomeIcon icon={faFacebook}/> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/freedom_dance_las_vegas?igsh=cXZmbm12dmM4MGQ0">
            <FontAwesomeIcon icon={faInstagram}/> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@fd.las_vegas?_t=8qEDieUuXCJ&_r=1">
            <FontAwesomeIcon icon={faTiktok}/> Tiktok
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder=" Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder=" Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message "
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
