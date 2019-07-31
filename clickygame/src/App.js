import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ImageTable from './components/ImageTable';
import Footer from './components/Footer';
import Animals from './animals.json';

class App extends Component {
  state = {
    animals: Animals,
    roundStatus: "",
    score: 0,
    topScore: 0
  };

 
 reset = () => {

  if (this.state.score > this.state.topScore){

    this.setState({topScore: this.state.score});
  }
  this.state.animals.forEach(card => {
    card.count = 0;
  });
  this.setState({score: 0})
};


 handleClick = id => {

  let animalUnit = this.state.animals.find(object => object.id === id)

  if (animalUnit.count === 0){

    animalUnit.count = animalUnit.count + 1;
    this.setState({score: this.state.score + 1});
    this.state.animals.sort(() => Math.random() -.222);

  } else {
    this.reset();


  
  }
};

  render() {
    return (
      <div>
        <NavBar score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <ImageTable animals={Animals} handleClick={this.handleClick}/>
        <Footer />
      </div>
    );
  };
};

export default App;
