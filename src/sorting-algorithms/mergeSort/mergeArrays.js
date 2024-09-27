function mergeArrays(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    arr2[j] > arr1[i] ? results.push(arr1[i++]) : results.push(arr2[j++]);
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]));
