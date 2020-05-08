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
    // let playerNumber = this.state.currentPlayer + 1;
    // If currentplayer > playerarray.lenght -1 
    // then set playernumber back to 0
    // in setState, set currentplayer: playernumber


    render() {
            return (
                <>
                <ScoreBar isPlaying={this.props.isPlaying} 
                        renderQuestions={this.props.renderQuestions}
                        avatars={this.props.randomRobos}
                        playerData={this.state.allPlayers}/>

                <div className='currentPlayer'>
                    {
                        this.state.allPlayers.length > 0 ? <h3>{this.state.allPlayers[this.state.playerIndex].nickname} its your turn!</h3>:
                        null
                    }
                    {this.props.renderQuestions.length > 0
                    ? <div>
                            <h3>{this.props.renderQuestions[this.state.index].question}</h3>
                            {this.props.renderQuestions[this.state.index].choices.map((choice)=>{
                                return(
                                    <button onClick={this.nextQuestion} value={choice}>{choice}</button>
                                )
                            })}
                    </div>
                    : null
                    }   
                    
                </div>
                </>
            )
        }
    }
export default GameArea
// Created a lifted state of players in an array
// On turn end 'answer submit' move to next player in array (setState of current player to next by Index)
// Check current index of player then ++ (perhaps indexOf)