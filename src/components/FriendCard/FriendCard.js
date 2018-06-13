import React from "react";
import "./FriendCard.css";
const image = require(props.image)


const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="card-img" alt={"text"} src={image} onClick={() => props.gameFunction(props.id)}/>
    </div>
  </div>
);

export default FriendCard;
