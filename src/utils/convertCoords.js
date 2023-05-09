// Convert coordinates of style "A1", into numbers 1,1
function convertCoords(startingValues) {
  const [startRow, startCol] = startingValues;

  const letterToNumber = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  const letter = startRow.toUpperCase();
  const number = Number(startCol);

  if (
    startingValues.length > 2 ||
    number < 1 ||
    number > 8 ||
    !letterToNumber[letter]
  ) {
    alert(
      "Invalid start coordinates. Enter first a letter from A to H, then a number between 1 and 8."
    );
    return [];
  } else {
    const column = number;
    const row = letterToNumber[letter];
    return [row, column];
  }
}

export { convertCoords };
