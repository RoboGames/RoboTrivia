import React, { Component } from 'react';

class Header extends Component {
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
                            <select name="category" id="">
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
                            <select name="difficultyLevel" id="">
                                <option value=''>Choose...</option>
                                <option value="">Easy</option>
                                <option value="">Medium</option>
                                <option value="">Hard</option>
                            </select>
                        </div>
                        <div className = "criteriaType">
                        <label htmlFor="">Number of Players</label>
                        <select name="numberOfPlayer" id="">
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
                    <button className = "button" type="submit">Let's Play</button>
                </form>
            </div>
        </header>
        );
    }
}

export default Header;