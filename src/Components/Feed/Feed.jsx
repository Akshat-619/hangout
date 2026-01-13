import React, { useState } from 'react';
import PostCreator from '../PostCreator/PostCreator';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "travel_junkie",
      avatar: "https://ui-avatars.com/api/?name=travel_junkie&background=00ffff&color=000",
      city: "Rome",
      content: "Exploring the streets of Italy 🇮🇹✨ The architecture here is absolutely breathtaking!",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      likes: 42,
      comments: [],
      liked: false
    },
    {
      id: 2,
      user: "foodie_life",
      avatar: "https://ui-avatars.com/api/?name=foodie_life&background=ff6b6b&color=fff",
      city: "Tokyo",
      content: "Can't get enough of sushi 🍣🔥 This place in Shibuya is absolutely incredible!",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800",
      timestamp: new Date(Date.now() - 7200000).toISOString(),
      likes: 38,
      comments: [],
      liked: true
    },
    {
      id: 3,
      user: "fitness_freak",
      avatar: "https://ui-avatars.com/api/?name=fitness_freak&background=4ecdc4&color=000",
      city: "New York",
      content: "Push harder than yesterday 💪 Morning workout complete! Who else is grinding today?",
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800",
      timestamp: new Date(Date.now() - 10800000).toISOString(),
      likes: 25,
      comments: [],
      liked: false
    }
  ]);

  const handlePostCreate = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  const formatTimeAgo = (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <div className="feed">
      <PostCreator onPostCreate={handlePostCreate} />
      
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <div className="post-user-info">
              <img src={post.avatar} alt={post.user} className="post-avatar" />
              <div className="post-meta">
                <h4>@{post.user}</h4>
                <span className="post-time">{formatTimeAgo(post.timestamp)}</span>
                {post.city && <span className="post-city">📍 {post.city}</span>}
              </div>
            </div>
          </div>
          
          <div className="post-content">
            <p>{post.content}</p>
          </div>
          
          {post.image && (
            <div className="post-image-container">
              <img src={post.image} alt="Post" className="post-image" />
            </div>
          )}
          
          <div className="post-actions">
            <button 
              className={`like-button ${post.liked ? 'liked' : ''}`}
              onClick={() => handleLike(post.id)}
            >
              <span>{post.liked ? '❤️' : '🤍'}</span>
              <span>{post.likes}</span>
            </button>
            <button className="comment-button">
              <span>💬</span>
              <span>{post.comments.length}</span>
            </button>
            <button className="share-button">
              <span>🔄</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
