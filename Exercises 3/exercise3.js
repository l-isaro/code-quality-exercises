function add(numbers) {
  if (numbers.length === 0) return 0;
  return numbers[0] + add(numbers.slice(1));
}
