const form = document.querySelector("form")
const output = document.querySelector("#output")
const output2 = document.querySelector("#output2")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const num = Number(document.querySelector("#num").value)

    let soma = 1
    let resposta = "Divisores do " + num + ": 1"

    for(let i = 2; i <= num / 2; i++){
        if(num % i == 0){
            resposta += "," + i
            soma += i
        }
    }

    output.innerText = resposta + ` Soma: ${soma}`

    if (num == soma){
        output2.innerText = `${num} É um número Perfeito`
    } else {
        output.innerText = `${num} Não é um Número Perfeito`
    }

    
})
