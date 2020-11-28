// Custom test file without Mocha
const assert = require("assert");
const { forEach, map } = require("./index");

const test = (desc, fn) => {
  console.log("----", desc);
  try {
    fn();
  } catch (err) {
    console.log(err.message);
  }
};

test("The forEach function", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, "Exprected forEach to sum the array"); // Optional third argument for more info on what we are asserting.

  // Replaced with assert
  // if (sum !== 6) {
  //   throw new Error("Exprected summing array to equal 6");
  // }
});

test("The map function", () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });
  // result returned === [2,4,6]

  assert.deepStrictEqual(result, [2, 4, 6]); // this function will look at all values inside of result

  // Can be replaced with deepStrictEqual
  // assert.strictEqual(result[0], 2);
  // assert.strictEqual(result[1], 4);
  // assert.strictEqual(result[2], 6);

  // Replaced with assert.strictEqual
  // if (result[0] !== 2) {
  //   throw new Error(`Expected to find 2, but found ${result[0]}`);
  // }
  // if (result[1] !== 4) {
  //   throw new Error(`Expected to find 4, but found ${result[0]}`);
  // }
  // if (result[2] !== 6) {
  //   throw new Error(`Expected to find 6, but found ${result[0]}`);
  // }
});

/*
  1 Issues with previous implementation of index.test.js
  - use of global variables
  - ideally we want all tests to run instead of exiting test code at error
  - make it easier to find where test error occurred


  const { forEach, map } = require("./index");

  // Test forEach(arr, cb)
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  if (sum !== 6) {
    throw new Error("Exprected summing array to equal 6");
  }

  // Test map(arr, cb)
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });
  // result returned === [2,4,6]

  if (result[0] !== 2) {
    throw new Error(`Expected to find 2, but found ${result[0]}`);
  }
  if (result[1] !== 4) {
    throw new Error(`Expected to find 4, but found ${result[0]}`);
  }
  if (result[2] !== 6) {
    throw new Error(`Expected to find 6, but found ${result[0]}`);
  }

*/
