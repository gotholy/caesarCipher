// ! ========== Projekt CaesarCipher ======== ! //

// - 1. Function die bei Button betätigung das verschlüsseln oder entschlüsseln starten.
// - 2. in bei 1. erstellter fn input festlegen
// - 3. Inputs kontrollieren
// - 4. fn zu verschlüsselung erstellen
// - 5. eine Variable mit dem alphabet erstellen. (nachträglich über alle funktionen geschrieben damit sie global verwendet werden kann)
// - 6. alphabet Variable in jedes Objelt trennen, und neu zuweisen mit map()
// - 7. festlegen wie sich das char verschieben soll encode true and false
// - 8. alles zum string wieder zusammen setzen
// - 9. fn zum eigentlichen verschieben des char auf dem index.
// - 10. funktion caesarCipher aufrufen und in restul speichern, result in HTML schreiben.

// // 5. variable mit dem alphabet zum verschlüsseln
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// // 1. funktions start mit dem parameter (encode), encode gibt uns true oder fals aus der onclick im HTML
function startCaesarCipher(encode) {
  console.log(encode);
  // // 2. Inputs einholen
  const inputText = document.getElementById("inputText").value;
  const key = document.getElementById("key").value;

  // // 3. kontrollieren ob inputs ankommen mit console.log
  console.log({ key }, { inputText });

  // // 4. function zur eigentlichen verschlüsselung
  // mehrer parameter (text, key, encode), text und key sind die inputs. encode ist die Boolean die angibt codieren/decodieren
  function caesarCipher(text, key, encode) {
    // // 6. hier wird das alphabet verschoben und in die variabel shiftedAlphabet gespeichert
    const shiftedAlphabet = alphabet
      .split("")
      .map((char) =>
        // // 7. wenn encode true (+ anzahl key input) wenn encode false (- anzahl key input)
        encode ? shiftCharacter(char, key) : shiftCharacter(char, -key)
      )
      // // 8. zum string zusammen setzen
      .join("");
    console.log(shiftedAlphabet);

    // // 9. funktion die von der hauptfunktion verwerndet wird, hier wird der einzelne char um die key anzahl verschoben
    function shiftCharacter(char, key) {
      // char im index finden
      const index = alphabet.indexOf(char);
      // index + key + 26 das der index zwischen 0 und 25 bleibt
      const newIndex = (index + key + 26) % 26;
      // verschobene zeichen zurück geben
      console.log(newIndex);
      return alphabet[newIndex];
    }
    // // 10. funktion zu verschlüsseln in einer variable cipherText zum wiederverwenden gespeichert.
    const cipherText = text
      // alles in kleinbuchsten
      .toLowerCase()
      // jedes zeichen einzeln
      .split("")
      // zeichen überprüfen ob is im alphabet ist. Wenn gefunden durch shiftedAlphabet zeichen ersetzen
      .map((char) => {
        if (alphabet.includes(char)) {
          const index = alphabet.indexOf(char);
          return shiftedAlphabet[index];
        }
        return char;
      })
      .join("");
    console.log(cipherText);

    return cipherText;
  }

  // // 10 . funktion ceasarCipher aufrufen und in result speichern
  const result = caesarCipher(inputText, key, encode);
  console.log(result);

  // // result in HTML ausgeben
  document.getElementById("output").textContent = result.toUpperCase();
}
