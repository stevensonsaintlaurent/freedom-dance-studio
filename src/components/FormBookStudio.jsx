import React, { useEffect, useRef } from "react";
import useOnSudmit from "../hooks/useOnSudmit";

const FormBookStudio = () => {
  const { result, hidden, onSubmit } = useOnSudmit();
  const [show, setShow] = React.useState(false);

  const refname = useRef(null);

  useEffect(() => {
    refname.current?.focus();
  });
  return (
    <>
      {hidden === false ? (
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder=" Enter your name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder=" Enter your email Address"
            required
            ref={refname}
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder=" Enter your mobile number"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder=" Enter your message"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
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
    </>
  );
};

export default FormBookStudio;
