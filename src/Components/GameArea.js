import React, { Component } from 'react'
class GameArea extends Component {
    render() {
            return (
                <div className='currentPlayer'>
                    {
                        this.props.playerData ? <h3>{this.props.playerData[0].nickname} its your turn!</h3>:
                        null
                    }
                {/* {console.log(this.props.playerData)}; */}
                </div>
            )
        }
    }
export default GameArea
// Created a lifted state of players in an array
// On turn end 'answer submit' move to next player in array (setState of current player to next by Index)
// Check current index of player then ++ (perhaps indexOf)