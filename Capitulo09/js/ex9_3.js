const form = document.querySelector("form")
const respLista = document.querySelector("pre")

const verApostaExiste = (peso) => {
    if (localStorage.getItem("melanciaPeso")) { // se existir dados em localStorage
        // obtém seu contéudo e a string é divida em items de vetor a cada ";"
        const pesos = localStorage.getItem("melanciaPeso").split(";")

        // o peso deve ser convertido em string, pois o vetor contém strings
        return pesos.includes(peso.toString())
    }
    return false
}

const mostrarApostas = () => {
    // se não há apostas armazenas em localStorage
    if (!localStorage.getItem("melanciaNome")){
        // limpa o espaço de exibição das apostar (para quando "Limpar Apostar")
        respLista.innerText = ""
        return
    }

    /* obtem o contéudo das variáveis salvas no localStorage, separando-as em
    elementos de vetor  a cada ocorrencia do ";" */
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    let linhas = "" 

    // repetição para percorrer todos os elementos do vetor
    for (let i = 0; i < nomes.length; i++){
        linhas += `${nomes[i]} - ${pesos[i]}gr\n`
    }

    // exibe as linhas (altera o conteudo do elemento respLista)
    respLista.innerText = linhas
}

// chama a function quando a página é carregada, para mostrar apostas salvas
window.addEventListener("load", mostrarApostas)

form.buttonVencedor.addEventListener("click", () => {
    // se não há apostas armazenadas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas")
        return      // retorna (não executa os comandos abaixo)
    }

    // solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"))

    // se não informou, retorna
    if (pesoCorreto == 0 || isNaN(pesoCorreto)){
        return
    }

    // obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";")
    const pesos = localStorage.getItem("melanciaPeso").split(";")

    // valor inicial para vencedor é o da primeira aposta
    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    // percorre as apostas
    for (let i = 1; i < nomes.length; i++) {
        // calcula a diferença de peso do "vencedor" e da aposta atual
        const difVencedor = Mat
        h.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i] - pesoCorreto))
        // se a diferença da aposta atual (no for) for menor que a do "vencedor"
        if (difAposta < difVencedor){
            vencedorNome = nomes[i]         // troca o "vencedor"
            vencedorPeso = Number(pesos[i]) // para este elementos
        }
    }

    // monta mensagem com dados do vencedor
    let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`
    mensagem += "\n------------------------------------------"
    mensagem += `\nVencedor: ${vencedorNome}`
    mensagem += `\nApostas: ${vencedorPeso}gr`
    alert(mensagem)
})

form.buttonLimpar.addEventListener("click", () => {

    if(confirm("Deseja mesmo apagar?")){
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        mostrarApostas()
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const peso = Number(form.inPeso.value)

    // chama function que verifica se peso já foi apostado
    if (verApostaExiste(peso)){
        alert("Alguém já apostou este peso, informe outro...")
        form.inPeso.focus()
        return
    }

    if (localStorage.getItem("melanciaNome")) {     // se houver dados em localStorage
        // obtem o conteudo ja salvo e acrescante ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)
    } else {
        localStorage.setItem("melanciaNome", nome)
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas()    // chama a function que mostra as apostas já salvas
    form.reset()
    form.inNome.focus()
})