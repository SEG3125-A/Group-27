import React from 'react';
import { Link } from 'react-router-dom'; // using React Router for navigation
import '../static/styles/forumcard.css'


export const UserCard = ({imageUrl, userName, userDays, userTimings, userMatchTypes}) => {

    return (
      <section className="user-details">
        <div className="user-image">
        <img src={imageUrl} alt="User's image" className="card-img" />
        </div>
        <div className="user-info">
          <h1 className="user-name">{userName}</h1>
          <div className="user-tags">
          <span className="user-tag">{userDays}</span>
          <span className="user-tag">{userTimings}</span>
          <span className="user-tag">{userMatchTypes}</span>
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
        <Link to="/ForumPost" className="action-button full-post">SEE FULL POST</Link>
      </section>
    );
  };
  
  const ForumCard = ({ imageUrl, userName, userDays, userTimings, userMatchTypes }) => {
    return (
      <div className='forumcard'>
        <UserCard 
          imageUrl={imageUrl}
          userName={userName}
          userDays={userDays}
          userTimings={userTimings}
          userMatchTypes={userMatchTypes}
        />
        <PostContent />
        <PostActions />
      </div>
    );
  };

  
  export default ForumCard;
