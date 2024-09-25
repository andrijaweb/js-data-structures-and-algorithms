// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

function collectStrings(obj) {
  let resultArr = [];

  for (const key in obj) {
    if (typeof obj[key] === "string") resultArr.push(obj[key]);
    else if (typeof obj[key] === "object") {
      resultArr = resultArr.concat(collectStrings(obj[key]));
    }
  }

  return resultArr;
}

console.log(
  collectStrings({
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz",
            },
          },
        },
      },
    },
  })
);
