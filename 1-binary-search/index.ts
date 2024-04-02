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
