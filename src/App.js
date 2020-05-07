import React, { Component } from 'react';
import Header from './Components/Header';
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
      currentAnswers:[]
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




  callApi = (category, difficulty, numberOfPlayers) =>{
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
      
      })
    })
  }

  render(){
    return (
      <div className ="App">
          <Header
            callApiFunc = {this.callApi}
          />
          <main>
            <ul>
              {this.state.resultsArray.map((result,i)=>{
                let choices = this.choiceLibrary(result)
                console.log(choices)
                let questionTitle = result.question
                    return (
                      <li className="questionContainer" key={i}>
                        <h2>{questionTitle}</h2>
                        <ul className = "answerContainer">
                          {choices.map((choice)=>{
                            return(
                              <li>
                                <button>{choice}</button>
                              </li>

                            )
                          })}
                        </ul>
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
