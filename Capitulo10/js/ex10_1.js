const form = document.querySelector("form")
const divQuadro = document.querySelector("#divQuadro")

const criaElementosHTML = (tarefa) => {
    const h5 = document.createElement("h5")     // cria o elemento HTML h5
    const texto = document.createTextNode(tarefa)   // cria um texto
    h5.appendChild(texto)       // define que texto será filho de h5
    divQuadro.appendChild(h5)   // e que h5 será filho de divQuadro 
}

form.addEventListener("submit", (e) => {
    e.preventDefault()      

    const tarefa = form.inTarefa.value  

    criaElementosHTML(tarefa)

    form.reset()
    form.inTarefa.focus()
})

form.buttonSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0){
        alert("Não há tarefas para selecionar")
        return
    }

    let aux = 1     // variavel auxiliar para indicar linha selecionada

    // percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for(let i = 0; i < tarefas.length; i++){
        // se a tag é da class tarefa-selecionada (está selecionada)
        if (tarefas[i].className == "tarefa-selecionada"){
            tarefas[i].className = "tarefa-normal"      // troca para normal
            aux = i
            break
        }
    }

    // se a linha que está selecioonada é a última, irá voltar para a primeira
    if (aux == tarefas.length - 1){
        aux = -1
    }

    tarefas[aux + 1].className = "tarefa-selecionada"   // muda estilo da próxima linha
})

form.buttonRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    let aux = -1

    // percorre a lista das tarefas inseridas na página (elemento h5)
    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada"){
            aux = 1     // muda valor da variável aux
        }
    })

    if (aux == -1){     // se não há tarefa selecionada (ou se lista vazia...)
        alert("Selecione uma tarefa para removê-la")
        return
    }

    // solicita confirmação
    if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}?`)){
        divQuadro.removeChild(tarefas[aux])     // remove um dos filhos de divQuadro
    }
})

form.buttonGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0){
        alert("Não há tarefas para serem salvas")
        return
    }

    let dados = ""  // irá acumular os dados a serem salvos
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";"     // acumula contéudo de cada h5
    })

    // grava os dados em localStorage, removendo o último ";"
    localStorage.setItem("tarefasDia", dados.slice(0, -1))

    if (localStorage.getItem("tarefasDia")){
        alert("Ok! Tarefas Salvas")
    }
})

window.addEventListener("load", () => {
    // verifica se há tarefas salvas no navegador do usuário
    if (localStorage.getItem("tarefasDia")){
        // cria um vetor com a lista de tarefas (separadas pelo split(";")
        const dados = localStorage.getItem("tarefasDia").split(";")

        // percorre os dados armazenados em localStorage
        dados.forEach(dado => {
            criaElementosHTML(dado)
        })
    }
})