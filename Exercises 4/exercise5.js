function fibonacci(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("Input is not a positive integer");
  }

  let sequence = [0, 1];

  while (sequence[sequence.length - 1] < n) {
    let nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextNumber <= n) {
      sequence.push(nextNumber);
    } else {
      break;
    }
  }

  return sequence;
}

function runFibonacci(input) {
  try {
    const result = fibonacci(input);
    console.log(`Fibonacci sequence up to ${input}: ${result}`);
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}
