import React, { Component } from 'react';
import Header from './Components/Header';
import GameArea from './Components/GameArea'
import './Styles/styles.scss';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      resultsArray:[],
      questionArray:[],
      isPlaying: false,
      randomRobos: [],
      currentPlayer:'',
      renderQuestions:[]
    }
    this.gameRef = React.createRef();
  }

  // smooth scroll to game section
  smoothScroll = () => {
    let element = this.gameRef.current
    element.scrollIntoView({beahvior:'smooth',block:'start'})
  }


  //  Choices Array
  choiceLibrary = (result)=>{
    //  push incorrect choices in to the choice array
    const choiceTemp = result.incorrect_answers
    const numberOfChoices = result.incorrect_answers.length + 1
    //  randomizing function to randomize the correct answer index
    const randomIndex = Math.floor(Math.random() * numberOfChoices);
    // add correct answer in a random position of the choice array
    choiceTemp.splice(randomIndex, 0, result.correct_answer)
    return choiceTemp
  }

  
  populateChoices = () =>{
    const choiceLibrary = []
    this.state.resultsArray.map((result, i) =>{
      choiceLibrary.push({
        question: result.question,
        choices: this.choiceLibrary(result),
        correct_answer: result.correct_answer
      })
    })
    this.setState({
      renderQuestions: choiceLibrary
    })
  }

  callApi = (category, difficulty, numberOfPlayers, players, isPlaying) =>{
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
        this.setState({
          resultsArray:response.data.results,
          numberOfPlayers: numberOfPlayers,
          questionArray:response.data,
          players: players,
          isPlaying: isPlaying
        }, () =>{
          this.generateAvatar();
          this.populateChoices();
        })

      if(this.state.resultsArray.length > 0){
        this.smoothScroll();
      }
      // error handling: when api call fails, alert user
    }).catch(error => {
      alert('Sorry, failed to load questions ')
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
          <main className='gameArea' ref={this.gameRef}>
            <GameArea 
            avatars={this.state.randomRobos}
            isPlaying={this.state.isPlaying}
            playerData={this.state.players} 
            renderQuestions = {this.state.renderQuestions}
            />
          </main>

          <footer>
            <div className="wrapper">
              <p>Copyright <span aria-hidden="true">&copy;</span> 2020 by Aleksandar Nikolic, Jane Yuan, Maliheh Naderan and Punnet Birdi</p>
            </div>
          </footer>
      </>
    );
  }
}

export default App;
