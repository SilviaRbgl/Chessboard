import React, { useState } from "react";
import "../Chessboard/Chessboard.css";
import { isPotentialMove } from "../../utils/isPotencialMove";
import Square from "../Square/Square";
import { useParams, useLocation } from "react-router-dom";

function Chessboard() {
  const [potentialMoves, setPotentialMoves] = useState([]);
  const { start } = useParams();
  const location = useLocation();

  function createSquare(row, col) {
    const cell = {
      row: row,
      col: col,
    };
    const queryParameter = new URLSearchParams(location.search);
    const startValue = queryParameter.get("start");

    const startSquare = start?.split("").toString();

    const clickedSquare = isPotentialMove(cell, potentialMoves) ? "move" : "";

    return (
      <Square
        row={row}
        col={col}
        startSquare={startSquare}
        handleClick={handleClick}
        clickedSquare={clickedSquare}
        startValue={startValue}
      />
    );
  }

  const boardRows = [];
  for (let row = 1; row <= 8; row++) {
    const boardColumns = [];
    for (let col = 1; col <= 8; col++) {
      boardColumns.push(createSquare(row, col));
    }
    boardRows.push(<div className="row">{boardColumns}</div>);
  }

  function getKnightMoves(row, col) {
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

    const possibleMovements = allKnightMovements.filter((oneMovement) => {
      return (
        oneMovement.row >= 1 &&
        oneMovement.row <= 8 &&
        oneMovement.col >= 1 &&
        oneMovement.col <= 8
      );
    });

    setPotentialMoves(possibleMovements);
    return possibleMovements;
  }
  function handleClick(row, col) {
    // console.log(`Clicked square (${col}, ${row})`);
    const movesArray = getKnightMoves(row, col);
  }

  return (
    <>
      <div className="chessboard">{boardRows}</div>
    </>
  );
}

export default Chessboard;
