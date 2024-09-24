// Write a recursive function called capitalizeWords. Given an array
// of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  const result = [];

  if (!arr.length) return result;

  result.push(arr[0].toUpperCase());

  return [...result, ...capitalizeWords(arr.slice(1))];
}

console.log(capitalizeWords(["i", "love", "ethical", "hacking"]));
