const form = document.querySelector("form")
const resposta = document.querySelector("h3")

form.addEventListener("submit", (e) => {

    const numero = Number(document.querySelector("#inNumero").value)

    let resp = `Entre ${numero} e 1: ${numero}`
    for(let i = numero - 1; i > 0; i--){
        resp = `${resp}, ${i}`
    }
    resposta.innerText = resp

    e.preventDefault()
})