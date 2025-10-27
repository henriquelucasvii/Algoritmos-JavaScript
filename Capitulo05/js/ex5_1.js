const prompt = require("prompt-sync")()

let numeros = Number(prompt("Digite um número: "))

for(let i = 1; i <= 10; i++){
    let resultado = numeros * i;
    console.log(resultado)
}