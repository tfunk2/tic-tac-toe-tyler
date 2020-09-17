import React from 'react'
import '../stylesheets/Square.css'

export default function Square(props){
    const handleClick = (i) => {
        if(props.checkBoard(i) === null) {
            if(props.isXTurn === false){
                props.updateGame(i, "O")
            } else {
                props.updateGame(i, "X")
            }
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
