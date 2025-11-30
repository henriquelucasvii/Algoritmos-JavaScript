const form = document.querySelector("form")
const resposta = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    
    const numero = Number(document.querySelector("#inNumero").value)
    let temDivisor = 0    
    for(let i = 2; i <= numero / 2; i++){
        if (numero % i == 0){
            temDivisor = 1
            break
        }
    }

    if (numero > 1 && !temDivisor){     // se num > 1 e não possui divisor
        resposta.innerText = `${numero} é primo`
    } else {
        resposta.innerText = `${numero} não é primo`
    }

    e.preventDefault()
})