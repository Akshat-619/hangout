import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './ModernLogin.css';

const ModernLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const userData = {
        id: Date.now(),
        name: email.split('@')[0] || 'User',
        email: email,
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=00ffff&color=000&size=200`
      };
      
      login(userData);
      navigate('/home');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modern-login-container">
      <div className="login-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="login-content">
        <div className="login-card">
          <div className="login-header">
            <Link to="/" className="back-button">
              <span>←</span> Back
            </Link>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className={`input-group ${isFocused === 'email' ? 'focused' : ''}`}>
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused('email')}
                onBlur={() => setIsFocused('')}
                required
                disabled={loading}
                placeholder="you@example.com"
              />
              <div className="input-border"></div>
            </div>

            <div className={`input-group ${isFocused === 'password' ? 'focused' : ''}`}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsFocused('password')}
                onBlur={() => setIsFocused('')}
                required
                disabled={loading}
                placeholder="•••••••••"
              />
              <div className="input-border"></div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button 
              type="submit" 
              disabled={loading}
              className="login-button"
            >
              <span className="button-text">
                {loading ? 'Signing in...' : 'Sign In'}
              </span>
              {loading && <div className="button-loader"></div>}
            </button>

            <div className="form-footer">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
              <p><Link to="/forgot-password">Forgot password?</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModernLogin;
