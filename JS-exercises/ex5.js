function squareMatrix(arr) {
  let diagonalSum = 0;
  let reverseDiagonal = 0;

  //using classic method
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        diagonalSum += arr[i][j];
      }
    }
  }

  let revArr = arr.reverse();

  for (let m = 0; m < revArr.length; m++) {
    for (let n = 0; n < revArr.length; n++) {
      if (m == n) {
        reverseDiagonal += arr[m][n];
      }
    }
  }

  let difference = diagonalSum - reverseDiagonal;

  if (difference < 0) {
    console.log(difference * -1);
  }

  console.log(difference);

  //using .map()

  let dSum = 0;
  let rSum = 0;

  arr.map((i, j) => {
    i[j];
    dSum += i[j];
  });
  [...arr].reverse().map((i, j) => {
    i[j];
    rSum += i[j];
  });

  let diff = dSum - rSum;

  if (diff < 0) {
    console.log(diff * -1);
  }
  console.log(diff);
}
squareMatrix([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
