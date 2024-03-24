import React from 'react';
import "../static/styles/forumpost.css";
import woman_pic1 from "../static/images/avatar_w1.jpg";

const ForumPost = ({ imageUrl, userName, userDays, userTimings, userMatchTypes }) => {
  // console.log(imageUrl, userName, userDays, userTimings, userMatchTypes); // for debugging

  return (
    <div className="forum-container">
        <div className="forum-card">
      <div className="left-column">
        <img src={woman_pic1} alt="User avatar" className="user-avatar" />
        
      </div>
      <div className="right-column">
        <div className="top-row">
          <div className="user-tags">
            <h3>USER XXX</h3>
            <span className="tag">Tuesday</span>
            <span className="tag">Evenings</span>
            <span className="tag">Singles</span>
          </div>
          <button className="report-button">REPORT</button>
        </div>
        <div className="user-actions">
          <span className="upvotes">6 UPVOTES</span>
          <div className="action-buttons">
            <button className="action-button upvote">UPVOTE</button>
            <button className="action-button comment">COMMENT</button>
          </div>
        </div>
      </div>
    </div>

        <p className="description">
        This is my first time using this tennis website to look for other players! I am looking forward to meeting new people.
      </p>
      <div className="comment-box">
        <input type="text" className="comment-input" placeholder="Write a comment..." />
        <button type="submit" className="submit-comment">Submit</button>
  </div>
  </div>
  );
};


export default ForumPost;
