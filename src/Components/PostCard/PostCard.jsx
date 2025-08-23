import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <a href={`/user/${post.user}`} className="user-link">@{post.user}</a>
      <p>{post.content}</p>
      <img src={post.image} alt="Post" />
    </div>
  );
};

export default PostCard;
