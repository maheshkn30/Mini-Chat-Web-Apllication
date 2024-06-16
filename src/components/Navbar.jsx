import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleProfileClick = () => {
    // Display user details in toast
    toast.info(
      `Email: ${currentUser.email}\nName: ${currentUser.displayName}`,
      {
        autoClose: 3000, // Close the toast after 5 seconds
      }
    );
  };

  return (
    <div className="navbar">
      <span className="logo">Rose Chat</span>
      <div className="user">
        <div onClick={handleProfileClick}>
          <img src={currentUser.photoURL} alt="" />
        </div>
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
