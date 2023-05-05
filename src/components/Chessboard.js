import React from "react";
import "./Chessboard.css";

function Chessboard() {
  const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      // console.log("horizontalAxis", horizontalAxis[i]);
      // console.log("verticalAxis", verticalAxis[j]);
      const tile = j + i + 2;

      if (tile % 2 === 0) {
        board.push(
          <div className="tile dark-tile">
            <button className="dark-tile">{horizontalAxis[i]} {verticalAxis[j]}</button>
          </div>
        );
      } else {
        board.push(
          <div className="tile light-tile">
            <button className="light-tile">{horizontalAxis[i]} {verticalAxis[j]}</button> 
          </div>
        );
      }
    }
  }

  return <div className="chessboard">{board}</div>;
}

export default Chessboard;
