import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Rightbar from '../../Components/Rightbar/Rightbar';
import './Groupchat.css';

const categories = [
  { name: 'Gaming', icon: '🎮' },
  { name: 'Dating', icon: '💖' },
  { name: 'Music', icon: '🎤' },
  { name: 'Study', icon: '📚' },
  { name: 'Languages', icon: '🌍' },
  { name: 'Memes', icon: '😂' },
  { name: 'Anime', icon: '🎌' },
  { name: 'Tech Talk', icon: '💻' }
];

const GroupChat = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="feed">
        <div className="groupchat-container">
          <h2>Join a Group Chat</h2>
          <div className="category-grid">
            {categories.map((cat, index) => (
              <div key={index} className="category-card">
                <div className="icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <button>Join</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default GroupChat;
