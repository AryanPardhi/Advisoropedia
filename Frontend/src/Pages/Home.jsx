import React from "react";
import { AuthProvider, useAuth } from "../Auth/auth-context";
const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className="text-center d-flex align-items-center justify-content-center position-relative">
        <h1 className="position-fixed top-50 text-success">Please login to see posts</h1>
      </div>
    </>
  );
};

export default Home;
