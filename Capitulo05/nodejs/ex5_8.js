const prompt = require("prompt-sync")()

console.log("Programa Anos da Copa do Mundo. Digite 0 para sair")
console.log("---------------------------------------------------")

do {
    let ano = Number(prompt("Ano "))

    if (ano == 0){
        break
    } else if (ano == 1942 || ano == 1946){
        console.log(`Não houve copa do mundo em ${ano} por causa da Segunda Guerra Mundial`)
    } else if(ano >= 1930 && ano % 4 == 2){
        console.log(`Sim! ${ano} é ano de Copa do Mundo!`)
    } else {
        console.log(`Não... ${ano} não é ano d Copa do Mundo.`)
    }
} while (true)