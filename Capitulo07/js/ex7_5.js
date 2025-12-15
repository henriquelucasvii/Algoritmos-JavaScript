const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const funcionario = form.inFuncionario.value

    // divide o nome em itens de vetor, criados a cada ocorrência do espaço
    const partes = funcionario.split(" ")
    let email = ""      // vai concaternar letras
    const tam = partes.length       // obtem nº de itens do vetor partes

    console.log("Funcionario: ", funcionario)
    console.log("Partes: ", partes)
    console.log("Tamanho de partes(partes.length): ", tam)

    for(let i = 0; i < tam - 1; i++){   // percorre itens do vetor (excento o ultimo)
        email += partes[i].charAt(0)    // e obtem a letra inicial de cada item
    }

    // concatena as çetras iniciais com a ultima parte (sobrenome) e empresa
    email += partes[tam - 1] + `@empresa.com.br`

    resp.innerText = `E-mail: ${email.toLowerCase()}`
})