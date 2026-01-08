const text = ``; // Paste your text between the backticks

const wordsSet = new Set();

for (const word of text.split(/\s+/)) {
  const cleanedWord = word.replace(/[.,!?;:"'""''()\-]/g, "").toLowerCase();
  if (cleanedWord) {
    wordsSet.add(cleanedWord);
  }
}

console.log(wordsSet.size);
