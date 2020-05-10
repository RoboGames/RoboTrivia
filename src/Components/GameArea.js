import React, { Component } from 'react'
import ScoreBar from './ScoreBar'

class GameArea extends Component {
    constructor() {
        super();
        this.state = {
            allPlayers: [],
            index: 0,
            userScore: 0,
            playerIndex: 0
        }
    }


    componentDidUpdate(prevProps) {
        if (this.props.playerData !== prevProps.playerData) {
            this.setState({
                allPlayers: this.props.playerData
            })
        }
    }

    nextQuestion = (event) => {
        console.log(event.target.value);
        if (event.target.value === this.props.renderQuestions[this.state.index].correct_answer) {
            const cloneAllPlayers = [...this.state.allPlayers];
            cloneAllPlayers[this.state.playerIndex].score++;
            console.log('Its LITT');
            this.setState({
                allPlayers: cloneAllPlayers

            }, () => {
                this.iteratePlayer()
            });
        } else{
            this.iteratePlayer()
        }
    }

    iteratePlayer = () => {
        if (this.state.playerIndex < this.state.allPlayers.length - 1) {
            this.setState({
                playerIndex: this.state.playerIndex + 1,
                index: (this.state.index + 1)
            })
        } else {
            this.setState({
                playerIndex: 0,
                index: (this.state.index + 1)
            })
        }
    }

    render() {
            return (
                <>
                <ScoreBar isPlaying={this.props.isPlaying} 
                        renderQuestions={this.props.renderQuestions}
                        avatars={this.props.avatars}
                        playerData={this.state.allPlayers}/>

                <div className="gameArea">
                    <div className = "wrapper">
                    {
                        this.state.allPlayers.length > 0 && this.state.index <= this.props.renderQuestions.length - 1
                        ? <h4 className="animate__animated animate__tada">Current Player: <span>{this.state.allPlayers[this.state.playerIndex].nickname}</span></h4>
                        : null
                    }

                    {
                        this.props.renderQuestions.length === 0 
                        ? null
                        : <div>{this.state.index <= this.props.renderQuestions.length - 1
                                ? <div className ="questionContainer">
                                    <h3 className="question"><span>Q: </span>{this.props.renderQuestions[this.state.index].question}</h3>
                                    <ul>
                                        {this.props.renderQuestions[this.state.index].choices.map((choice)=>{
                                        return(
                                            <li>
                                                <button className="answersButton" onClick={this.nextQuestion} value={choice}>{choice}</button>
                                            </li>
                                        )
                                        })}
                                    </ul>
                                    </div>
                                    : <div>
                                        <h1>Thanks for Playing!</h1>
                                        {
                                            this.state.allPlayers.map((player) => {
                                                return(
                                                    <p>{player.nickname} your score is: {player.score}!</p>
                                                )
                                            })
                                        }
                                    </div>
                                }</div>   
                    }
                    </div>
                </div>
                </>
            )
        }
    }
export default GameArea
// Created a lifted state of players in an array
// On turn end 'answer submit' move to next player in array (setState of current player to next by Index)
// Check current index of player then ++ (perhaps indexOf)