const form = document.querySelector("form")
const resp = document.querySelector("pre")

const criancas = []     // declara vetor global

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const idade = Number(form.inIdade.value)
    criancas.push({nome, idade})
    form.reset()            // limpa campos do form
    form.inNome.focus()     // posiciona no campo de formulario
    form.buttonListar.dispatchEvent(new Event("click"))     // dispara click em buttonListar
})

form.buttonListar.addEventListener("click", () => {
    if (criancas.length == 0){      // se vazio exibe alerta
        alert("Não há crianças na lista")
        return
    }
    let lista = ""      // para concatenar lista de crianças
    for (const crianca of criancas){
        const { nome, idade} = crianca  // desestrutura o objeto
        lista += nome + " - " + idade + " anos\n"
    }
    resp.innerText = lista  // exibe a lista
})

form.buttonResumir.addEventListener("click", () => {
    if(criancas.length == 0){
        alert("Não há crianças na lista")
        return
    }
    const copia = [...criancas]     // cria copia do vetor criança
    copia.sort((a,b) => a.idade - b.idade)  // ordena pela idade
    let resumo = ""
    let aux = copia[0].idade    // menor idade do vetor ordenado
    let nomes = []      // para inserir nomes de cada idade
    for(const crianca of copia){
        const {nome, idade} = crianca
        if (idade == aux){      // se é da mesma idade auxiliar...
            nomes.push(nome)        // adiciona ao vetor nomes
        } else {    // senão, monta o resumo para cada idade
            resumo += aux + " ano(s): " + nomes.length + " crianças(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += `( + ${nomes.join(", ")})\n\n`
            aux = idade     // obtem nova idade na ordem
            nomes = []      // limpa o vetor dos nomes
            nomes.push(nome)    // adiciona o primeiro da nova idade
        }
    }
    // adiciona a ultima criança
    resumo += aux + " ano(s): " + nomes.length + " crianças(s) - "
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += `( + ${nomes.join(", ")})\n\n`  
    resp.innerText = resumo     // exibe a resposta
})