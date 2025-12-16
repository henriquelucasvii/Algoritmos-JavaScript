const prompt = require("prompt-sync")()

const anoAtual = new Date().getFullYear()
const idade = prompt(`Quanos anos você comemora em ${anoAtual}? `)
const anoNasc = anoAtual - idade
console.log(`Voce nasceu em ${anoNasc}`)