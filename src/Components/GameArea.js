import React, { Component } from 'react'
class GameArea extends Component {
    constructor() {
        super();
        this.state = {
            currentPlayer: '',
            index: 0
        }
    }
    nextQuestion = () => {
        this.setState({
            index: (this.state.index + 1)
        })
    }
    render() {
        console.log(this.props.renderQuestions[0])
            return (
                <div className='currentPlayer gameArea wrapper'>
                    {
                        this.props.playerData ? <h3 className="animate__animated animate__tada">{this.props.playerData[0].nickname} its your turn!</h3>:
                        null
                    }
                    {this.props.renderQuestions.length > 0
                     ? <div className="questionPart">
                            <h3 className="question">{this.props.renderQuestions[this.state.index].question}</h3>
                            {this.props.renderQuestions[this.state.index].choices.map((choice)=>{
                                return(
                                    <button className="answers" onClick={this.nextQuestion}>{choice}</button>
                                )
                            })}
                     </div>
                    : null
                    }   
                    
                </div>
                
            )
        }
    }
export default GameArea
// Created a lifted state of players in an array
// On turn end 'answer submit' move to next player in array (setState of current player to next by Index)
// Check current index of player then ++ (perhaps indexOf)