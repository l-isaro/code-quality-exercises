function flatten(arr) {
  return arr.flat(checkNesting(arr));
}

function checkNesting(arr) {
  if (!Array.isArray(arr)) return 0;
  let maxDepth = 0;
  for (let element of arr) {
    if (Array.isArray(element)) {
      const depth = checkNesting(element);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  }
  return maxDepth + 1;
}

console.log(flatten([1, [2, [3, 4]], 5, [6]]));
