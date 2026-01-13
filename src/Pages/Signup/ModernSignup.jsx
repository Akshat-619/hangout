import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import './ModernSignup.css';

const ModernSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
      // Validate passwords match
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const userData = {
        id: Date.now(),
        name: name || email.split('@')[0] || 'User',
        email: email,
        avatar: `https://ui-avatars.com/api/?name=${name || email.split('@')[0]}&background=00ffff&color=000&size=200`
      };
      
      login(userData);
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modern-signup-container">
      <div className="signup-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="signup-content">
        <div className="signup-card">
          <div className="signup-header">
            <Link to="/" className="back-button">
              <span>←</span> Back
            </Link>
            <h1>Create Account</h1>
            <p>Join HANGOUT and start connecting</p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className={`input-group ${isFocused === 'name' ? 'focused' : ''}`}>
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setIsFocused('name')}
                onBlur={() => setIsFocused('')}
                required
                disabled={loading}
                placeholder="John Doe"
              />
              <div className="input-border"></div>
            </div>

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

            <div className={`input-group ${isFocused === 'confirmPassword' ? 'focused' : ''}`}>
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setIsFocused('confirmPassword')}
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
              className="signup-button"
            >
              <span className="button-text">
                {loading ? 'Creating Account...' : 'Sign Up'}
              </span>
              {loading && <div className="button-loader"></div>}
            </button>

            <div className="form-footer">
              <p>Already have an account? <Link to="/login">Sign in</Link></p>
              <p><Link to="/forgot-password">Forgot password?</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModernSignup;
