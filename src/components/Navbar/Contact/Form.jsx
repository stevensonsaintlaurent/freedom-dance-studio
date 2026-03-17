import React from "react";

export default function Form({
  label,
  text,
  typeInput,
  name,
  placeholder,
  value,
  onChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label>{label}</label>
      <p>{text}</p>
      <input
        type={typeInput}
        name={name}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />

      <label>{label}</label>
      <textarea
        name="message"
        rows="6"
        placeholder={placeholder}
        required
      ></textarea>
      <button type="submit" className="btn dark-btn">
        {textButton} <img src={white_arrow} alt="" />
      </button>
    </form>
  );
}
