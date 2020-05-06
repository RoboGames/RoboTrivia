import React, { Component } from 'react';
import Modal from './Modal';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            showModal: false,
            players: [],
            numberOfPlayers: 1,
            randomRobos: []
        }
    }

    showModal = (e) =>{
        e.preventDefault();
        this.setState({
            showModal: true
        })
    }

    setPlayers = () => {
        let players = Array(parseInt(this.state.numberOfPlayers)).fill({})
        this.setState({
            players: players
        })
    }

    getNickname = (e) =>{
        const playersUpdate = [...this.state.players];
        playersUpdate[e.target.id] = {nickname:e.target.value, score:0}
        this.setState({
            players: playersUpdate
        })
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        }, () =>{
            this.setPlayers();
        })
    }

    submitInput = (e) =>{
        e.preventDefault();
        if(this.state.category && this.state.difficultyLevel && this.state.numberOfPlayers){
            this.props.callApiFunc(this.state.category, this.state.difficultyLevel, this.state.numberOfPlayers, this.state.players, this.state.randomRobos)
            this.generateAvatar();
        }else{
            alert("Please select all of the criteria.")
        }
    }

    generateAvatar = () => {
        const robos = [];
        for (let players = 0; players < this.state.numberOfPlayers; players++) {
            const randomNumber = Math.floor(Math.random() * 1000);
            robos.push(randomNumber);
        }
        this.setState({
            randomRobos: robos
        })
    }


    render(){
    return (
        <header>
            <div className = "wrapper">
                {/* */}
                <img src="" alt=""/>
                <h1>Robo<i className="fas fa-robot"></i>Trivia</h1>
                <form action="">
                    <div className = "criteriaSection">
                        <div className = "criteriaType">
                            <label htmlFor="">Choose a Category</label>
                            <select name="category" id="" onChange={this.handleInput}>
                                <option value=''>Choose...</option>
                                <option value="442">People</option>
                                <option value="67">Televation</option>
                                {/* <option value="11">Films</option> 
                                <option value="21">Sports</option>
                                <option value="27">Animals</option> */}
                            </select>
                        </div>
                        <div className = "criteriaType criteriaTypeTwo">
                            <label htmlFor="">Difficulty Level</label>
                            <select name="difficultyLevel" id="" onChange={this.handleInput}>
                                <option value=''>Choose...</option>
                                <option value="200">Easy</option>
                                <option value="400">Medium</option>
                                <option value="600">Hard</option>
                            </select>
                        </div>
                        <div className = "criteriaType">
                        <label htmlFor="">Number of Players</label>
                        <select name="numberOfPlayers" id="" onChange={this.handleInput}>
                            <option value='1'>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </div>
                        <button className = "button nicknameBtn" onClick={this.showModal} disabled={!this.state.numberOfPlayers}>Choose Nicknames</button>
                    </div>
                    <p>Each player will recieve 10 questions, players take turns answering unique questions</p>
                    <Modal 
                    showModal = {this.state.showModal}
                    numberOfPlayers = {this.state.numberOfPlayers}
                    playerArray = {this.state.players}
                    getNicknameFunc = {this.getNickname}
                    />
                    <button className = "button" type="submit" onClick={this.submitInput}>Let's Play</button>
                </form>
            </div>
            <div>
                {
                    this.state.randomRobos.map((robo) => {
                    return <img src={`https://robohash.org/${robo}`} alt="cool guy"/>
                    })
                }       
            </div>
        </header>
        );
    }
}

export default Header;