import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitInput = (e) =>{
        e.preventDefault();
        if(this.state.category && this.state.difficultyLevel && this.state.numberOfPlayers){
            this.props.callApiFunc(this.state.category, this.state.difficultyLevel, this.state.numberOfPlayers)
        }else{
            alert("Please select all of the criteria.")
        }
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
                                <option value="9">General Knowledge</option>
                                <option value="17">Science and Nature</option>
                                <option value="11">Films</option> 
                                <option value="21">Sports</option>
                                <option value="27">Animals</option>
                            </select>
                        </div>
                        <div className = "criteriaType criteriaTypeTwo">
                            <label htmlFor="">Difficulty Level</label>
                            <select name="difficultyLevel" id="" onChange={this.handleInput}>
                                <option value=''>Choose...</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div className = "criteriaType">
                        <label htmlFor="">Number of Players</label>
                        <select name="numberOfPlayers" id="" onChange={this.handleInput}>
                            <option value=''>Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </div>
                    </div>
                    <p>Each player will recieve 10 questions, players take turns answering unique questions</p>
                    <button className = "button" type="submit" onClick={this.submitInput}>Let's Play</button>
                </form>
            </div>
        </header>
        );
    }
}

export default Header;