// src/data/cancellations.js
// Add dates here in YYYY-MM-DD format. Schedule and Booking use this same array.
export const cancellations = [
  {
    date: "2026-11-26",
    title: "Thanksgiving Day – Studio Closed",
    reason:
      "In observance of Thanksgiving Day, all regular classes are cancelled on Thursday, November 26. Your membership is unaffected. Happy Thanksgiving from Freedom Dance Studio!",
  },
];

export const getCancellation = (date) =>
  cancellations.find((item) => item.date === date);
