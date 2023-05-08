import React from "react";
import "../Square/Square.css";

function Square({ row, col, handleClick, clickedSquare, startSquare }) {
  const isBlue = (row + col) % 2 === 1;
  const squareColor = isBlue ? "blue-dark" : "blue-light";

  const isStart = startSquare  === (`${row},${col}`)
  console.log(startSquare);
  console.log("row, col", `${row},${col}`);
  console.log("is Start", isStart);
  console.log("row", row)
  const startColor = isStart ? "start" : "";
  // console.log("startColor", startColor);

  return (
    <button
      className={`square ${squareColor} ${clickedSquare} ${startColor}`}
      id={`${col},${row}`}
      onClick={() => handleClick(row, col)}
    >
      {" "}
      {col} , {row} 
    </button> 
  );
} 

export default Square;
