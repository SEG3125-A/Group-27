import React from 'react';
import '../static/styles/userCardReview.css'


const UserCard = ({user, review, imageUrl}) => {
    return (
      <section className="user-details">
        <div className="user-image">
        <img src={imageUrl} alt="Card image" className="card-img" />
        </div>
        <div className="user-info">
          <h1 className="user-name">{user}</h1>
          <div className="orange-stars">
                ★★★★★
          </div>
          <div> {review} </div>
        </div>
      </section>
    );
  };
  
  
  const UserReview = ({user, review, imageUrl}) => {
    return (
      <div className = 'userreview'>
        <UserCard user={user} review={review} imageUrl={imageUrl}/>
      </div>
    );
  };

  
  export default UserReview;