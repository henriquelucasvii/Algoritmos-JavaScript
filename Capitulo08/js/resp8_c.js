const form = document.querySelector("form")
const resp1 = document.querySelector("#output1")
const resp2 = document.querySelector("#output2")

form.radioButtonYes.addEventListener("click", () => {
    form.inConvenios.className = "exibe"
})

form.radioButtonNo.addEventListener("click", () => {
    form.inConvenios.className = "oculta"
})

const calcularDesconto = (valor, taxaDesconto) => {
    return valor * (taxaDesconto / 100)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(form.inValor.value)

    let desconto = 0

    if (form.radioButtonYes.checked){
        if (form.inConvenios.value == "amigos"){
            desconto = calcularDesconto(valor, 20)
        } else {
            desconto = calcularDesconto(valor, 50)
        }
    } else {
        desconto = calcularDesconto(valor, 10)
    }

    resp1.innerText = `Desconto R$: ${desconto.toFixed(2)}`
    resp2.innerText = `A Pagar R$: ${(valor - desconto).toFixed(2)}`
})