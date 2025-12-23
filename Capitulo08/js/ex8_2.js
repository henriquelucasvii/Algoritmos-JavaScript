const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear()
    let classIf = ""

    if (ano == anoAtual){
        classIf = "Novo"
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2){
        classIf = "SemiNovo"
    } else {
        classIf = "Usado"
    }
    return classIf
}

const calcularEntrada = (valor, status) => status == "Novo" ? valor * 0.5: valor * 0.3

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // obtem conteudo dos campos
    const modelo = form.inModelo.value
    const ano = Number(form.inAno.value)
    const preco = Number(form.inPreco.value)
    
    // chama função e atribui
    const classificacao = classificarVeiculo(ano)   
    const entrada = calcularEntrada(preco, classificacao)
    const parcela = (preco - entrada) / 10

    resp1.innerText = `${modelo} - ${classificacao}`
    resp2.innerText = `Entrada R$; ${entrada.toFixed(2)}`
    resp3.innerText = `+10x de R$: ${parcela.toFixed(2)}`
})
