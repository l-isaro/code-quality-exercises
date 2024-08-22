function calculateAverage(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const count = numbers.length;
  return sum / count;
}
