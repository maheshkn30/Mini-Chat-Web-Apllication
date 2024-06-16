import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"; // Import auth directly from "firebase/auth"
import { useNavigate } from "react-router-dom";

const auth = getAuth(); // Get the auth instance

const ForgotPass = () => {
  const [emailSent, setEmailSent] = useState(false); // State to track if password reset email has been sent
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;

    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email); // Use sendPasswordResetEmail from auth

      // Update state to indicate email has been sent
      setEmailSent(true);

      // Show success toast
      toast.success(
        "Password reset email sent successfully! Please check your email.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      // Redirect to login page after 5 seconds
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      // Handle errors
      console.error("Error sending reset email:", error.message);
      toast.error("Error sending reset email. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Rose Chat</span>
        <span className="title">Reset Your Password</span>

        <form onSubmit={handleResetPassword}>
          <input type="email" placeholder=" Enter E-mail Id" />
          <button type="submit">Reset Password</button>
          {emailSent && (
            <span>
              Please check your email for
              <br />
              the password reset link.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
