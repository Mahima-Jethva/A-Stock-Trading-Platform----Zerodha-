import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://a-stock-trading-platform-zerodha.onrender.com/login",
        { ...inputValue },
        { withCredentials: true }
      );

      if (data.success) {
        localStorage.setItem("token", data.token);
        alert(data.message || "Login Successful!");
        // Exact Dashboard Port 3001 Redirect
        window.location.href = "https://your-zerodha-dashboard.vercel.app";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Error logging in. Check backend/credentials.");
    }
  };

  return (
    <div className="container p-5 md-5">
      <div className="row text-center">
        <div className="col-6 p-5">
          <img src="images/signup.png" style={{ width: "100%" }} alt="Login" />
        </div>
        <div className="col-6 p-5 text-start">
          <h2>Login to Zerodha</h2>
          <p className="text-muted">Enter your registered email and password.</p>
          <form onSubmit={handleSubmit}>
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
              Login
            </button>
            <br />
            <span>
              Don't have an account? <Link to="/signup">Signup</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;