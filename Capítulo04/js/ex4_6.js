const frm = document.querySelector("form")
const resp1 = document.querySelector("outResp1")
const resp2 = document.querySelector("outResp2")
const resp3 = document.querySelector("outResp3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const saque = Number(document.querySelector("#inSaque").value)

    if (saque % 10 != 0) {
        alert("Insira um número múltiplo de 10 (R$ 10, 50, 250, ...)")  // se saque nãp é multiplo de 100
        frm.inSaque.focus()
        return
    }

    const notasCem =  Math.floor(saque / 100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto / 10)
})