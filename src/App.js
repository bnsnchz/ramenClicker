import React, { Component } from 'react';
import Image from "./Components/Images";
import Wrapper from "./Components/Wrapper";
import Score from "./Components/Score";
import images from "./images.json";

let score = 0;
let topScore = 0;

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score,
    topScore
  }
  
  handleClickEvent = (id) => {
    const imageArr = this.state.images;
    const selectedImg = imageArr.filter(match => match.id === id);

    if (selectedImg[0].clicked === false) { 
      selectedImg[0].clicked = true;
      score ++;

      if (score > topScore) {
        topScore = score;
      }
      if(score === 12){
        alert("You win! Let's Eat.")
        score = 0;
      }

      this.setState({images});
      this.setState({score});
      this.setState({topScore});

    } else {
      alert("Already Picked that one FeelsBadMan");   
      score = 0;

      for (let i=0; i < this.state.images.length; i++) {
        imageArr[i].clicked = false
      }

      this.setState({images});
      this.setState({score});
    }
    
  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  render() {
    const shuffledImg = this.shuffleArray(this.state.images);
    return (
      <Wrapper>
        <Score
          score={this.state.score}
          topScore={this.state.topScore} 
        />
        {shuffledImg.map(image => (
          <Image
            id={image.id}
            key={image.id}
            image={image.image}
            alt={image.alt}
            handleClickEvent={this.handleClickEvent}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;