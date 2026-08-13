import { useRef, useState } from "react";
import { toast } from "react-toastify";

const useOnSudmit = () => {
  const [hidden, setHidden] = useState(false);

  const textRef = useRef("");

  const setText = (message) => {
    textRef.current = message;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setHidden(true);

    const formData = new FormData(form);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    if (!formData.has("subject")) {
      formData.append("subject", "Freedom Dance Studio Website Submission");
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

        // IMPORTANT:
        // Submission is finished, so stop showing "Submitting..."
        setHidden(false);
      } else {
        setHidden(false);

        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);

      setHidden(false);

      toast.error("Something went wrong. Please try again later.");
    }
  };

  return {
    setText,
    hidden,
    onSubmit,
  };
};

export default useOnSudmit;
