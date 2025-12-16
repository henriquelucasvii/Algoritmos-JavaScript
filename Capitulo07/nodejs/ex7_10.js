const prompt = require("prompt-sync")()

const altura = Number(prompt("Altura da Arvore: "))    // le o numero de linhas
console.log()

for (let i = 1; i <= altura; i++){
    const espacos = 30 + (altura - i)       // calcula espacos de inicio
    console.log(" ".repeat(espacos) + "*".repeat(i*2))      // exibe cada linhas
}