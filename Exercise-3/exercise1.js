function flatten(arr) {
  return arr.flat(checkNesting(arr));
}

function checkNesting(arr) {
  let count = 0;

  arr.forEach((element) => {
    if (typeof element === "object") {
      count++;
    }
  });

  return count;
}
