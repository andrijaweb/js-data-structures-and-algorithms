// Given two strings, write a function to determine if the second string is an anagram of first.
// An anagram is a word, phrase, or name formed by rearranging
// the letters of another, such as cinema, formed from iceman.
// Note: You may assume that letters are all lowercase and no need to worry about capital.

// Time Complexity - O(n)

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj = {};

  for (const char of str1) obj[char] = ++obj[char] || 1;
  console.log(obj);
  for (const char of str2) {
    if (obj[char]) obj[char]--;
    else return false;
  }
  console.log(obj);

  return true;
}

console.log(validAnagram("test", "etst")); // trie
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("ttc", "cat")); // false
