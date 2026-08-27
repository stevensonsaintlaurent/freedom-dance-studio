import { useRef, useState } from "react";
import { toast } from "react-toastify";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const DEFAULT_SUBJECT = "Freedom Dance Studio — New Website Submission";

/**
 * Convert a form type into a cleaner email subject.
 *
 * Examples:
 * Studio Rental -> Freedom Dance Studio — New Studio Rental Request
 * Class Booking -> Freedom Dance Studio — New Class Booking Request
 * Contact -> Freedom Dance Studio — New Contact Request
 */
const createSubject = (formType) => {
  if (!formType) {
    return DEFAULT_SUBJECT;
  }

  const normalized = String(formType).trim();

  if (!normalized) {
    return DEFAULT_SUBJECT;
  }

  const lower = normalized.toLowerCase();

  if (lower.includes("rental")) {
    return "Freedom Dance Studio — New Studio Rental Request";
  }

  if (lower.includes("booking")) {
    return "Freedom Dance Studio — New Class Booking Request";
  }

  if (lower.includes("contact")) {
    return "Freedom Dance Studio — New Contact Request";
  }

  if (lower.includes("event")) {
    return "Freedom Dance Studio — New Event Request";
  }

  if (lower.includes("workshop")) {
    return "Freedom Dance Studio — New Workshop Request";
  }

  if (lower.includes("membership")) {
    return "Freedom Dance Studio — New Membership Request";
  }

  return `Freedom Dance Studio — New ${normalized} Request`;
};

const useOnSudmit = () => {
  const [hidden, setHidden] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const textRef = useRef("");

  /**
   * Allows each component to customize its success message.
   *
   * Example:
   * setText("Your rental request has been received!");
   */
  const setText = (message) => {
    textRef.current = message;
  };

  /**
   * Global Web3Forms submission handler.
   *
   * Every form on the website can use this same hook:
   *
   * <form onSubmit={onSubmit}>
   *
   * The form can optionally provide:
   *
   * <input
   *   type="hidden"
   *   name="form_type"
   *   value="Studio Rental"
   * />
   *
   * If form_type is missing, the hook still works.
   */
  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form) {
      console.error("Web3Forms: Form element was not found.");

      toast.error("Something went wrong. Please try again.");

      return {
        success: false,
        error: "Form element not found",
      };
    }

    const accessKey = import.meta.env.VITE_ACCESS_KEY;

    if (!accessKey) {
      console.error("VITE_ACCESS_KEY is missing.");

      toast.error("Form configuration error. Please try again later.");

      return {
        success: false,
        error: "Missing Web3Forms access key",
      };
    }

    setHidden(true);
    setSubmitted(false);

    /*
     * Collect all fields from the current form.
     *
     * This keeps the hook completely generic.
     * RentalBooking, Booking, Contact, etc. can
     * all send completely different fields.
     */
    const formData = new FormData(form);

    /*
     * ----------------------------------------------------
     * GLOBAL WEB3FORMS SETTINGS
     * ----------------------------------------------------
     */

    formData.set("access_key", accessKey);

    /*
     * Determine what type of form was submitted.
     *
     * Priority:
     *
     * 1. form_type
     * 2. formType
     * 3. type
     * 4. default
     */
    const formType =
      formData.get("form_type") ||
      formData.get("formType") ||
      formData.get("type") ||
      "Website Submission";

    /*
     * Add a standardized form type.
     *
     * This means every form will have a consistent
     * identifier inside Web3Forms.
     */
    formData.set("form_type", String(formType));

    /*
     * Create a professional subject automatically.
     *
     * If a component already provides its own subject,
     * we respect that subject.
     */
    if (!formData.get("subject")) {
      formData.set("subject", createSubject(formType));
    }

    /*
     * Add the website source.
     *
     * This is useful when you eventually have multiple
     * websites/forms using the same Web3Forms account.
     */
    formData.set(
      "website",
      "Freedom Dance Studio — vegasfreedomdancestudio.com",
    );

    /*
     * Add the page URL automatically.
     *
     * This lets you know exactly where the submission
     * came from.
     */
    if (!formData.get("page_url")) {
      formData.set("page_url", window.location.href);
    }

    /*
     * Add the page title automatically.
     */
    if (!formData.get("page_title")) {
      formData.set("page_title", document.title);
    }

    /*
     * ----------------------------------------------------
     * OPTIONAL REPLY-TO SUPPORT
     * ----------------------------------------------------
     *
     * If the form contains an "email" field, tell
     * Web3Forms to use that address for replies.
     *
     * This makes it much easier to simply hit Reply
     * from your email client.
     */
    const customerEmail =
      formData.get("email") ||
      formData.get("Email") ||
      formData.get("customer_email") ||
      formData.get("customerEmail");

    if (customerEmail) {
      formData.set("replyto", String(customerEmail).trim());
    }

    /*
     * ----------------------------------------------------
     * SUBMIT TO WEB3FORMS
     * ----------------------------------------------------
     */
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      /*
       * Web3Forms normally returns JSON.
       * We still protect against malformed responses.
       */
      let data;

      try {
        data = await response.json();
      } catch (jsonError) {
        console.error("Web3Forms returned an invalid response:", jsonError);

        setHidden(false);
        setSubmitted(false);

        toast.error("The form service returned an unexpected response.");

        return {
          success: false,
          error: "Invalid Web3Forms response",
        };
      }

      /*
       * ----------------------------------------------------
       * SUCCESS
       * ----------------------------------------------------
       */
      if (response.ok && data.success) {
        setSubmitted(true);

        toast.success(
          textRef.current ||
            "Thank you! Your request has been submitted successfully.",
        );

        /*
         * Reset the form only after Web3Forms
         * confirms successful submission.
         */
        form.reset();

        setHidden(false);

        return {
          success: true,
          data,
        };
      }

      /*
       * ----------------------------------------------------
       * WEB3FORMS ERROR
       * ----------------------------------------------------
       */
      console.error("Web3Forms error:", data);

      toast.error(data?.message || "Something went wrong. Please try again.");

      setHidden(false);
      setSubmitted(false);

      return {
        success: false,
        data,
      };
    } catch (error) {
      /*
       * ----------------------------------------------------
       * NETWORK ERROR
       * ----------------------------------------------------
       */
      console.error("Web3Forms submission error:", error);

      toast.error(
        "Unable to submit the form. Please check your connection and try again.",
      );

      setHidden(false);
      setSubmitted(false);

      return {
        success: false,
        error,
      };
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
