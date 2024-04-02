const binarySearch = (input: number[], target: number): number | null => {
  let low = 0;
  let high = input[input.length - 1];
  let operationsCount = 1;

  while (low <= high) {
    const guessIndex = Math.round((low + high) / 2);
    const guess = input[guessIndex];

    if (guess === target) {
      console.log("Operations count:", operationsCount);

      return guessIndex;
    }

    if (guess < target) {
      low = guessIndex + 1;
    } else {
      high = guessIndex - 1;
    }

    operationsCount++;
  }

  return null;
};

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)); // to be 7
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); // to be 0
const collection = Array.from(Array(100_000_000).keys());
console.log(binarySearch(collection, 2339993));
