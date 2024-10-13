import React from "react";
import './App.css';
import logo from './image.png';  // The Skills Navigator image
import background from './background.jpg';
 // Background image

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <div className="navbar">
          <a href="/freelancer">Sign up as a freelancer</a>
          <a href="/contractor">Sign up as a contractor</a>
          <a href="/signin">Sign in</a>
          <a href="/contact">Contact us</a>
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
                <input type="email" placeholder="Enter email" />
                <label>Password:</label>
                <input type="password" placeholder="Enter password" />
                <button type="submit">Sign Up</button>
                <p>Already Registered? <a href="/signup">Signup</a></p>
              </form>
            </div>
          </div>
        </div>

        <footer>
          <p>Connect, Empower, Grow</p>
          <div className="socials">
            <a href="https://instagram.com"><img src="/instagram-icon.png" alt="Instagram" /></a>
            <a href="https://facebook.com"><img src="/facebook-icon.png" alt="Facebook" /></a>
            <a href="https://twitter.com"><img src="/twitter-icon.png" alt="Twitter" /></a>
          </div>
        </footer>
      </header>
    </div>
  );
}

export default App;
