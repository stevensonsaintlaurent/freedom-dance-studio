import { useState } from "react";

export const StyleDance = ({ id, title, description }) => {
  const [learn, setLearn] = useState(false);
  const buttonStyle = {
    // backgroundColor: "rgb(3, 59, 118)",
    color: "#007fff",
    border: "none",

    // padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    // marginTop: "10px",
    // margin: `{learn ? "10px" :  20px"}`,
    fontSize: "14px",
    fontWeight: "bold",
  };

  return (
    <>
      <h2>{title}</h2>
      <p>
        {learn ? description : description.substring(0, 200) + "..."}

        <button style={buttonStyle} onClick={() => setLearn(!learn)}>
          {learn ? "Show Less" : "Show More"}
        </button>
      </p>
    </>
  );
};
