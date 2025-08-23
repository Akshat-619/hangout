import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import { FaComments, FaHeart, FaGamepad, FaMicrophone, FaUser, FaPhone, FaPhotoVideo, FaRobot, FaUsers } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">HANGOUT</h2>
      <ul>
        <li>
  <a href="/groupchat">
    <FaComments /> Group Chats
  </a>
</li>

        <li><FaHeart /> Dating</li>
        <li><FaGamepad /> Mini Games</li>
        <li><FaMicrophone /> Random VC</li>
        <li><FaUser /> Personal DMs</li>
        <li><FaPhone /> Calls & Video</li>
        <li><FaPhotoVideo /> Posts</li>
        <li><FaRobot /> Smart Match</li>
        <li><FaUsers /> Multi-Voice</li>
      </ul>
    </div>
  );
};

export default Sidebar;
