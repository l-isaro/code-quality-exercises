function solution(roman) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  Array.from(roman).forEach((n, i) => {
    romanNumbers[n] < romanNumbers[roman[i + 1]]
      ? (result -= romanNumbers[n])
      : (result += romanNumbers[n]);
  });

  return result;
}
