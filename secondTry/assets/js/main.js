function caesarCipher(text, key, encode) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    if (char.match(/[a-zA-Z]/)) {
      const isUpperCase = char === char.toUpperCase();
      const alphabet = isUpperCase
        ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        : "abcdefghijklmnopqrstuvwxyz";
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        let newIndex;
        if (encode === "code") {
          newIndex = (index + key) % 26;
        } else {
          newIndex = (index - key + 26) % 26;
        }
        const newChar = isUpperCase
          ? alphabet[newIndex]
          : alphabet[newIndex].toLowerCase();
        result += newChar;
      }
    } else {
      result += char;
    }
  }
  return result;
}

function processForm() {
  const text = document.getElementById("text").value;
  const key = parseInt(document.getElementById("key").value);
  const operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  const result = caesarCipher(text, key, operation);
  document.getElementById("result").textContent = `Ergebnis: ${result}`;
  return false;
}
