import { useRef, useState } from "react";
import { toast } from "react-toastify";

const useOnSudmit = () => {
  const [hidden, setHidden] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const textRef = useRef("");

  const setText = (message) => {
    textRef.current = message;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!import.meta.env.VITE_ACCESS_KEY) {
      console.error("VITE_ACCESS_KEY is missing.");
      toast.error("Form configuration error. Please try again later.");
      return;
    }

    setHidden(true);
    setSubmitted(true);

    const formData = new FormData(form);

    formData.set("access_key", import.meta.env.VITE_ACCESS_KEY);

    if (!formData.get("subject")) {
      formData.set("subject", "Freedom Dance Studio Website Submission");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          textRef.current ||
            "Thank you! Your request has been submitted successfully.",
        );

        form.reset();
        setHidden(false);
      } else {
        console.error("Web3Forms error:", data);

        toast.error(data.message || "Something went wrong. Please try again.");

        setHidden(false);
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);

      toast.error("Something went wrong. Please try again later.");

      setHidden(false);
    }
  };

  return {
    setText,
    hidden,
    onSubmit,
    submitted,
  };
};

export default useOnSudmit;
