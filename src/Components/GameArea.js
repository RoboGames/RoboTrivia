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
        console.log(this.props.renderQuestions)
            return (
                <div className='currentPlayer'>
                    {
                        this.props.playerData ? <h3>{this.props.playerData[0].nickname} its your turn!</h3>:
                        null
                    }
                    {this.props.renderQuestions.length > 0 && this.state.index < this.props.renderQuestions.length
                     ? <div>
                            <h3>{this.props.renderQuestions[this.state.index].question}</h3>
                            {this.props.renderQuestions[this.state.index].choices.map((choice)=>{
                                return(
                                    <button onClick={this.nextQuestion}>{choice}</button>
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