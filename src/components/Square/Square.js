import React from "react";
import "../Square/Square.css";

function Square({ row, col, handleClick, clickedSquare, startSquare, startValue }) {
  const isBlue = (row + col) % 2 === 1;
  const squareColor = isBlue ? "blue-dark" : "blue-light";

  const isStart = Boolean(startSquare === (`${row},${col}`)) || (startValue === (`${row}${col}`))
  const startColor = isStart ? "start" : "";

  return (
    <button
      className={`square ${squareColor} ${clickedSquare} ${startColor}`}
      id={`${row},${col}`}
      onClick={() => handleClick(row, col)}
    >
      {" "}
      {row} , {col} 
    </button> 
  );
} 

export default Square;
