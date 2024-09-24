// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.

function stringifyNumbers(obj) {
  const newObj = {};

  for (const key in obj) {
    if (typeof obj[key] === "number") newObj[key] = String(obj[key]);
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else newObj[key] = obj[key];
  }

  return newObj;
}

console.log(
  stringifyNumbers({
    a: "test",
    b: [],
    c: 1,
    d: {
      dd: 19,
      ddd: {
        num: 0,
        isProgrammingHard: true,
      },
    },
  })
);
