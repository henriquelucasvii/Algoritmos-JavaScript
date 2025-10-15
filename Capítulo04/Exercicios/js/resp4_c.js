const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{

    const valor = Number(document.querySelector("#inValor").value)
    
    if (valor < 1.0){
        alert("Valor insuficiente")
        frm.inValor.focus()
        return
    }

    let troco = 0, tempo = 0

    if (valor >= 3.0){
        troco = valor - 3.0
        tempo = 120
    } else if (valor >- 1.75){
        troco = valor - 1.75
        tempo = 60
    } else {
        tempo = 30
        troco = valor - 1.0
    }

    resp1.innerText = `Tempo: ${tempo} min`
    if (troco > 0){
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
    }
    
    e.preventDefault()
})







/*if valor < 1 {"Valor insuficiente"} return */