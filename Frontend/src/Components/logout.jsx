// logout.js
import React from "react";
import { useAuth } from "../Auth/auth-context";

const Logout = () => {
  const { setIsLoggedIn } = useAuth(); // Fetch setIsLoggedIn method

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Set isLoggedIn state to false
    window.location.href = "/";
  };

  return (
    <button onClick={handleLogout} className="btn btn-primary">
      Logout
    </button>
  );
};

export default Logout;