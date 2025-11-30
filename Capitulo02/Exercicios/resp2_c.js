const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// Função principal
frm.addEventListener("submit", (e) => {

    const prod = frm.inNameProd.value
    const preco = Number(frm.inPreco.value)

    const prodTerceiro = preco * 0.5
    const total = (preco * 2) + prodTerceiro

    resp1.innerText = `${prod} - Promoção: Leve 3 por ${total.toFixed(2)}`
    resp2.innerText = `O 3º Produto custa apenas R$: ${prodTerceiro.toFixed(2)}`

    e.preventDefault()
})