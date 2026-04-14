import React, { useState } from "react";
import play_icon from "../../assets/play-icon.png";
import BookSchedule from "../Navbar/Contact/BookSchedule";
import { Link } from "react-scroll";

const SingleInstructor = ({
  teachers,
  closePlayer,
  setInstructorVideo,
  setPlayVideo,
  showFullBio,
  setShowFullBio,
  playVideo,
  player,
  instructoVideo,
  setHidden,
  hidden,
}) => {
  const [bookingName, setBookingName] = useState();

  return (
    <>
      {hidden ? (
        <div>
          {teachers.map((info) => {
            const {
              id,
              href,
              role,
              image,
              bio,
              name,
              style,
              discipline,
              video,
            } = info;

            // ======== Handle Video =========
            function handlePlayVideo(id) {
              const teacher = teachers.find((item) => item.id === id);
              setPlayVideo(teacher.video);
              setInstructorVideo(true);
            }

            // ======== Handle Booking =========

            function handleBooking(id) {
              const findInstructor = teachers.find((per) => per.id === id);
              setBookingName(findInstructor);

              setHidden(false);
            }

            return (
              <div
                key={id}
                className=" instructor-card"
                style={{ position: "relative" }}
              >
                <img src={image} />
                <h2> {name}</h2>
                <p className="role">{discipline}</p>
                <p>{showFullBio === id ? bio : bio.substring(0, 90) + "..."}</p>
                <button
                  className="btn-text"
                  onClick={(e) => {
                    e.preventDefault();
                    if (showFullBio === id) return setShowFullBio(null);

                    setShowFullBio(id);
                  }}
                >
                  {showFullBio === id ? "Less" : "More"}
                </button>
                <img
                  src={play_icon}
                  alt={name}
                  className="play-icon inst"
                  onClick={() => handlePlayVideo(id)}
                />
                <div
                  className={`video-player ${instructoVideo ? "" : "hide"}`}
                  ref={player}
                  onClick={closePlayer}
                >
                  <video src={playVideo} autoPlay muted controls></video>
                </div>
                <Link
                  to="instructors"
                  type="button"
                  className="btn dark-btn"
                  onClick={() => handleBooking(id)}
                >
                  Book Now
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <BookSchedule bookingName={bookingName} setHidden={setHidden} />
      )}
    </>
  );
};

export default SingleInstructor;
