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
               {Array(parseInt(this.props.numberOfPlayers)).fill(
                  <input type="text" name="" id=""/>
               )}
               <button class="button">Start Game</button>
            </form>
         </form>
      )
   }
}
