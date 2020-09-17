import React, { Component } from 'react'
import '../stylesheets/Game.css'
import Board from './Board.js'

export default class Game extends Component {
    render() {
        return (
            <div className="game-div">
                <Board checkBoard={this.props.checkBoard} 
                isXTurn={this.props.isXTurn} 
                updateGame={this.props.updateGame} 
                game={this.props.game}
                />
            </div>
        )
    }
}