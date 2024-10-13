import React, { useState } from "react";
import "./AuthForm.css"; // Import the CSS styles

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    loginCredential: "",
    loginPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
      } else {
        // Handle signup logic here
        console.log("Sign up data:", formData);
      }
    } else {
      // Handle login logic here
      console.log("Login data:", formData);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {isSignup && (
          <>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {!isSignup && (
          <div className="form-group">
            <label>Email or Phone</label>
            <input
              type="text"
              name="loginCredential"
              placeholder="Enter email or phone number"
              value={formData.loginCredential}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name={isSignup ? "password" : "loginPassword"}
            placeholder="Enter password"
            value={isSignup ? formData.password : formData.loginPassword}
            onChange={handleChange}
            required
          />
        </div>

        {isSignup && (
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit" className="auth-button">
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <div className="toggle-auth">
        {isSignup ? (
          <p>
            Already have an account?{" "}
            <button onClick={() => setIsSignup(false)}>Login here</button>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <button onClick={() => setIsSignup(true)}>Sign up here</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
