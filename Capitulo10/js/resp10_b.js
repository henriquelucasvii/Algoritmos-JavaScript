const form = document.querySelector("form")
const divNome = document.getElementById("divNome")

// verifica se é nome completo
const verificarNome = (nomeCompleto) => {
    if (nomeCompleto.length < 2){
        alert("Informe o nome completo")
        form.inNome.focus()
        return false
    }
    return true
}

// gera o nome na DOM HTML
const gerarNome = (nomeCompleto) => {
    divNome.innerHTML = ""

    for(const nome of nomeCompleto){
        const h3 = document.createElement("h3")
        const texto = document.createTextNode(nome)
        
        const cores = ["blue", "red", "yellow", "black", "pink", "purple", "brown", "green", "orange", "silver"]
        
        h3.appendChild(texto)
        const corSorteada = Math.floor(Math.random() * cores.length)

        h3.style.color = cores[corSorteada]
        divNome.appendChild(h3)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeCompleto = form.inNome.value.trim().split(" ")

    if (!verificarNome(nomeCompleto)) return
    gerarNome(nomeCompleto)
})