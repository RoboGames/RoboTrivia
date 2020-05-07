import React, { Component } from 'react'

class ScoreBar extends Component {
    constructor(){
        super();
        this.state = {
            currentPlayer: ''
        }
    }
    render() {
        console.log(this.props.avatars)
        if (this.props.isPlaying === false) {
            return null
        }else{
            return (
                <div>
                    <div className='scorebar'>
                    {
                        this.props.avatars.map((robo, key) => {
                        return <div className="playerAvatar">
                                    <img src={`https://robohash.org/${robo}`} alt="cool guy"/>
                                    <p>{this.props.playerData[key].nickname}</p>
                                    <p>Score: {this.props.playerData[key].score}</p></div>
                        })
                    }       
                </div>
                <div className='currentPlayer'>
                    <p>{this.props.playerData[0].nickname} it's your turn!</p>
                </div>
            </div>
            )
        }
    }
}

export default ScoreBar
