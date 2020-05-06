import React, { Component } from 'react'

export class ScoreBar extends Component {
    render() {
        if (this.props.isPlaying === false) {
            return null
        }
        return (
            <div>
                <p>heyo</p>
                {/* {console.log(this.props.playerData[0].nickname)} */}
            </div>
        )
    }
}

export default ScoreBar
