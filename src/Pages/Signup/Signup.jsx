import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    emailOrPhone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = formData.password;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        'Password must:\n' +
        '- Be at least 8 characters long\n' +
        '- Include at least 1 uppercase letter\n' +
        '- Include at least 1 lowercase letter\n' +
        '- Include at least 1 number\n' +
        '- Include at least 1 special character (e.g. @, #, $)'
      );
      return;
    }

    console.log('Signing up with:', formData);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="heading">HANGOUT</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Email ID / Phone Number</label>
          <input
            name="emailOrPhone"
            type="text"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
          />

          <button type="submit">Sign Up</button>

          <div className="form-footer">
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
