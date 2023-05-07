const isPotentialMove = (square, potentialMoves) => {
  for (let i = 0; i < potentialMoves.length; i++) {
    if (JSON.stringify(potentialMoves[i]) === JSON.stringify(square)) {
      return true;
    }
  }
};
export { isPotentialMove };
