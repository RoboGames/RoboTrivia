import React, { Component, Fragment } from 'react'

export default class Modal extends Component {
   render() {
      if (!this.props.showModal){
         return null
      }
      return (
         <div className="wrapper modal">
               <p>Choose Your Nicknames</p>
                  <div className="criteriaSection">
                     {
                        this.props.playerArray.map((player, key) =>{
                           return(
                              <div key={"nickname" + key}>
                                 <label htmlFor="name" className='sr-only' key={"label" + key}>Player {key + 1}</label>
                                 <input type="text" key ={key} id = {key} onChange={this.props.getNicknameFunc} className="nicknameInput" name="nicknameInput" placeholder = {"Player " + (key + 1)} value={player.nickname}/>
                              </div>
                           )
                        })
                     }
                  </div>
         </div>
      )
   }
}
