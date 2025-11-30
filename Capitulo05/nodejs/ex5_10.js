const prompt = require("prompt-sync")()

const valor = parseFloat(prompt("Insira o valor do produto: "))
const parcela = parseFloat(prompt("Nº de Parcelas: "))

const valorParcelas = Math.floor(valor / parcela)
const valorFinal = valorParcelas + (valor % parcela)

for(let i = 1; i < parcela; i++){
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${parcela}ª R$ ${valorFinal.toFixed(2)}`)