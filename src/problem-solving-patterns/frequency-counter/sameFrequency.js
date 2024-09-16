// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Constraints:
//      Time Complexity: O(N)

function sameFrequency(int1, int2) {
  const str1 = String(int1);
  const str2 = String(int2);

  if (str1.length !== str2.length) return false;

  const obj = {};

  for (const char of str1) {
    obj[char] = ++obj[char] || 1;
  }
  for (const char of str2) {
    if (obj[char]) obj[char]--;
    else return false;
  }

  return true;
}

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
