const form = document.querySelector("form")
const resp = document.querySelector("span")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = form.inFruta.value.toUpperCase()      // contéudo do campo em maiusculas
    let resposta = ""

    for(const letra of fruta){
        if (letra == fruta.charAt(0)){     // se letra igual a letra inicial da string...
            resposta += fruta.charAt(0)    // adiciona a letra inicial
        } else {
            resposta += "_"                 // senao, adiciona o sublinhado
        }
    }

    resp.innerText = resposta
    form.inFruta.value = "*".repeat(fruta.length)       // preenche com "*", conforme tamanho
})