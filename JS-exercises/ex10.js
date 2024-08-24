//lets say we have a number
//calculate the sum of all the digits
//check if the number is more than one digit
// if yes - keep the work
// if no - print.

function superDigit(n, k) {
  let numString = "";
  for (let i = 0; i < k; i++) {
    numString += n;
  }

  let superSum = 0;
  while (numString.length > 1) {
    superSum = 0;
    for (let i = 0; i < numString.length; i++) {
      superSum += Number(numString[i]);
    }

    numString = superSum.toString();
    if (numString.length == 1) {
      return Number(numString);
    }
  }
}
superDigit(575, 2);
