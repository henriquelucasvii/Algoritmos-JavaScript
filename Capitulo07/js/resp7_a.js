const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const mensagem = form.inMensagem.value
    const tam = mensagem.length
    let resposta = ""

    // pegar posições impares
    for(let i = 1; i < tam; i += 2){
        resposta += mensagem.charAt(i)
    }
    
    // pegar posições pares
    for(let i = 2; i < tam; i += 2){
        resposta += mensagem.charAt(i)
    }
        
    resp.innerText = resposta
})

form.buttonDescri.addEventListener("click", () => {
    if(!form.checkValidity()){
        alert("Insira uma mensagem")
        form.inMensagem.focus()
        return
    }
    const mensagem = form.inMensagem.value
    const tam = mensagem.length

    const metade = Math.floor(tam / 2)
    let resposta = ""

    if (tam % 2 == 0) {
        for (let i = metade; i < tam; i++) {
            resposta += mensagem.charAt(i)
            resposta += mensagem.charAt(i - metade)
        }
    } else {
        for (let i = metade; i < tam - 1; i++) {
            resposta += mensagem.charAt(i)
            resposta += mensagem.charAt(i - metade)
        }
        resposta += mensagem.charAt(tam-1)
    }

    
    console.log(resposta)
    resp.innerText = resposta
})