function romanToInt(roman) {
  let intSum = 0;
  for (let i = 0; i < roman.length; i++) {
    switch (roman[i]) {
      case "I":
        intSum++;
        break;
      case "V":
        intSum += 5;
        if (roman[i - 1] == "I") {
          intSum -= 2;
        }
        break;
      case "X":
        intSum += 10;
        if (roman[i - 1] == "I") {
          intSum -= 2;
        }
        break;
      case "L":
        intSum += 50;
        if (roman[i - 1] == "I") {
          intSum -= 2;
        }
        if (roman[i - 1] == "X") {
          intSum -= 20;
        }
        break;
      case "C":
        intSum += 100;
        if (roman[i - 1] == "I") {
          intSum -= 2;
        }
        if (roman[i - 1] == "X") {
          intSum -= 20;
        }
        break;
      case "D":
        intSum += 500;
        if (roman[i - 1] == "I") {
          intSum -= 2;
        }
        if (roman[i - 1] == "X") {
          intSum -= 20;
        }
        if (roman[i - 1] == "C") {
          intSum -= 200;
        }
        break;
      case "M":
        intSum += 1000;
        if (roman[i - 1] == "I") {
          intSum -= 2;
        }
        if (roman[i - 1] == "X") {
          intSum -= 20;
        }
        if (roman[i - 1] == "C") {
          intSum -= 200;
        }
        break;
    }
  }
  console.log(intSum);
}
romanToInt("MMIV");
