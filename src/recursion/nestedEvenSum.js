// Write a recursive function called nestedEvenSum. Return the sum
// of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === "object") sum += nestedEvenSum(obj[key]);
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) sum += obj[key];
  }

  return sum;
}

console.log(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  })
);
