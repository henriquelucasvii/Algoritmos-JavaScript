const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const saque = Number(document.querySelector("#inSaque").value)

    if (saque % 10 != 0) {
        alert("Insira um número múltiplo de 10 (R$ 10, 50, 250, ...)")  // se saque nãp é multiplo de 100
        frm.inSaque.focus()
        return
    }

    // Math.floor arredonda um número para baixo, retornando o menor número inteiro mais próximo ao número fornecido
    const notasCem =  Math.floor(saque / 100)   // calcula notas de 100
    let resto = saque % 100     // quanto sobra para pagar
    const notasCinquenta = Math.floor(resto / 50)   // calcula notas de 50
    resto %= 50 // quanto ainda sobra
    const notasDez = Math.floor(resto / 10)  // calcula notas de 10

    // se houver, exibe as notas
    if (notasCem > 0){
        resp1.innerText = `Notas de R$ 100: ${notasCem}`
    } 

    if (notasCinquenta > 0){
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }

    if (notasDez > 0){
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }
})