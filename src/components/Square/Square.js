import "../Square/Square.css";

function Square({
  row,
  col,
  letterRow,
  handleClick,
  clickedSquare,
  startColorClass,
}) {
  // Print and style the two different blues of the squares of the chessboards
  const isBlue = (row + col) % 2 === 1;
  const squareColor = isBlue ? "blue-dark" : "blue-light";

  return (
    <button
      className={`square ${squareColor} ${clickedSquare} ${startColorClass}`}
      id={`${row},${col}`}
      onClick={() => handleClick(row, col)}
    >
      {" "}
      {letterRow}
      {col}
    </button>
  );
}

export default Square;
