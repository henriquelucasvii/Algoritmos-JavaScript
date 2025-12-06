const form = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []    // declara vetor global

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = form.inModelo.value
    const preco = Number(form.inPreco.value)

    carros.push({modelo, preco})    // adiciona dados ao vetor de objetos   
    form.inModelo.value = ""    // limpa dados do form
    form.inPreco.value = ""     // limpa dados do form
    inModelo.focus()

    // dispara um evento de click em buttonListar (equivale a um click no botão da pagina)
    form.buttonListar.dispatchEvent(new Event("click"))

})

form.buttonListar.addEventListener("click", () => {
    if (carros.lenght == 0){
        alert("Não há carros na lista")
        return
    }

    // método reduce() concatena uma string, obtendo modelo e preço de cada veiculo
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos Carros Cadastrados\n ${"-".repeat(40)}\n${lista}`

})

form.buttonFiltrar.addEventListener("click", () => {

    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if (maximo == 0 || isNaN(maximo)){      // se não informou ou valor invalido
        return
    }
    // cria um novo vetor com os objetos que atendem a condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if (carrosFilter.length == 0) {// se tamanho do vetor filtrado é 0
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }
    let lista = ""
    for(const carro of carrosFilter){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carro Até RS: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

form.buttonSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual é o percental de desconto?"))
    if (desconto == 0 || isNaN(desconto)){
        return
    }
    const carrosDesconto = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = ""
    for(const carro of carrosDesconto){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})