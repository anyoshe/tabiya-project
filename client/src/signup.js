// Signup.js
import React from "react";
import './Signup.css';  // You'll create this CSS file

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create a New Account</h2>
        <form>
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password:</label>
          <input type="password" placeholder="Enter a password" />

          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm your password" />

          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/signin">Sign in here</a></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
