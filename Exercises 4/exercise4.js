function reverseVowels(str) {
  const arr = str.split("");
  const vowels = arr.filter((char) => checkVowels(char));

  return arr.map((char) => (checkVowels(char) ? vowels.pop() : char)).join("");
}

function checkVowels(char) {
  return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}
