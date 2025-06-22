import React, { useState } from "react";
import "../style/Community.css";


export default function Community() {
  const [posts, setPosts] = useState([
    { id: 1, name: "Anisha", content: "Lost 3kg this month with low-carb diet and cardio 💪" },
    { id: 2, name: "Rahul", content: "Struggling to stay consistent, any tips?" },
    { id: 3, name: "Megha", content: "Meal prepping made my life so much easier!" },
    { id: 4, name: "Raj", content: "Switched to early morning workouts, more energy now!" },
    { id: 5, name: "Sneha", content: "Trying out intermittent fasting this week!" },
    { id: 6, name: "John", content: "Yoga + light cardio = peaceful day ✨" },
    { id: 7, name: "Divya", content: "Achieved 10k steps daily streak for 15 days!" },
  ]);

  const [newPost, setNewPost] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([{ id: Date.now(), name: "You", content: newPost }, ...posts]);
      setNewPost("");
    }
  };

  const displayedPosts = showAll ? posts : posts.slice(0, 5);

  return (
    <div className="community-container">
      <header className="community-header">
        <h1>🏋️‍♂️ DayFit Community</h1>
        <p>Connect. Share. Grow Together.</p>
      </header>

      <section className="featured-tips">
        <h2>🌟 Featured Tips</h2>
        <ul>
          <li>Drink water before meals to boost metabolism</li>
          <li>Track your food daily – awareness leads to progress</li>
          <li>Sleep is just as important as workouts</li>
        </ul>
      </section>

      <section className="post-section">
        <h2>🧑‍🤝‍🧑 Community Posts</h2>
        <div className="post-list">
          {displayedPosts.map((post) => (
            <div className="post-card" key={post.id}>
              <h4>{post.name}</h4>
              <p>{post.content}</p>
            </div>
          ))}
        </div>

        {posts.length > 5 && (
          <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "See More"}
          </button>
        )}
      </section>

      <section className="add-post">
        <h2>💬 Join the Conversation</h2>
        <textarea
          placeholder="Share your progress, struggles, or tips..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </section>

      <footer className="community-footer">
        <p>© 2025 DayFit Inc. | Stay Fit. Stay Connected.</p>
      </footer>
    </div>
  );
}