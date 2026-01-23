const form = document.querySelector("form")
const divClube = document.getElementById("divClube")

function inserirClubes(clube){
    const h5 = document.createElement("h5")
    const texto = document.createTextNode(clube)
  
    h5.className = `text-end me-2`
    h5.fontStyle = "italic"
    
    h5.appendChild(texto)
    divClube.appendChild(h5)
}


function criarTituloTabela(){
    const h3 = document.createElement("h3")
    const tituloTabela = document.createTextNode("Tabela de Jogos")
    h3.appendChild(tituloTabela)
    divClube.appendChild(h3)
}

function criarTabela(tabelaH5){
    const tabela = document.createElement("table")
    tabela.className = "table table-striped"
    divClube.appendChild(tabela)
    
    let linha
    for(let i = 0; i < tabelaH5.length; i++){
        if(i % 2 == 0){
           linha = tabela.insertRow(-1)
           const coluna = linha.insertCell(0)
           coluna.textContent = tabelaH5[i].innerText 
        } else {
            const coluna = linha.insertCell(1)
            coluna.textContent = tabelaH5[i].innerText
        }
    }
}

function verificarNumeroClubes(tabelaH5){
    if (tabelaH5.length == 0 || tabelaH5.length % 2 == 1){
        alert("Precisa ter um par de times")
        form.inClube.focus()
        return false
    } 
    return true 
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const clube = form.inClube.value
    inserirClubes(clube)

    form.inClube.value = ""
    form.inClube.focus()
})

form.buttonTabela.addEventListener("click", () => {

    const tabelaH5 = document.querySelectorAll("h5")

    if (!verificarNumeroClubes(tabelaH5)) return
    criarTituloTabela()
    criarTabela(tabelaH5)
    
    buttonTabela.disable = true
})

addEventListener("reset", () => {
    location.reload()
})