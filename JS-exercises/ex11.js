//we have a queue
//

function newYearChaos(arr) {
  let bribes = 0;

  for (let i = 0; i < arr.length; i++) {
    let originalPosition = arr[i] - 1;

    for (let j = Math.max(0, originalPosition - 2); j < i; j++) {
      if (queue[j] > queue[i]) {
        bribes++;
      }
    }

    if (bribes > 2) {
      return "Too chaotic";
    }
  }
  return bribes;
}
