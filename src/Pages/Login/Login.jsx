import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './Login.css';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo login - accept any credentials
      const userData = {
        id: '1',
        name: emailOrPhone.split('@')[0] || 'User',
        email: emailOrPhone,
        avatar: `https://ui-avatars.com/api/?name=${emailOrPhone.split('@')[0]}&background=00ffff&color=000`
      };
      
      login(userData);
      navigate('/home');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

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
