// Pages/Home/Home.jsx
import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Rightbar from '../../Components/Rightbar/Rightbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>

      <div className="feed-wrapper">
        <Feed />
      </div>

      <div className="rightbar-wrapper">
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
