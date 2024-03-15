import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../static/styles/forumcard.css'


const UserCard = (imageUrl) => {
    return (
      <section className="user-details">
        <div className="user-image">
        <img src={imageUrl} alt="Card image" className="card-img" />
        </div>
        <div className="user-info">
          <h1 className="user-name">USER 001</h1>
          <div className="user-tags">
            <span className="user-tag">TUESDAY</span>
            <span className="user-tag">EVENINGS</span>
            <span className="user-tag">SINGLES</span>
          </div>
        </div>
      </section>
    );
  };
  
  const PostContent = () => {
    return (
      <section className="post-content">
        <div className="post-text"></div>
        <div className="post-text"></div>
      </section>
    );
  };
  
  const PostActions = () => {
    return (
        <section className="post-actions">
        <button className="action-button upvote">UPVOTE</button>
        <button className="action-button full-post">SEE FULL POST</button>
      </section>
    );
  };
  
  const ForumCard = () => {
    return (
      <div className = 'forumcard'>
        <UserCard />
        <PostContent />
        <PostActions />
      </div>
    );
  };

  
  export default ForumCard;