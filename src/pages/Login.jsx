import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [err, setErr] = useState(false);
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    toast("Welcome!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (!user.emailVerified) {
        setEmailNotVerified(true);
      } else {
        navigate("/");
      }
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <ToastContainer />
      <div className="formWrapper">
        <span className="logo">Rose Chat</span>
        <span className="title">LOGIN</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Password" required />

          <button>Login</button>
          {err && <span>Invalid E-mail and Password</span>}
          {emailNotVerified && (
            <span>Email not verified. Please verify your email.</span>
          )}
        </form>
        <h4>
          <Link to="/reset">Reset Password</Link>
        </h4>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
