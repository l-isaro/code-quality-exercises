const numberFormat = function (number) {
  const reversedNumber = number.toString().split("").reverse();

  return reversedNumber
    .map((el, i) => {
      if (Number.isNaN(Number(el))) return el;

      if (i !== 0 && i % 3 === 0) {
        return el + ",";
      }

      return el;
    })
    .reverse()
    .join("");
};
