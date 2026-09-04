import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";

// Restore the selected language after a refresh/navigation. Google Website
// Translator handles the actual translation of the rendered site text.
const savedLanguage = localStorage.getItem("freedom-dance-language") || "en";
document.documentElement.lang = savedLanguage;
if (!document.cookie.includes("googtrans=/en/")) {
  document.cookie = `googtrans=/en/${savedLanguage}; path=/; SameSite=Lax`;
}
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer position="top-center" autoClose={10000} />
  </StrictMode>,
);
