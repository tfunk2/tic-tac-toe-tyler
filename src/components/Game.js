import React, { Component } from 'react'
import '../stylesheets/Game.css'
import Board from './Board.js'

export default class Game extends Component {
    state = {
        game: [
            null, null, null,
            null, null, null,
            null, null, null
        ],     
        isXTurn: false,
        winner: null
    }

    checkBoard = (i) => {
        if(this.state.game[i] !== null){
            return false
        }
        return true
    }

    updateGame = (i, char) => {
        let newGameState = [...this.state.game]
        newGameState[i] = char
        this.setState({ game:  newGameState })
        this.setState({ isXTurn: !this.state.isXTurn })
    }

    checkForWin = () => {
        let winningCombos = [
            [0,1,2], [3,4,5], [6,7,8], 
            [0,3,6], [1,4,7], [2,5,8], 
            [0,4,8], [2,4,6]
        ]
        for(let i = 0; i < winningCombos.length; i++) {
            let checkCombo = []

            winningCombos[i].forEach(boxIndex => {
                checkCombo.push(this.state.game[boxIndex])
            })

            if(checkCombo.every(entry => entry === "X") || 
                checkCombo.every(entry => entry === "O")) {

                if(checkCombo[0] === "X") {
                    if(this.state.winner !== "O"){
                        this.setState({ winner: "X" })
                    }
                } else {
                    if(this.state.winner !== "X") {
                        this.setState({ winner: "O" })
                    }
                }
            }
        }
    }

    handleReset = () => {
        this.setState({ 
            game: [
                null, null, null,
                null, null, null,
                null, null, null
            ],     
            isXTurn: false,
            winner: null
        })
    }

    render() {
        return (
            <div className="game-div">
                <button onClick={this.handleReset} id="reset-button">RESET GAME</button>
                <div className="team-div">
                    <div className={!this.state.isXTurn ? "team-symbol" : "active-player"}>
                        <span>X</span>
                    </div>
                    <div className="wins">{this.state.winner === "X" ? "Wins" : null}</div>
                </div>
                <Board checkBoard={this.checkBoard} 
                isXTurn={this.state.isXTurn} 
                updateGame={this.updateGame} 
                game={this.state.game}
                checkForWin={this.checkForWin}
                winner={this.state.winner}
                />
                <div className="team-div">
                    <div className={this.state.isXTurn ? "team-symbol" : "active-player"}>
                        <span>O</span>
                    </div>
                    <div className="wins">{this.state.winner === "O" ? "Wins" : null}</div>
                </div>
            </div>
        )
    }
}