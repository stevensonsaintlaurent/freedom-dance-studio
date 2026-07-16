import React, { useEffect, useState } from "react";
import useOnSudmit from "./../../../hooks/useOnSudmit";
import { dataRooms } from "./Contact/data";

const BookEvent = ({ setShow, result, setResult }) => {
  const { hidden, onSubmit } = useOnSudmit();
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [hour, setHour] = useState(0);
  const [cost, setCost] = useState(0);

  function handleRoom(e) {
    const room = e.target.value;
    const roomData = dataRooms.find((item) => item.name === room);
    calculCost(roomData.name);
  }

  // ========= Handle the total hours ===========

  function calculTotalHours() {
    setHour(
      Math.abs(
        new Date(`01/01/2000 ${timeEnd}`) - new Date(`01/01/2000 ${timeStart}`),
      ) / 36e5,
    );
  }

  // ========= Handle the cost ===========

  function calculCost(room) {
    let totalPrices = 0;
    if (room === "main room" && hour > 0) {
      totalPrices = hour * 25;
    } else if (room === "kizomba room" && hour > 0) {
      totalPrices = hour * 15;
    } else if (room === "both" && hour > 0) {
      totalPrices = hour * 50;
    }
    setCost(totalPrices);
  }

  useEffect(() => {
    calculTotalHours();
  }, [timeStart, timeEnd]);

  function resetAll() {
    setTimeStart("");
    setTimeEnd("");
    setHour(0);
    setCost(0);
    setShow(false);
  }

  // ========= style for the form ===========

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

  if (!setShow) {
    return null;
  }

  if (onSubmit) {
    setResult(
      "Thank you for  booking an event with us! We have received your submission. If you have any questions or need assistance, you may contact us directly at",
    );
  }
  return (
    <>
      {!hidden ? (
        <form style={formStyle} onSubmit={onSubmit}>
          <h1>Book an Event</h1>
          <label style={labelStyle}>Your name</label>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder=" Enter your name"
            required
          />

          <label style={labelStyle}>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder=" Enter your email Address"
            required
            style={inputStyle}
          />

          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder=" Enter your mobile number"
            required
            style={inputStyle}
          />

          <label htmlFor="date" style={labelStyle}>
            Choose your date
          </label>
          <input
            style={inputStyle}
            type="date"
            name="date"
            placeholder="Choose your date"
          />

          <label htmlFor="start" style={labelStyle}>
            Start
          </label>
          <input
            style={inputStyle}
            type="time"
            name="time"
            placeholder="Choose your start time"
            value={timeStart}
            onChange={(e) => setTimeStart(e.target.value)}
          />
          <br />

          <label htmlFor="end" style={labelStyle}>
            End
          </label>
          <input
            style={inputStyle}
            type="time"
            name="time"
            placeholder="Choose your end time"
            value={timeEnd}
            onChange={(e) => setTimeEnd(e.target.value)}
          />

          <label htmlFor="hour" style={labelStyle}>
            For how long
          </label>
          <input
            style={inputStyle}
            type="hour"
            name="hour"
            placeholder="for how long"
            value={hour}
            readOnly
            onChange={calculTotalHours}
          />

          <label htmlFor="room">Select a room</label>
          <select name="room" onChange={handleRoom} style={selectStyle}>
            <option
              style={selectOptionsStyle}
              value="main room"
              name="main room"
            >
              Main Room
            </option>
            <option
              style={selectOptionsStyle}
              value="kizomba room"
              name="kizomba room"
            >
              Kizomba Room
            </option>
            <option style={selectOptionsStyle} value="both" name="both">
              Both Rooms
            </option>
          </select>

          <label htmlFor="cost" style={labelStyle}>
            Cost Idea $
          </label>
          <input
            style={inputStyle}
            type="number"
            name="cost"
            placeholder="this is your cost"
            value={cost}
            defaultValue={`$${cost}`}
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
          <button
            type="submit"
            className="btn dark-btn"
            style={inputStyleSubmit}
          >
            Reserve now
          </button>

          <button
            type="button"
            className="btn light-btn"
            style={inputStyleSubmit}
            onClick={() => resetAll()}
          >
            reset
          </button>
        </form>
      ) : (
        <span
          style={{
            fontSize: "38px",
            fontWidth: "inherit",
            backgroundColor: "GrayText",
            width: "100%",
            height: "50vh",
            borderRadius: "100px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            fontFamily: "monospace",
            color: "white",
          }}
        >
          {result}
        </span>
      )}
    </>
  );
};

export default BookEvent;
