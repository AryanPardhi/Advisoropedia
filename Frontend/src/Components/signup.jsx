import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          password: credentials.password
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.token);
        navigate("/post");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Something went wrong:", error);
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
          Signup
        </h2>
        <div
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
            <label htmlFor="username" className="form-label text-light">
              Name
            </label>
            <input
              required
              type="text"
              name="username"
              value={credentials.username}
              className="form-control"
              id="username"
              aria-describedby="nameHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={credentials.email}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={onChange}
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
              name="password"
              type="password"
              value={credentials.password}
              className="form-control"
              id="password"
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

export default Signup;
