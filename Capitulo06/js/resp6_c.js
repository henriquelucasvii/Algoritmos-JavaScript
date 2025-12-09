const form = document.querySelector("form")
const resposta = document.querySelector("pre")

const candidatos = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeCandidato = form.inCandidato.value
    const numAcertos = Number(form.inAcertos.value)
    candidatos.push({nomeCandidato, numAcertos})

    form.inCandidato.value = ""
    form.inAcertos.value = ""
    form.inCandidato.focus()

    // dispara um evento de click em buttonListar (equivale a um click no botão da página)
    form.buttonListar.dispatchEvent(new Event("click"))
})

form.buttonListar.addEventListener("click", () => {
    if (!candidatos.length){
        alert("Não há candidatos!")
        return
    }
    
    let lista = ""
    for(const candidato of candidatos){
        lista += `${candidato.nomeCandidato} - ${candidato.numAcertos} acertos\n`
    }
    resposta.innerText = lista
})

form.buttonAprovados.addEventListener("click", () => {
    if (!candidatos.length){
        alert("Não há candidatos!")
        return
    }

    const notaCorte = Number(prompt("Número de Acertos para Aprovação?"))

    if (!notaCorte){
        alert("Número Inválido")
        return
    }

    const copia = candidatos.slice()
  
    // ordena o vetor copia pelos acertos 
    copia.sort((a, b) => { a.acertos - b.acertos })
    
    let aprovados = ""
    
    for (const candidato of copia) {
        if (candidato.numAcertos >= notaCorte) {
        aprovados += candidato.nomeCandidato + " - " + candidato.numAcertos + " acertos\n"
        }
    }

    if (aprovados == "") {
        resposta.innerText = "Não há candidatos aprovados..."
    } else {
        resposta.innerText = aprovados
    }
})