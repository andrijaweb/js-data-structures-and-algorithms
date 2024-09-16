// Implement a function called areThereDuplicates which accepts
// a variable number of arguments, and checks whether there are
// any duplicates among the arguments passed in.

// Constraints:
//        Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
  if (!args.length) return false;

  const obj = {};

  for (const val of args) {
    if (!obj[val]) obj[val] = 1;
    else return true;
  }

  return false;
}

console.log(areThereDuplicates("test", "test2", "test3", "test")); // true
console.log(areThereDuplicates("x", "y", "z", "X")); // false
console.log(areThereDuplicates(100, 200, 300)); // false
