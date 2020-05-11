import React, { Component, Fragment } from 'react'
import ScoreBar from './ScoreBar'
import firebase from '../firebase';

class GameArea extends Component {
    constructor() {
        super();
        this.state = {
            allPlayers: [],
            index: 0,
            playerIndex: 0,
            highScores: [],
            displayCorrect:false,
            displayIncorrect:false
        }
    }

    // Pulls our data from firebase and is mapped and displayed at end of game on line 129
    componentDidMount(){
        const dbRef = firebase.database().ref();
        dbRef.on('value', (result) => {
            const data = result.val();
            const playerScores = []
            for (let key in data) {
                for (let i=0; i<data[key].length; i++) {
                    playerScores.push({
                        userName: data[key][i].nickname,
                        userScore: data[key][i].score
                    })
                }
            }
            // Sort our returned firebase data to display highscores in order of highest to lowest
            playerScores.sort((a, b) => {
                return b.userScore - a.userScore
            })
        this.setState({ 
            highScores: playerScores
        })
    })
    } 
    
    // push current game's user score to firebase
    storeCurrentGame = (e,playerInfo) => {
            e.preventDefault();
            const dbRef = firebase.database().ref()
            dbRef.push(playerInfo)
            this.refs.uploadBtn.setAttribute("disabled", "disabled")

}

    componentDidUpdate(prevProps) {
        if (this.props.playerData !== prevProps.playerData) {
            this.setState({
                allPlayers: this.props.playerData
            })
        }
    }
    // function to check if user got the correct answer or no, if yes, add 1 point to the user answering that question, if not, user score does not change,
    // then call iteratePlayer() to ask the next player to answer the next question
    nextQuestion = (event) => {
        if (event.target.value === this.props.renderQuestions[this.state.index].correct_answer) {
            const cloneAllPlayers = [...this.state.allPlayers];
            cloneAllPlayers[this.state.playerIndex].score++;
            this.setState({
                allPlayers: cloneAllPlayers,
                displayCorrect:true,
                displayIncorrect:false
            }, () => {
                this.iteratePlayer()
            });
        } else{
            this.iteratePlayer()
            this.setState({
                displayCorrect: false,
                displayIncorrect: true
            })
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

    // Play again button - a simple page refresh

    playAgain() {
        window.location.reload();
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
                                    <h3 className="question">
                                    <div dangerouslySetInnerHTML={{
                                        __html: this.props.renderQuestions[this.state.index].question
                                    }}></div>
                                    </h3>
                                    <ul>
                                        {this.props.renderQuestions[this.state.index].choices.map((choice)=>{
                                        return(
                                            <li>
                                                <button className="answersButton" onClick={this.nextQuestion} value={choice}>{choice} </button>
                                            </li>
                                        )
                                        })}
                                    </ul>
                                              {/* tell user if they got the question right/wrong on spot  */}
                                            {this.state.displayCorrect ? <i className="far fa-grin animate__animated animate__tada"></i> : null}
                                            {this.state.displayIncorrect ? <i className="far fa-meh animate__animated animate__tada"></i> : null}
                                    </div>
                                    // score board
                                    : <>
                                    <div className = "scoreBoard">   
                                        <div className="currentScoreBoard">
                                            <h3>Thanks for Playing!</h3>
                                            <button onClick = {(event)=>{this.storeCurrentGame(event, this.state.allPlayers)}} ref="uploadBtn">Upload Your Score</button>
                                            <ul>
                                                {/* Sort the current game and display the winner */}
                                                {
                                                    this.state.allPlayers.sort((a, b) => {
                                                        return b.score - a.score
                                                    }).map((player, index) => {
                                                        return(
                                                            <li>{index + 1} - {player.nickname}: {player.score}</li>
                                                            )
                                                        })
                                                    }
                                            </ul>
                                            <p>🎉{this.state.allPlayers[0].nickname} wins!!!🎉</p>
                                        </div>
                                        <div className = "leaderBoard">
                                            <h3>Leaderboard:</h3>
                                            <ol className = "highScoreBoard">
                                                {
                                                    this.state.highScores.map((player, index) => {
                                                        return (
                                                        <li>{index + 1} - {player.userName}: {player.userScore}</li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </div>
                                    </div>
                                    <button className="playAgainButton" onClick={this.playAgain}>Play Again?</button>
                                    </>
                                }</div>   
                    }
                    </div>
                </div>
                </>
            )
        }
    }
export default GameArea