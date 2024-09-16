// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Constraint:
//      Time Complexity - O(n)

function findLongestSubstring(str) {
  const obj = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (obj[char]) start = Math.max(start, obj[char]);

    obj[char] = i + 1;
    max = Math.max(max, i - start + 1);
  }

  return max;
}

console.log(findLongestSubstring("unpredictable")); // 11
console.log(findLongestSubstring("coding")); // 6
console.log(findLongestSubstring("a")); // 1
