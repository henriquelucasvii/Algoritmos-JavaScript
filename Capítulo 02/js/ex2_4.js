const fmr = document.querySelector("form")
const resp = document.querySelector("h3")


// Ouvinde quando o botão submit for clicado
fmr.addEventListener("submit", (e) => {
    // Obtém conteúdo dos campos
    const quilo = Number(fmr.inQuilo.value)
    const consumo = Number(fmr.inConsumo.value)

    const valor = (quilo / 1000) * consumo
    resp.innerText = `O valor a pagar: ${valor.toFixed(2)}` 

    e.preventDefault()
})