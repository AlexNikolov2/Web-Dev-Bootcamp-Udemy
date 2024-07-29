function miniMaxSum(arr) {
  let min = 0;
  let max = 0;

  let minArr = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < minArr.length - 1; i++) {
    min += minArr[i];
  }

  let maxArr = arr.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < maxArr.length - 1; i++) {
    max += maxArr[i];
  }

  console.log(minArr, maxArr);
  console.log(`${min} ${max}`);
}
miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([2, 6, 1, 8, 5]);
