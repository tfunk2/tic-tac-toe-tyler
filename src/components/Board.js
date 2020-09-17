import React from 'react'
import '../stylesheets/Board.css'
import Square from './Square.js'

export default function Board(props){

    let indexCounter = -1;
    const makeNineSquares = props.game.map(square => {
        indexCounter++
        return <Square boxIndex={indexCounter}
                checkBoard={props.checkBoard} 
                isXTurn={props.isXTurn} 
                updateGame={props.updateGame} 
                game={props.game}
            />
    })

    return (
        <div className="board-div">
            {makeNineSquares}
        </div>
    )
}