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
    }
  }


  //  Answer Array
  answerLibrary = (resultsArray)=>{
    const choiceTemp = []
     resultsArray.forEach((result,i)=>{
      //  push incorrect choices in to the choice array
       choiceTemp.push(result.incorrect_answers);

       const numberOfChoices = result.incorrect_answers.length +1
      
      //  randomizing function to randomize the correct answer index
       let correctAnswerIndex = Math.floor(Math.random() * numberOfChoices);

      // add correct answer in a random position of the choice array
       choiceTemp[i].splice(correctAnswerIndex, 0 , result.correct_answer)

       this.setState({
         choiceArray:choiceTemp
       })
     })
  }


  // QuestionArray
  questionLibrary = (resultsArray) => {
    const questionTemp =[]
    resultsArray.forEach((result, i) => {
      questionTemp.push({
        question: result.question,
        choices: this.state.choiceArray,
        
      })
      this.setState({
        questionArray: questionTemp
      })
      
    })
    console.log(this.state.choiceArray)
  }


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
      const questionLibrary = this.questionLibrary(this.state.resultsArray)
      const answerLibrary = this.answerLibrary(this.state.resultsArray)

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
          {/* <main>
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
          </main> */}
      </div>
    );
  }
}

export default App;
