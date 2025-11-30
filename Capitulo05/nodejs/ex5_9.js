const prompt = require("prompt-sync")()

const produto = prompt("Digite o produto: ")
const num = Number(prompt("Digite a etiqueta: "))

// cria um laço de repetição ate num/2 (pois imprime 2 etiquetas por linha)
for(let i = 1; i <= num / 2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (num % 2 == 1){      // se quantidade solicitada de de etiquetas for impar, imrpime mais uma etiqueta
    console.log(produto)
}