import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>HANGOUT</h2>
      </div>
      
      <div className="navbar-user">
        <div className="user-info">
          <img src={user?.avatar} alt="Avatar" className="user-avatar" />
          <span className="user-name">{user?.name}</span>
        </div>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
