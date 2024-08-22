function calculateAverage(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);

  const count = numbers.length;

  const average = sum / count;

  return average;
}
