import React from 'react';
import './App.css';

function App() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Create account</h1>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" required />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Name" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Password" required />

        <button type="submit">Sign Up</button>
        <p>Already Registered? <a href="login.js">Login</a></p>

        <div className="social-icons">
            <a href="https://www.instagram.com"><img src="instagram-icon.png" alt="Instagram" /></a>
            <a href="https://www.facebook.com"><img src="facebook-icon.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src="twitter-icon.png" alt="Twitter" /></a>

        </div>
      </form>
    </div>
  );
}

export default App;
