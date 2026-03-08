import { useEffect, useState } from "react";
import white_arrow from "../../../assets/white-arrow.png";

export default function RegistrationForm({ onSubmit }) {
  const [levels, setLevels] = useState([]);
  const [times, setTimes] = useState([]);
  const [classesList, setClassesList] = useState([]);
  const [days, setDays] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [message, setMessage] = useState("");
  const [manegeClass, setManegeClass] = useState(false);
  const [instructor, setInstructor] = useState("");

  const handleClassDayLevelTime = (e) => {
    e.preventDefault();

    const selectedClass = e.target.value;

    let selectDay;
    if (selectedClass === "Monday") {
      setLevels(["Beginner"]);
      setClassesList(["Kizomba", "Lady Styling", "Bachata"]);
      setTimes(["6:00-7:00 PM", "7:00-8:00 PM", "8:00-9:00 PM"]);
      selectDay = "Monday";
      setDays([selectDay]);
      setInstructor("Instructor: Steven and Adriana");
    } else if (selectedClass === "Tuesday") {
      setClassesList(["Konpa"]);
      selectDay = "Tuesday";
      setDays([selectDay]);
      setLevels(["Beginner"]);
      setTimes(["8:00-9:00 PM"]);
      setInstructor("Instructor: Steven");
    } else if (selectedClass === "Wednesday") {
      setLevels(["Intermediate"]);
      setDays(["Wednesday"]);
      selectDay = "Wednesday";
      setClassesList(["Kizomba", "Bachata"]);
      setTimes(["6:00-7:00 PM", "7:00-8:00 PM", "8:00-9:00 PM"]);
      setInstructor("Instructor: Steven");
    } else if (selectedClass === "Thursday") {
      selectDay = "Thursday";
      setClassesList(["Lady Styling"]);
      setDays([selectDay]);
      setLevels(["Beginner"]);
      setTimes(["6:30-7:30 PM"]);
      setInstructor("Instructor: Zagir");
    } else if (selectedClass === "Saturday") {
      setClassesList(["Kizomba", "Bachata", "Salsa"]);
      selectDay = "Saturday";
      setDays([selectDay]);
      setLevels(["Beginner", "Intermediate", "Advanced"]);
      setTimes([
        "2:00-3:00 PM",
        "3:00-4:00 PM",
        "4:00-5:00 PM",
        "5:00-6:00 PM",
      ]);
      setInstructor("Instructor: Steven and Desmond");
    } else {
      selectDay =
        "Please select a valid day to see available classes, levels and times.";
      setMessage(selectDay);
      setManegeClass(false);
    }

    setSelectedClass(selectedClass);
    setManegeClass(true);
    e.target.reset();

    return selectDay;
  };

  useEffect(() => {
    // Reset levels, times and classes when selectedClass changes
    if (selectedClass === "Sunday" || selectedClass === "Friday") {
      setLevels([]);
      setTimes([]);
      setClassesList([]);
      setDays([]);
      setMessage(
        "No classes available on this day  please choose a day we have classes to register",
      );
      setManegeClass(false);
    } else {
      setMessage("When you register you will receive one hour for free.");
    }

    setSelectedClass(selectedClass);
  }, [selectedClass]);

  // function handleSubmitFordaysNotAvaileble() {
  //   if (selectedClass === "Sunday" || selectedClass === "Friday") {
  //     setTimeout(() => {
  //       setMessage(
  //         " No classes available on this day please choose a day we have classes to register ",
  //       );
  //     }, 10000);
  //   } else {
  //     onSubmit;
  //   }
  // }
  console.log(days);

  return (
    <form onSubmit={onSubmit}>
      <label>Your name</label>
      <input type="text" name="name" placeholder=" Enter your name" required />

      <label>Your Email</label>
      <input
        type="email"
        name="email"
        placeholder=" Enter your email Address"
        required
      />

      <label>Phone Number</label>
      <input
        type="tel"
        name="phone"
        placeholder=" Enter your mobile number"
        required
      />

      <label>Preferred Day</label>
      <p>Please capitalize the first letter of the day</p>
      <input
        type="text"
        name="Day Style Level  Time "
        placeholder=" Enter your preferred day,"
        required
        value={selectedClass}
        onChange={handleClassDayLevelTime}
      />
      {manegeClass === true ? (
        <div>
          <input
            type="text"
            name="style"
            value={classesList.join(", ")}
            readOnly
          />
          <input type="text" name="level" value={levels.join(", ")} readOnly />
          <input type="text" name="time" value={times.join(", ")} readOnly />
          <input type="text" name="instructor" value={instructor} readOnly />
        </div>
      ) : (
        <p>{message}</p>
      )}

      <label>Write your messages here</label>
      <textarea
        name="message"
        rows="6"
        placeholder="Enter your message "
        required
      ></textarea>
      <button type="submit" className="btn dark-btn">
        Register now <img src={white_arrow} alt="" />
      </button>
    </form>
  );
}
