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
                <div>
                    <div className="scorebar">
                    {
                        this.props.avatars.map((robo, key) => {
                        return <div className="playerAvatar">
                                    <img src={`https://robohash.org/${robo}`} alt="cool guy"/>
                                    <p>{this.props.playerData[key].nickname}</p>
                                    <p>Score: {this.props.playerData[key].score}</p></div>
                        })
                    }       
                </div>
            </div>
            )
        }
    }
}

export default ScoreBar
