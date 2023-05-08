import "../Square/Square.css";

function Square({
  row,
  col,
  handleClick,
  clickedSquare,
  startColor,
}) {
  const isBlue = (row + col) % 2 === 1;
  const squareColor = isBlue ? "blue-dark" : "blue-light";

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
