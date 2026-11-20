// src/data/cancellations.js
// Add dates here in YYYY-MM-DD format. Schedule and Booking use this same array.
export const cancellations = [
  {
    date: "2026-11-21",
    title: "Regular Saturday classes cancelled",
    reason:
      "Our Salsa & Bachata Weekend Intensive takes place November 20–22. Regular Saturday classes are cancelled on November 21; your membership is unaffected.",
  },
];

export const getCancellation = (date) =>
  cancellations.find((item) => item.date === date);
