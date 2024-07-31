function strings(grid) {
  let sorted = grid.map((row) => row.split("").sort().join(""));
  for (let i = 0; i < sorted[0].length; i++) {
    for (let j = 1; j < sorted.length; j++) {
      if (sorted[j][i] < sorted[j - 1][i]) {
        return "NO";
      }
    }
  }
  return "YES";
}
strings(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"]);
