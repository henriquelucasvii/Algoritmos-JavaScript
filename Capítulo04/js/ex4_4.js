const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    
    const horaBrasil = Number(document.querySelector("#inHoraBrasil").value)
    let horaFranca = horaBrasil + 5 // calcula o horario da França

    if (horaFranca > 24){   // se passar das 24h na França
        horaFranca -= 24    // subtrai 24
    }
    
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`

    e.preventDefault()  // evita envio do form
})