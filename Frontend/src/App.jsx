// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/navBar";
import Login from "./Components/login";
import Signup from "./Components/signup"
import Post from "./Pages/post";
import Home from "./Pages/Home";
import { useAuth } from "./Auth/auth-context";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
