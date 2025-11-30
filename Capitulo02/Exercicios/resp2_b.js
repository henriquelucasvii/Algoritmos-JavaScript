// Pegando os elementos do HTML
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{

    const valorPorHora = parseFloat(frm.inNumber.value)
    const usoPorCliente = parseFloat(frm.inHoras.value)

    const tempoTotalDeUso = Math.ceil(usoPorCliente / 15) // O math.cell arredonda para cima
    const valorFinal = valorPorHora  * tempoTotalDeUso

    resp.innerText = `Valor a Pagar R$: ${valorFinal}`

    e.preventDefault()
})
