const form = document.querySelector("form")
const resposta1 = document.querySelector("#outResp1")
const resposta2 = document.querySelector("#outResp2")

let resposta = ""       // string com a resposta a ser exibida
let numeroContas = 0    // inicializa contador
let valorTotal = 0      // acumulador

form.addEventListener("submit", (e) => {

    const descricao = document.querySelector("#inDescricao").value
    const valor = Number(document.querySelector("#inValor").value)

    numeroContas++      // add valores ao contador e acumulador
    valorTotal += valor
    resposta = resposta + descricao + ` - R$: ` + valor.toFixed(2) + `\n`
    resposta1.innerText = `${resposta} -------------------------`
    resposta2.innerText = `${numeroContas} Contas - Total R$: ${valorTotal.toFixed(2)}`

    form.inDescricao.value = ""
    form.inValor.value = ""
    form.inDescricao.focus()

    e.preventDefault()
})