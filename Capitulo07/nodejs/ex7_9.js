const prompt = require("prompt-sync")()
const formula = prompt("Formula: ")
let abre = 0, fecha = 0

for(simbolo of formula){
    if (simbolo == "("){
        abre++
    } else if (simbolo == ")"){
        fecha++
    }

    if (fecha > abre){
        break
    }

} 
if (abre == fecha){    
    console.log(`OK! Formula correta em relacão aos parenteses`)
} else {
    console.log("Erro... Fórmula incorreta")
}