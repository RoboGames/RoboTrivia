import React, { Component } from 'react'

export default class Modal extends Component {
   render() {
      if (!this.props.showModal){
         return null
      }
      return (
         <form action="">
            <p>Choose Your Nicknames</p>
            <form action="">
               {
                  this.props.playerArray.map((player, key) =>{
                     return(
                        <input type="text" id = {key} onChange={this.props.getNicknameFunc}/>
                     )
                  })
               }
            </form>
         </form>
      )
   }
}
