import React from "react";

const Message = ({ message }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
        height: "400px",
        backgroundClip: "red",
        border: "1px solid red",
        position: "relative",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        borderRadius: "40px",
        boxShadow: "4px white black",
        color: "green",
      }}
    >
      <span
        style={{
          fontSize: "28px",
          fontWidth: "inherit",
          fontFamily: "monospace",
        }}
      >
        {message}
      </span>
    </div>
  );
};

export default Message;
