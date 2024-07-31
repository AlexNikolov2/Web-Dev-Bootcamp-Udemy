function ceasarCipher(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char >= "a" && char <= "z") {
      let shiftedChar = String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift) % 26) + 97
      );
      result += shiftedChar;
    } else if (char >= "A" && char <= "Z") {
      let shiftedChar = String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shift) % 26) + 65
      );
      result += shiftedChar;
    } else {
      result += char;
    }
  }

  return result;
}
