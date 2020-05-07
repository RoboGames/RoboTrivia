import React, { Component, Fragment } from 'react'

export default class Modal extends Component {
   render() {
      if (!this.props.showModal){
         return null
      }
      return (
         <form action="">
            <p>Choose Your Nicknames</p>
            <form action="">
               <div className="criteriaSection">
                  {
                     this.props.playerArray.map((player, key) =>{
                        return(
                           <Fragment>
                              <label htmlFor="name" className='sr-only'>Player {key + 1}</label>
                              <input type="text" id = {key} onChange={this.props.getNicknameFunc} className="nickname" name="player" placeholder = {"Player " + (key + 1)}/>
                           </Fragment>
                        )
                     })
                  }
               </div>
            </form>
         </form>
      )
   }
}
