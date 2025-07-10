import React from 'react';
import './Home.css';

const features = [
  { icon: '💬', title: 'Group Chats' },
  { icon: '❤️', title: 'Dating' },
  { icon: '🎮', title: 'Mini Games' },
  { icon: '🎤', title: 'Random VC' },
  { icon: '📩', title: 'Personal DMs' },
  { icon: '📞', title: 'Video Calls' },
  { icon: '🖼️', title: 'Posts' },
  { icon: '🧠', title: 'Smart Match' },
  { icon: '📁', title: 'Voice Rooms' },
];

const Home = () => {
  return (
    <div className="circle-layout">
      <div className="center-core">
        <h1>HANGOUT</h1>
        <p className="tagline">Where Chats Spark, Matches Click, and Games Begin.</p>

      </div>

      {features.map((feat, i) => (
        <div className={`circle-item pos-${i + 1}`} key={i}>
          <span className="icon">{feat.icon}</span>
          <span className="title">{feat.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
