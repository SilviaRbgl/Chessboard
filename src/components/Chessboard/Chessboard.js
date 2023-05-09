import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Chessboard/Chessboard.css";
import Square from "../Square/Square";
import { isPotentialMove } from "../../utils/isPotencialMove";
import { convertCoords } from "../../utils/convertCoords";

function Chessboard() {
  const navigate = useNavigate();

  // Get query params
  const { search } = useLocation();
  const queryParameter = new URLSearchParams(search);
  const startValue = queryParameter.get("start");

  const [potentialMoves, setPotentialMoves] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState([]);

  useEffect(() => {
    if (startValue) {
      const startingValues = startValue.split("");
      const [startingRow, startColumn] = convertCoords(startingValues);
      const movesArray = getKnightMoves(startingRow, startColumn);

      setPotentialMoves(movesArray);
      setSelectedSquare([startingRow, startColumn]);
    }
  }, []);

  function createSquare(row, col) {
    const cell = {
      row: row,
      col: col,
    };

    const clickedSquare = isPotentialMove(cell, potentialMoves)
      ? "move"
      : "no-highlight";

    const isStart = Boolean(
      selectedSquare[0] === row && selectedSquare[1] === col
    );
    const startColorClass = isStart ? "start" : "";

    // Assign a letter per row to be printed out inside the Square component
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const letterRow = letters[row - 1];

    return (
      <Square
        row={row}
        letterRow={letterRow}
        col={col}
        handleClick={handleClick}
        startColorClass={startColorClass}
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

  // Get a list of the potential squares the knight could move to
  function getKnightMoves(row, col) {
    // Get all the possible movements, even outside the limits of the chessboard
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

    // Get a list of possible movements inside the chessboard limits
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
    const clickedValue = { row: row, col: col };
    const movesArray = getKnightMoves(row, col);
    setSelectedSquare(clickedValue);
  }

  return (
    <>
      <div className="chessboard">{boardRows}</div>
    </>
  );
}

export default Chessboard;
