const prompt = require("prompt-sync")()

console.log("Digite 0 para sair")
do {
    const num = Number(prompt("Número: "))
    if (num == 0 || isNaN(num)){
        const sair = confirm("Confirmar saída?")
        if (sair){
            break
        } else {
            continue
        }
    }
    if (num % 2 == 0){
        console.log(`O dobro de ${num} é: ${num * 2}`)
    } else {
        console.log(`O triplo de ${num} é: ${num * 3}`)
    }
} while (true)
console.log("Bye, bye...")