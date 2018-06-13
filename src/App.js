import React, { Component } from "react";
import shuffle from "shuffle-arr"
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score"
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images:friends,
    score:0,
    guessed:[0]
  };

  gameFunction = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    if (!this.state.guessed.includes(id)){
      const guessed=this.state.guessed
      const friendsArr=shuffle(this.state.images)
      let score=this.state.score
      score=score+1
      this.setState({score:score,guessed:[...guessed,id], images:friendsArr})
      //console.log(this.state.score)
      console.log( this.state.guessed)
      console.log(id)
      if(this.state.score===52){
        alert("You did it! You must have nothing better to do!")
      }

    }else{
      this.setState({score:0, guessed:[]})
      alert("You couldn't pick up 52 cards, what are you doing with your life?")
      console.log( this.state.guessed)
      console.log(id)
    }
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>52 Card Pickup</Title>
        <h4>Pick each card once to win the jackpot!</h4>
        <Score score={this.state.score}/>
        {this.state.images.map(friend => (
          <FriendCard
            gameFunction={this.gameFunction}
            id={friend.id}
            key={friend.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
