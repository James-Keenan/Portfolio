import { useState } from "react";

/**
 * Custom hook to handle Formspree form submissions
 * @param {string} formId - Your Formspree form ID
 * @returns {object} Form state and handlers
 */
const useFormspree = (formId) => {
  const [status, setStatus] = useState({
    type: "", // 'success', 'error', ''
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (formData) => {
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        return { success: true };
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setStatus({ type: "", message: "" });
  };

  return {
    status,
    isSubmitting,
    submitForm,
    resetStatus,
  };
};

export default useFormspree;
