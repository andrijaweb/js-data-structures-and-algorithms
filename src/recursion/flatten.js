// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

function flatten(arr) {
  let newArr = [];

  for (const val of arr) {
    if (val instanceof Array) newArr = newArr.concat(flatten(val));
    else newArr.push(val);
  }

  return newArr;
}

console.log(flatten([12, 13, [1, 3, 8], 14, 15])); // [12, 13, 1, 3, 8, 14, 15]
