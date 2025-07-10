import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { emailOrPhone, password });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="heading">HANGOUT</h1>
        <form onSubmit={handleSubmit}>
          <label>Email ID / Phone Number</label>
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          <div className="form-footer">
            <p>
              Haven't signed in? <Link to="/signup">Click here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
