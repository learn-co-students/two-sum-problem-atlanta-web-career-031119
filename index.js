function bruteForceTwoSum(array, sum) {
  let pairs = [];
  for (let x = 0; x < array.length; x++) {
    for (let y = x + 1; y < array.length; y++) {
      if (array[x] + array[y] === sum) {
        pairs.push([array[x], array[y]]);
      }
    }
  }
  return pairs;
}

function binarySearchTwoSum(array, sum) {
  let pairs = [];
  for (let x = 0; x < array.length; x++) {
    for (let y = x + 1; y < array.length; y++) {
      if (array[x] + array[y] === sum) {
        pairs.push([array[x], array[y]]);
      }
    }
  }
  return pairs;
}

function binaryMatch(array, sum) {
  return true;
}

function hashTwoSum(array, sum) {
  let pairs = [];
  const complements = {};
  for (let i = 0; i < array.length; i++) {
    if (complements[array[i]] >= 0) {
      pairs.push([array[complements[array[i]]], array[i]]);
    }
    complements[sum - array[i]] = i;
  }
  return pairs;
}
