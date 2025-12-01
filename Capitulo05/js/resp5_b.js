const form = document.querySelector("form")
const output = document.querySelector("h3")

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const numChinchilas = Number(document.querySelector("#numChinchilas").value)
    const ano = Number(document.querySelector("#ano").value)

    let resposta = ""
    let valorFinal = numChinchilas

    for(let i = 1; i <= ano; i++){
        
        resposta += `${i}º Ano: ${valorFinal} Chinchilas\n`
        valorFinal = valorFinal * 3
        
    }

    output.innerText = resposta
})