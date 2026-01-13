import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Rightbar from '../../Components/Rightbar/Rightbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
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
    </div>
  );
};

export default Home;
