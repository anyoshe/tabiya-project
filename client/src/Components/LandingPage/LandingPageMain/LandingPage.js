import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Signup from './signup'; // Import Signup component
import './LandingPage.css';
import logo from './image.png';  // The Skills Navigator image
import background from './background.jpg'; // Background image

function LandingPage() {
  return (
    
      <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                <h2>Login to Your Account</h2>
                <form>
                  <label>Email:</label>
                  <input type="email" placeholder="Enter email" required />
                  <label>Password:</label>
                  <input type="password" placeholder="Enter password" required />
                  <button type="submit">Log In</button>
                  {/* <p>Not registered yet? <Link to="/signup">Signup</Link></p> */}
                </form>
              </div>
            </div>
          </div>

          <footer>
            <p>Connect, Empower, Grow</p>
            <div className="socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-icon.png" alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/facebook-icon.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/twitter-icon.png" alt="Twitter" />
              </a>
            </div>
          </footer>
        </header>

    </div>
  );
}

export default LandingPage;
