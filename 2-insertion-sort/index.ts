const insertionSort = (collection: number[]) => {
  const sorted: number[] = [];

  const findSmallestIndex = () => {
    let smallest;
    let smallestIndex;

    for (let i = 0; i <= collection.length; i++) {
      if (!smallest || collection[i] < smallest) {
        smallest = collection[i];
        smallestIndex = i;
      }
    }

    return smallestIndex as number;
  };

  while (collection.length > 0) {
    const currSmallestIndex = findSmallestIndex();
    sorted.push(collection[currSmallestIndex]);
    collection.splice(currSmallestIndex, 1);
  }

  return sorted;
};
