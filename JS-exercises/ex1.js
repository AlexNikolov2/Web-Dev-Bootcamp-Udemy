function plusMinus(arr) {
  let size = arr.length;
  let plus = 0;
  let minus = 0;
  let zeroes = 0;
  for (let i = 0; i < size; i++) {
    if (arr[i] > 0) {
      plus++;
    } else if (arr[i] < 0) {
      minus++;
    } else {
      zeroes++;
    }
  }
  console.log((plus / size).toFixed(6));
  console.log((minus / size).toFixed(6));
  console.log((zeroes / size).toFixed(6));
}
plusMinus([1, 2, -2, 3, 4]);
