const recursiveAdding = (collection: number[]): number => {
  if (collection.length > 1) {
    return (
      collection[collection.length - 1] +
      recursiveAdding(collection.slice(0, -1))
    );
  }

  return collection[0];
};
