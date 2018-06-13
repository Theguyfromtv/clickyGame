import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="card-img" alt={"text"} src={require(props.image)} onClick={() => props.gameFunction(props.id)}/>
    </div>
  </div>
);

export default FriendCard;
