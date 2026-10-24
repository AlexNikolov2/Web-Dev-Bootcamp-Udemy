const pages = 200;
let onesCount = 0;

for (let i = 1; i <= pages; i++) {
  let numString = i.toString();
  for (let j = 0; j < numString.length; j++) {
    if (numString[j] === "1") {
      onesCount++;
      console.log(`Found '1' in number ${i}`);
    }
  }
}
console.log(onesCount);
