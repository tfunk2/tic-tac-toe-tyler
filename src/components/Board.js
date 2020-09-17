import React from 'react'
import '../stylesheets/Board.css'
import Square from './Square.js'

export default function Board(props){
    const makeNineSquares = props.game.map(square => {
        return <Square boxIndex={props.game.indexOf(square)}
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