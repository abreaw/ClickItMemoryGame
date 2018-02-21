import React, { Component } from "react";
import ImageCard from "./components/ImageCard/";
import Wrapper from "./components/Wrapper/";
import Title from "./components/Title/";
import GameDiv from "./components/GameDiv/";
import images from "./images.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Click It By Memory</Title>
        {/* Need to add a score banner */}
        <GameDiv>
          {this.state.images.map(image => (
            <ImageCard
              // removeFriend={this.removeFriend}
              id={image.id}
              key={image.id}
              image={image.image}
            />
          ))}
        </GameDiv>
      </Wrapper>
    );
  }
}

export default App;

