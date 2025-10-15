const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{

    const velPermitida = Number(document.querySelector("#inVelPermitida").value)
    const velCondutor = Number(document.querySelector("#inVelCondutor").value)

    if (velCondutor <= velPermitida){
        resp.innerText = `SITUAÇÂO: SEM MULTA`
    } else if (velCondutor <= velPermitida * 1.2){
        resp.innerText = `SITUAÇÂO: MULTA LEVE`
    } else {
        resp.innerText = `SITUAÇÂO: MULTA GRAVE`
    }

    e.preventDefault()
})