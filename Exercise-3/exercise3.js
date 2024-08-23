function recursivelyAdd(numbers) {
  if (numbers.length === 0) return 0;
  return numbers[0] + recursivelyAdd(numbers.slice(1));
}
