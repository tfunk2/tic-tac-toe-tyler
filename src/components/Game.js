import React, { Component } from 'react'
import '../stylesheets/Game.css'
import Board from './Board.js'

export default class Game extends Component {
    state = {
        game: [null, null, null,
            null, null, null,
            null, null, null],
        isXTurn: false,
    }

    checkBoard = (i) => {
        if(this.state.game[i] !== null){
            return true
        }
        return this.state.game[i]
    }

    updateGame = (i, char) => {
        let newGameState = [...this.state.game]
        newGameState[i] = char
        this.setState({ game:  newGameState })
        this.setState({ isXTurn: !this.state.isXTurn })
    }

    render() {
        return (
            <div className="game-div">
                <Board checkBoard={this.checkBoard} 
                isXTurn={this.state.isXTurn} 
                updateGame={this.updateGame} 
                game={this.state.game}
                />
            </div>
        )
    }
}