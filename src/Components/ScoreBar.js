import React, { Component } from 'react'

export class ScoreBar extends Component {
    render() {
        console.log(this.props.avatars)
        if (this.props.isPlaying === false) {
            return null
        }else{
            return (
                <div>
                    <div>
                    {
                        this.props.avatars.map((robo) => {
                        return <img src={`https://robohash.org/${robo}`} alt="cool guy"/>
                        })
                    }       
                </div>
            </div>
            )
        }
    }
}

export default ScoreBar
