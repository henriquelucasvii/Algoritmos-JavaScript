const form = document.querySelector("form")
const resposta = document.querySelector("pre")

const clubes = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeClube = form.inClube.value

    clubes.push(nomeClube)
    form.inClube.value = ""     // limpa dados do form
    inClube.focus()

    // dispara um evento de click em buttonListar (equivale a um click no botão da página)
    form.buttonListar.dispatchEvent(new Event("click"))
})

form.buttonListar.addEventListener("click", () => {
    if (!clubes.length){
        alert("Informe pelo menos 1 clube!")
        return
    }

    let lista = ""

    for(const clube of clubes){
        lista += clube + "\n"
    }

    resposta.innerText = lista
})

form.buttonMostrar.addEventListener("click", () => {

    const tam = clubes.length

    if (tam == 0 || (tam % 2 == 1)){
        alert("Deve haver um par de clubes")
        return
    }

    let jogos = ""
    const ultimo = tam - 1

    for(let i = 0; i < tam / 2; i++){
        jogos += clubes[i] + " x " + clubes[ultimo - i] + ""
    }

    resposta.innerText = jogos
})