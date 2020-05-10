import React, { Component } from 'react'

class ScoreBar extends Component {
    constructor(){
        super();
        this.state = {
            currentPlayer: ''
        }
    }
    render() {
        if (this.props.isPlaying === false) {
            return null
        }else{
            return (
                <div className="scorebar">
                    <div className="wrapper avatorContainer">
                    {
                        this.props.avatars.map((robo, key) => {
                        return <div className="playerAvatar">
                                    <img src={`https://robohash.org/${robo}`} alt="cool guy"/>
                                    <p class="playerName">{this.props.playerData[key].nickname}</p>
                                    <p>score: {this.props.playerData[key].score}</p></div>
                        })
                    }       
                </div>
            </div>
            )
        }
    }
}

export default ScoreBar
