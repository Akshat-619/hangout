import React from 'react';
import './Feed.css';

const Feed = () => {
  const posts = [
 {
    id: 1,
    user: "travel_junkie",
    city: "Rome", // example city
    content: "Exploring the streets of Italy 🇮🇹✨",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800",
  },
  {
    id: 2,
    user: "foodie_life",
    city: "Tokyo",
    content: "Can’t get enough of sushi 🍣🔥",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800",
  },
  {
    id: 3,
    user: "fitness_freak",
    city: "New York",
    content: "Push harder than yesterday 💪",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800",
  },
  {
    id: 4,
    user: "nature_lover",
    city: "Vancouver",
    content: "Lost in the woods 🌲🌿",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  },
  {
    id: 5,
    user: "tech_geek",
    city: "San Francisco",
    content: "Late night coding session 👨‍💻",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  },
  {
    id: 6,
    user: "pet_world",
    city: "London",
    content: "My dog is my happiness 🐶❤️",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800",
  },
  {
    id: 7,
    user: "city_life",
    city: "New York",
    content: "New York nights 🏙️✨",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800",
  },
  {
    id: 8,
    user: "car_addict",
    city: "Los Angeles",
    content: "Dream ride unlocked 🚗💨",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
  },
  {
    id: 9,
    user: "coffeeholic",
    city: "Seattle",
    content: "Morning starts with coffee ☕✨",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
  },
  {
    id: 10,
    user: "art_vibes",
    city: "Paris",
    content: "Colors speak louder than words 🎨",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
  },
]


  return (
    <div className="feed">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h3>@{post.user}</h3>
          <p>{post.content}</p>
          <img src={post.image} alt="Post Visual" />
        </div>
      ))}
    </div>
  );
};

export default Feed;
