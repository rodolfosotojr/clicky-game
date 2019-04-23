import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard"
import Title from "./components/Title"
import Wrapper from "./components/Wrapper"
import characters from "./characters.json"
import Jumbotron from './components/Jumbotron';


class App extends Component {

  state = {
    characters
  };
//funciton to shuffle the state of the id which randomizes the order
 shuffle (a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


//lifecycle function that sets state of the images
componentDidMount () {

 this.setState({characters: this.shuffle(this.state.characters)}) 
 
}


// clickFunc () {
// console.log("I'm being clicked")
// }

// anotherFunc () {
  //different things
// }


// oneMoreFunc() {
  //does more things 
// }
// click event 
// on click call shuffle function, set state 

//first click, you will need to change false boolean to true.
// if the value of state is true, reset the game

// on each click, you just gonna add a point. 

  render() {

    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        <Jumbotron></Jumbotron>
        <br></br>
    
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
            // handleClick={clickFunc()}
          />
        ))}
      </Wrapper>



    );
  }

}

export default App;

//id = Math.ceil(Math.floor() * 12)

