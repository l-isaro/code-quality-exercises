function solution(number) {
  let result = "";
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  decimals.map(function (n, i) {
    while (number >= n) {
      result += roman[i];
      number -= n;
    }
  });

  return result;
}
