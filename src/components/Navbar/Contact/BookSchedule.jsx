import React, { useEffect, useState } from "react";
import Instructor from "./../../instructor/Instructor";
import useOnSudmit from "./../../../hooks/useOnSudmit";

const inst = [
  {
    name: "Desmond",
    time: "Saturday 4:00",
    time2: " Saturday 5:00pm",
    level: "beginner",
    level2: "intermediate",
    style: "Salsa",
  },
  {
    name: "Zagir ",
    time: "Thursday 6:30-7:30pm",
    level: "beginner",
    style: "ladies styling",
  },
  {
    name: "Adriana ",
    time: "Monday 6:00-7:00pm",
    level: "beginner",
    style: "ladies styling",
  },
  {
    name: "Steven",
    time: "Monday 6:00-9:00pm",
    time2: "Wednesday 6:00-9:00pm",
    level: "beginner",
    level2: "intermediate",
    style: "Kizomba",
    style2: "Bachata",
    style3: "Salsa",
    other: "Jazz Band Club",
  },
  {
    name: "Alain",
    time: "Saturday  5:00-7:00pm",
    level: "beginner ",
    other: "Jazz Band Club",
  },
];

const BookSchedule = ({ bookingName: bookingTeacher, setHidden }) => {
  const { name, discipline, level, style, time } = bookingTeacher;
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");
  const { hidden, onSubmit } = useOnSudmit();
  const [message, setMessage] = useState(true);

  useEffect(() => {
    if (onSubmit) {
      setResult("Thank you for booking your class with");
    }

    setTimeout(() => {
      setHidden(true);
    }, 10000);
  }, []);

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
  };

  const labelStyle = {
    fontWeight: "bold",
    fontSize: "16px",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const selectStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const textareaStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const inputStyleSubmit = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const selectOptionsStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  // ================ handle after form being submite =====================

  return (
    <>
      {!hidden ? (
        <form style={formStyle} onSubmit={onSubmit}>
          <label htmlFor="name" style={labelStyle}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={inputStyle}
          />

          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={inputStyle}
          />

          <label htmlFor="instructor" name="instructor" style={labelStyle}>
            Instructor:{name}
          </label>
          <input
            style={inputStyle}
            type="text"
            name="instructor"
            value={name}
            readOnly
          />
          <input
            style={inputStyle}
            type="text"
            name="discipline"
            value={discipline}
            readOnly
          />
          <input
            style={inputStyle}
            type="text"
            name="style"
            value={style}
            readOnly
          />
          <input
            style={inputStyle}
            type="text"
            name="level"
            value={level}
            readOnly
          />
          <label htmlFor="time">Day and time</label>
          <input
            style={inputStyle}
            type="text"
            name="time"
            value={time}
            readOnly
          />

          <label style={labelStyle}>Write your messages here</label>
          <textarea
            style={textareaStyle}
            name="message"
            rows="6"
            placeholder="Enter your message "
            required
          ></textarea>

          <button type="submit" style={inputStyleSubmit}>
            Book Schedule
          </button>
        </form>
      ) : (
        <span
          style={{
            fontSize: "28px",
            fontWidth: "inherit",
          }}
        >
          {result} instructor {name}
        </span>
      )}
    </>
  );
};

export default BookSchedule;
