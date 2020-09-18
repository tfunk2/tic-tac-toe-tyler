import React from 'react'
import '../stylesheets/Square.css'

export default function Square(props){
    const handleClick = async (i) => {
        if(props.checkBoard(i)) {
            if(props.isXTurn === false){
                await props.updateGame(i, "O")
            } else {
                await props.updateGame(i, "X")
            }
            props.checkForWin()
        }
    }
    
    return (
        <div className="square-div" 
            onClick={() => handleClick(props.boxIndex)}
        >
            <span className="square-value-text">
                {props.game[props.boxIndex] === null ? "*" : props.game[props.boxIndex]}
            </span>
        </div>
    )
}
