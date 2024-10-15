import React, { useState } from "react";
// import "./AuthForm.css"; 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? '/auth/signup' : '/auth/login';
    const data = isSignup 
      ? {
          username: formData.username,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword
        } 
      : {
          loginCredential: formData.loginCredential,
          loginPassword: formData.loginPassword
        };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.ok) {
        console.log(result.message);
        alert('You have successfully created an account with us')
        if (!isSignup) {
          localStorage.setItem('token', result.token); // Store JWT token
        }
      } else {
        alert(result.message);
      }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    } catch (error) {
      console.error('Login error:', error); // Log the actual error
    
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
