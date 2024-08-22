function calculateMatrixSum(matrix) {
  let sum = 0;
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;

  for (let row = 0; row < rowLength; row++)
    for (let column = 0; column < columnLength; column++)
      sum += matrix[row][column];

  return sum;
}
