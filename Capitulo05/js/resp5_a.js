const form = document.querySelector("form")
const output = document.querySelector("h3")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let resposta = ""

    const nomeFruta = document.querySelector("#nomeFruta").value
    const numero = Number(document.querySelector("#numero").value)

    for(let i = 1; i <= numero; i++){
        resposta += `${nomeFruta} *`
    }

    output.innerText = resposta
})