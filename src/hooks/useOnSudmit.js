import { useState } from "react";
import { toast } from "react-toastify";

const useOnSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Web3Forms access key
    formData.set("access_key", import.meta.env.VITE_ACCESS_KEY);

    // Email subject based on booking type
    const bookingType =
      formData.get("bookingType") ||
      formData.get("form_type") ||
      "Website Booking";

    formData.set("subject", `Freedom Dance Studio - ${bookingType}`);

    setIsLoading(true);
    setSubmitted(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Submission failed");
      }

      toast.success("Booking submitted successfully!");

      setSubmitted(true);
      form.reset();

      return { success: true, data };
    } catch (error) {
      toast.error(error.message || "Something went wrong");

      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    isLoading,
    hidden: isLoading,
    submitted,
  };
};

export default useOnSubmit;
