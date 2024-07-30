function uniqueElement(arr) {
  let isUnique = false;

  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < sortedArr.length; i++) {
    if (
      sortedArr[i] !== sortedArr[i + 1] &&
      sortedArr[i - 1] !== sortedArr[i]
    ) {
      isUnique = true;
      console.log(sortedArr[i]);
      return sortedArr[i];
    }
  }
}
uniqueElement([1, 1, 1, 2, 2, 3, 4, 4, 4]);
