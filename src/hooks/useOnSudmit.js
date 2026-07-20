import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useOnSudmit = () => {
  const [hidden, setHidden] = React.useState(false);
  const [text, setText] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setHidden(true);
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    async function submitForm() {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          toast.success(text);
          event.target.reset();
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        toast.error("Something went wrong. Please try again later.");
      }
    }
    submitForm();
  };

  return { setText, hidden, onSubmit };
};

export default useOnSudmit;

// =========== those are the update file  ============

// const [result, setResult] = React.useState("");
// const [hidden, setHidden] = React.useState(false);

// const onSubmit = async (event) => {
//   event.preventDefault();
//   setResult("Registering....");
//   setHidden(true);
//   const formData = new FormData(event.target);

//   formData.append("access_key", "3148a73d-e80f-42d9-a521-d4c3192cb2c7");

//   const response = await fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     body: formData,
//   });

//   const data = await response.json();

//   if (data.success) {
//     setResult(
//       "Thank you for registering! We have received your submission. If you have any questions or need assistance, you may contact us directly at freedomdancelasvegas@gmail.com or call/text us at 725-724-0962 for assistance",
//     );
//     event.target.reset();
//   } else {
//     setResult(data.message);
//   }
// };

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setResult("");
//     setHidden(false);
//   }, 10000);

//   return () => clearTimeout(timer);
// }, [result]);
