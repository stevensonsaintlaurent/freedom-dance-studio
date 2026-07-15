import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AppD from "./AppD.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <AppD />
    <ToastContainer position="top-center" autoClose={20000} />
  </StrictMode>,
);
