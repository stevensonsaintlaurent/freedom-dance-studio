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
