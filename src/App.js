import React, { Component } from 'react';
import Header from './Components/Header';
import ScoreBar from './Components/ScoreBar'
import './Styles/styles.scss';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      questionArray:[],
      isPlaying: false,
      randomRobos: []
    }
  }

  callApi = (category, difficulty, numberOfPlayers, players, isPlaying) =>{
    console.log(category, difficulty, numberOfPlayers)
    let numberOfQuestions = numberOfPlayers * 5
    console.log(numberOfQuestions)
    axios({
      url: 'http://jservice.io/api/clues',
      method:'GET',
      params: {
        category: category,
        value:difficulty
      }
    }).then((response) => {
      console.log(response);
      this.setState({
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
              avatars = {this.state.randomRobos}
            />
            <ul>
              {this.state.questionArray.map((question,i)=>{
                let questionTitle = question.question
                let answer = question.answer
                    return (
                      <li className="questionContainer" key={i}>
                        <h2>{questionTitle}</h2>
                        <form action="">
                          <input type="text"/>
                        </form>
                      </li>
                    )
              })}
            </ul>
          </main>
      </>
    );
  }
}

export default App;
