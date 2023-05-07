import React, { useState } from "react";
import "../Chessboard/Chessboard.css";
import { isPotentialMove } from "../utils/isPotencialMove";
import Square from "../Square/Square";

function Chessboard() {
  const [potentialMoves, setPotentialMoves] = useState([]);

  function createSquare(row, col) {
    const square = {
      row: row,
      col: col,
    };

    const clickedSquare = isPotentialMove(square, potentialMoves) ? "move" : "";
    return (
      <Square
        row={row}
        col={col}
        handleClick={handleClick}
        clickedSquare={clickedSquare}
      />
    );
  }

  const boardRows = [];
  for (let row = 1; row <= 8; row++) {
    const rowCells = [];
    for (let col = 1; col <= 8; col++) {
      rowCells.push(createSquare(row, col));
    }
    boardRows.push(<div className="row">{rowCells}</div>);
  }
  function getKnightMoves(row, col) {
    console.log("getKnightMoves");

    const moves = [];
    const allKnightMovements = [
      { row: row - 2, col: col + 1 },
      { row: row - 1, col: col + 2 },
      { row: row + 1, col: col + 2 },
      { row: row + 2, col: col + 1 },
      { row: row + 2, col: col - 1 },
      { row: row + 1, col: col - 2 },
      { row: row - 1, col: col - 2 },
      { row: row - 2, col: col - 1 },
    ];
    console.log("allKnightMovements", allKnightMovements);

    const possibleMovements = allKnightMovements.filter((oneMovement) => {
      return (
        oneMovement.row >= 1 &&
        oneMovement.row <= 8 &&
        oneMovement.col >= 1 &&
        oneMovement.col <= 8
      );
    });
    console.log("possibleMovements", possibleMovements);
    setPotentialMoves(possibleMovements);
    return possibleMovements;
  }
  function handleClick(row, col) {
    console.log(`Clicked square (${col}, ${row})`);
    //   console.log(getKnightMoves(row, col));
    const movesArray = getKnightMoves(row, col);
    console.log("movesArray", movesArray);
  }
  return <div className="chessboard">{boardRows}</div>;
}

export default Chessboard;
