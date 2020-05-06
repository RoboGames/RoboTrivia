import React, { Component } from 'react';
import Header from './Components/Header';
import './Styles/styles.scss';

import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      questionArray:[]
    }
  }

  callApi = (category, difficulty, numberOfPlayers, players, robos) =>{
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
        questionArray:response.data,
        players: players,
        avatars: robos
      })
    })
  }

  componentDidMount() {
    this.callApi()

  }


  render(){
    return (
      <div className ="App">
          <Header
            callApiFunc = {this.callApi}
          />
          <main>
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
      </div>
    );
  }
}

export default App;
