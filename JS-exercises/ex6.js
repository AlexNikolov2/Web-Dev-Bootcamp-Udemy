function findMedian(arr) {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sortedArr.length; i++) {
    if (i == Math.floor(sortedArr.length / 2)) {
      return sortedArr[i];
    }
  }
}
