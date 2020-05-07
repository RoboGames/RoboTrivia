import React, { Component } from 'react';
import Header from './Components/Header';
import ScoreBar from './Components/ScoreBar'
import GameArea from './Components/GameArea'
import './Styles/styles.scss';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      resultsArray:[],
      questionArray:[],
      choiceArray:[],
      currentQuestion:'',
      currentAnswers:[],
      questionArray: [],
      isPlaying: false,
      randomRobos: []
    }
  }


  //  Choices Array
  choiceLibrary = (result)=>{
    //  push incorrect choices in to the choice array
    const choiceTemp = result.incorrect_answers

    const numberOfChoices = result.incorrect_answers.length + 1

    //  randomizing function to randomize the correct answer index
    let randomIndex = Math.floor(Math.random() * numberOfChoices);

    // add correct answer in a random position of the choice array
    choiceTemp.splice(randomIndex, 0, result.correct_answer)

    // this.setState({
    //   choiceArray: choiceTemp
    // })
    return choiceTemp
  }


  // // QuestionArray
  // questionLibrary = (resultsArray) => {
  //   const questionTemp =[]
  //   resultsArray.forEach((result, i) => {
  //     questionTemp.push(result.question)
  //     this.setState({
  //       questionArray: questionTemp,
  //       })
  //   })
  // }



  callApi = (category, difficulty, numberOfPlayers, players, isPlaying) =>{
    console.log(category, difficulty, numberOfPlayers)
    let numberOfQuestions = numberOfPlayers * 5
    axios({
      url: 'https://opentdb.com/api.php',
      params: {
        category: category,
        amount: numberOfQuestions,
        type:'multiple',
        difficulty:difficulty
      }
    }).then((response) => {
      console.log(response);

      this.setState({
        resultsArray:response.data.results,
      
        numberOfPlayers: numberOfPlayers,
        questionArray:response.data,
        players: players,
        isPlaying: isPlaying
      }, () =>{
        this.generateAvatar();
      })
    })
  }

  generateAvatar = () => {
    const robos = [];
    for (let players = 0; players < this.state.numberOfPlayers; players++) {
        const randomNumber = Math.floor(Math.random() * 1000);
        robos.push(randomNumber);
    }
    this.setState({
        randomRobos: robos
    })
}


  render(){
    return (
      <>
          <Header
            callApiFunc = {this.callApi}
          />
          <main className='gameArea'>
            <ScoreBar
              playerData={this.state.players} 
              isPlaying={this.state.isPlaying}
              avatars={this.state.randomRobos}
            />
            <GameArea 
            isPlaying={this.state.players} 
            playerData={this.state.players} 
            />
          </main>
      </>
    );
  }
}

export default App;
