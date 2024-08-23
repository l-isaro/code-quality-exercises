function calculateFactorial(n) {
  if (n < 0) return "Wrong input: Negative number";

  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}
