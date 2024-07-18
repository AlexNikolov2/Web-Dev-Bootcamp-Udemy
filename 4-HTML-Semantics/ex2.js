function nodeLists(arr1, arr2) {
  let num1 = Number(arr1.join(""));
  let num2 = Number(arr2.join(""));
  sum = num1 + num2;

  let numArr = sum.toString().split("").map(Number).reverse();
  console.log(numArr);
}
nodeLists([1, 2, 3], [1, 2]);
