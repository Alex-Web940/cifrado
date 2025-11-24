const fs = require("fs");
const prompt = require("prompt-sync")();

const alfabeto = fs.readFileSync("cifrado.txt", "utf-8").trim();
const texto = prompt("Escribe una palabra: ").toLowerCase();
const desplazar = 3;
let resultado = "";

for (let i = 0; i < texto.length; i++) {
  const letra = texto[i];
  const posicion = alfabeto.indexOf(letra);
  if (posicion === -1) {
    resultado += letra;
} else {
    const nuevaPos = (posicion + desplazar) % alfabeto.length;
    resultado += alfabeto[nuevaPos];
  }
}

console.log("\nTexto original:", texto);
console.log("Texto cifrado:", resultado);

console.log(".");