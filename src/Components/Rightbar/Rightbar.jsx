import React from 'react';
import './Rightbar.css';

const Rightbar = () => {
  return (
    <div className="rightbar">
      <h3>Suggestions</h3>
      <ul>
        <li>🔗 Connect with Impala</li>
        <li>💖 Match with Izumi</li>
        <li>🎮 Play Chess with Blaster</li>
        <li>🎤 Random VC Lobby: #3</li>
      </ul>

      <h3>Trending Tags</h3>
      <ul>
        <li>#HangOutLive</li>
        <li>#MiniGamesVC</li>
        <li>#SwipeRight</li>
        <li>#SquadGoals</li>
      </ul>
    </div>
  );
};

export default Rightbar;
