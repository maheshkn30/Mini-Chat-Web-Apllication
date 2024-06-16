import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import Logo from "../img/rosechat.jpg";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false); // State to track if email has been sent
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Send email verification
      await sendEmailVerification(auth.currentUser);
      setEmailSent(true); // Update state to indicate email has been sent

      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // Create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // Create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("../login");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">
          Rose Chat
          <img src={Logo} alt="" className="RoseLogo" />
        </span>
        <span className="title">REGISTER</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display Name" />
          <input required type="email" placeholder="E-mail" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label required htmlFor="file">
            <img src={Add} alt="" />
            <span>Add a Profile Picture</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {emailSent && (
            <span>Email verification sent.Please verify your email.</span>
          )}
          {loading && "Uploading the image, please wait..."}
          {err && <span>Email is already Registered! </span>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
