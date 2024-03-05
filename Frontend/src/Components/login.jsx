// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/auth-context";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth(); // Fetch setIsLoggedIn method
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      if (json.success) {
        setIsLoggedIn(true);
        localStorage.setItem("token", json.token);
        navigate("/post");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center flex-column flex-md-row p-3 p-md-0"
        style={{ height: "calc(100vh - 56px)", gap: "12vw" }}
      >
        <h2
          style={{
            backgroundColor: "white",
            border: "2px solid white",
            borderRadius: "50px",
            padding: "10px 30px",
            textAlign: "center",
          }}
        >
          Login
        </h2>
        <div className="d-none"
          style={{ width: "2px", height: "70vh", backgroundColor: "white" }}
        ></div>
        <form
          style={{
            backgroundColor: "currentcolor",
            borderRadius: "50px",
            padding: "41px",
            border: "2px solid white",
          }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={credentials.email}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text text-light">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">
              Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;