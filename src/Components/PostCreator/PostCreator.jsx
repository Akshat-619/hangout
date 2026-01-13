import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import './PostCreator.css';

const PostCreator = ({ onPostCreate }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newPost = {
      id: Date.now(),
      user: user.name,
      avatar: user.avatar,
      content: content.trim(),
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
      liked: false
    };

    onPostCreate(newPost);
    setContent('');
    setLoading(false);
  };

  return (
    <div className="post-creator">
      <div className="post-creator-header">
        <img src={user.avatar} alt="Your avatar" className="creator-avatar" />
        <form onSubmit={handleSubmit} className="post-form">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="post-input"
            rows="3"
            disabled={loading}
          />
          <div className="post-actions">
            <button 
              type="submit" 
              disabled={!content.trim() || loading}
              className="post-button"
            >
              {loading ? 'Posting...' : 'Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCreator;
