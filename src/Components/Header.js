import React, { Component } from 'react';

class Header extends Component {
    render(){
    return (
        <header>
            <div className = "wrapper">
                <h1>Rob<i className="fas fa-robot"></i>Trivia</h1>
                <form action="">
                    <div>
                        <label htmlFor="">Choose a Category</label>
                        <select name="category" id="">
                            <option value="">General Knowledge</option>
                            <option value="">Entertainment:Film</option>
                            <option value="">Sports</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Difficulty Level</label>
                        <select name="difficultyLevel" id="">
                            <option value="">Easy</option>
                            <option value="">medium</option>
                            <option value="">Hard</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="">Number of Player</label>
                    <select name="numberOfPlayer" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                    </div>
                </form>
            </div>
        </header>
        );
    }
}

export default Header;