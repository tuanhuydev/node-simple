// Write loop function to flatten array in normal loop and Array.reduce
const samples = [
  ["one", "two", "three", "four"],
  ["five", "six", "seven"],
];

function flattenWithLoop(arrs) {
  let results = [];
  for (arr of arrs) {
    results = results.concat(arr);
  }
  return results;
}

function flattenWithReduce(arrs) {
  return arrs.reduce(function (results, currentValue) {
    return results = results.concat(currentValue);
  }, []);
}

// Results

// console.log(flattenWithLoop(samples));
// console.log(flattenWithReduce(samples));
