function calculateMatrixSum(matrix) {
  return matrix
    .map((row) => row.reduce((sum, value) => sum + value, 0))
    .reduce((totalSum, rowSum) => totalSum + rowSum, 0);
}
