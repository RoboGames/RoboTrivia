import React, { Component } from 'react'

class GameArea extends Component {
    render() {
        if (this.props.isPlaying === false) {
            return null
        } else {
            return (
                <div className='currentPlayer'>
                {console.log(this.props.playerData)};
                    {/* <h3>{this.props.playerData[0].nickname} its your turn!</h3> */}
                </div>
            )
        }
    }
}

export default GameArea