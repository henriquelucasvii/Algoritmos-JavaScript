// Cria referência ao form e aos elementos de resposta pelos IDs do HTML
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

// Cria um ouvinte do evento, acionado quando o botão 'submit' for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value    // Obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    // Calcula os valores da entrada e das parcelas
    const entrada = preco * 0.50
    const parcela = (preco * 0.50) / 12

    // Exibe as respostas
    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault() // Evita envio do form
})
