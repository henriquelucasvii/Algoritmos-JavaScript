// Pegando os elementos do HTML e transformando-os em variaveis
const form = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

form.addEventListener("submit", (e) => {

    const med = form.inMedicamento.value
    const preco = parseFloat(form.inPreco.value)

    const promocao = preco * 2
    
    resp1.innerText = `Promoção de ${med}`
    resp2.innerText = `Leve 2 por apenas ${promocao .toFixed(2)}`

    e.preventDefault()
})

