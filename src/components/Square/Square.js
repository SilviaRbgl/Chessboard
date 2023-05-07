import React from "react";
import "../Square/Square.css";

function Square({ row, col, handleClick, clickedSquare }) {
  // console.log("row", row);
  // console.log("col", col);
  // console.log("onClick", handleClick);
  // console.log("clickedSquare", clickedSquare);
  const isBlue = (row + col) % 2 === 1;
  const color = isBlue ? "blue-dark" : "blue-light";

  return (
    <button
      className={`square ${color} ${clickedSquare}`}
      id={`${row},${col}`}
      onClick={() => handleClick(row, col)}
    >
      {" "}
      {col} , {row}
    </button>
  );
}

export default Square;
