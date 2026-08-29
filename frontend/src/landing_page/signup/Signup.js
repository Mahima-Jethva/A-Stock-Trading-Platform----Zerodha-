import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:3002/signup",
  //       { ...inputValue },
  //       { withCredentials: true }
  //     );
      
  //     if (data.success) {
  //       alert(data.message || "Signed up successfully!");
  //       navigate("/login"); // Direct login route par redirect
  //     } else {
  //       alert(data.message || "Signup failed");
  //     }
  //   } catch (error) {
  //     console.error("Signup Error:", error);
  //     alert("Error connecting to server. Is Backend running on port 3002?");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://a-stock-trading-platform-zerodha.onrender.com/signup",
        { ...inputValue },  
        { withCredentials: true }
      );
      
      const { success, message } = data;
      if (success) {
        alert(message || "Signup Successful!");
        navigate("/login"); // Successful signup par Login page par le jaye
      } else {
        alert(message || "User already exists!");
      }
    } catch (error) {
      console.log(error);
      alert("Backend error! Please check nodemon terminal for crash log.");
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container p-5 md-5">
      <div className="row text-center">
        <div className="col-6 p-5">
          <img src="images/signup.png" style={{ width: "100%" }} alt="Signup" />
        </div>
        <div className="col-6 p-5 text-start">
          <h2>Signup Now</h2>
          <p className="text-muted">Or track your existing application.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                className="form-control"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                className="form-control"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                className="form-control"
                onChange={handleOnChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary fs-5 mb-3" style={{ width: "100%" }}>
              Submit
            </button>
            <br />
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;