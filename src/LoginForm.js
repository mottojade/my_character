import React from "react";
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <h1 className="form-title">Login</h1>
        <div className="form-input-container">
          <input type="text" className="form-input" placeholder="Username" />
          <i className="form-input-icon fas fa-user"></i>
        </div>
        <div className="form-input-container">
          <input
            type="password"
            className="form-input"
            placeholder="Password"
          />
          <i className="form-input-icon fas fa-lock"></i>
        </div>
        <button className="form-button">Login</button>
        <a href="#" className="form-link">
          Register
        </a>
      </div>
    </div>
  );
};


export default LoginForm;
