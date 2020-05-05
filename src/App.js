import React, { Component } from 'react';
import Header from './Components/Header';
import './Styles/styles.scss';

class App extends Component {

  callApi = (category, difficulty, numberOfPlayers) =>{
    console.log(category, difficulty, numberOfPlayers)
  }

  render(){
  return (
    <>
      <Header
      callApiFunc = {this.callApi}
      />
    </>
  );
  }
}

export default App;
