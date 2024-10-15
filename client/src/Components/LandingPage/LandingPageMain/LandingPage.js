import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './LandingPage.css';
import logo from './image.png';  // The Skills Navigator image
import background from './background.png'; // Background image

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <Link to="/freelancer">Sign up as a freelancer</Link>
          <Link to="/contractor">Sign up as a contractor</Link>
          <Link to="/signin">Sign in</Link>
          <Link to="/contact">Contact us</Link>
        </div>

        <div className="content">
          <div className="left-section">
            <img src={logo} alt="Skills Navigator" className="navigator-img" />
          </div>
          
          <div className="right-section">
            <div className="login-box">
              <h2>Login account</h2>
              <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter email" required />
                <label>Password:</label>
                <input type="password" placeholder="Enter password" required />
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>

        <footer>
          <p>Connect, Empower, Grow</p>
          <div className="socials">
          </div>
        </footer>
      </header>
    </div>
  );
}

export default LandingPage;