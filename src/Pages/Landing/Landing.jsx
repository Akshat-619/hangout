import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: '🚀', title: 'Lightning Fast', desc: 'Instant connections' },
    { icon: '🎨', title: 'Beautiful Design', desc: 'Modern UI/UX' },
    { icon: '🔒', title: 'Secure', desc: 'Your data is safe' },
    { icon: '🌍', title: 'Global', desc: 'Connect worldwide' }
  ];

  return (
    <div className="landing-container">
      <div 
        className="gradient-orb" 
        style={{
          left: `${mousePosition.x * 0.05}px`,
          top: `${mousePosition.y * 0.05}px`
        }}
      />
      
      <nav className="landing-nav">
        <div className="nav-brand">
          <span className="brand-text">HANGOUT</span>
        </div>
        <div className="nav-actions">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-button">Get Started</Link>
        </div>
      </nav>

      <main className="landing-main">
        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
          <h1 className="hero-title">
            Where <span className="gradient-text">Connections</span> Happen
          </h1>
          <p className="hero-subtitle">
            Join the next generation of social interaction. 
            Connect, share, and grow with people who matter.
          </p>
          <div className="hero-actions">
            <button 
              onClick={() => navigate('/signup')}
              className="primary-button"
            >
              Start Free Today
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="secondary-button"
            >
              I Have an Account
            </button>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card ${isLoaded ? 'loaded' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">2M+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50M+</div>
            <div className="stat-label">Connections</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
        </div>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2024 HANGOUT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
