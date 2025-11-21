const form = document.querySelector("form")
const resposta = document.querySelector("pre")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(document.querySelector("#inNumero").value)
    let resp = ""

    for(let i = 0; i <= 10; i++){

        resp = `${resp}${numero} x ${i} = ${numero * i}\n`

    }

    resposta.innerText = resp

})