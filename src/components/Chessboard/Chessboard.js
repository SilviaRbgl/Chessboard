import React, { useState } from "react";
import "../Chessboard/Chessboard.css";
import { isPotentialMove } from "../../utils/isPotencialMove";
import Square from "../Square/Square";
import { useParams } from "react-router-dom";


function Chessboard() {
  const [potentialMoves, setPotentialMoves] = useState([]);
  const { start } = useParams();


  // console.log(typeof startMoveToArray); ARRAY
  // const startMoveToString = startMoveArray.toString();
  // console.log("startMoveToString>>", startMoveToString);
  // console.log(typeof startMoveToString); STRING

  function createSquare(row, col) {
    const square = {
      row: row,
      col: col,
    };
    const startSquare = start?.split("").toString();
    console.log("startSquare", startSquare);

    const clickedSquare = isPotentialMove(square, potentialMoves) ? "move" : "";

    return (
      <Square
        row={row}
        col={col}
        startSquare={startSquare}
        handleClick={handleClick}
        clickedSquare={clickedSquare}
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
  // console.log(boardRows);
  function getKnightMoves(row, col) {
    console.log("getKnightMoves");

    // const moves = [];
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
    // console.log("allKnightMovements", allKnightMovements);

    const possibleMovements = allKnightMovements.filter((oneMovement) => {
      return (
        oneMovement.row >= 1 &&
        oneMovement.row <= 8 &&
        oneMovement.col >= 1 &&
        oneMovement.col <= 8
      );
    });
    // console.log("possibleMovements", possibleMovements);
    setPotentialMoves(possibleMovements);
    return possibleMovements;
  }
  function handleClick(row, col) {
    console.log(`Clicked square (${col}, ${row})`);
    //   console.log(getKnightMoves(row, col));
    const movesArray = getKnightMoves(row, col);
    console.log("movesArray", movesArray);
  }

  return (
    <>
      <div className="chessboard">{boardRows}</div>
    </>
  );
}

export default Chessboard;
