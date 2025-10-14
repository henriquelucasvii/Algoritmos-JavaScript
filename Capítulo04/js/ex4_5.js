const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{

    const numero = Number(document.querySelector("#inNumero").value)
    const raiz = Math.sqrt(numero)  // calcula a raiz do número

    if (Number.isInteger(raiz)){    // verifica se o número é inteiro ou não
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `Não é raiz: ${raiz}`
    }

    e.preventDefault()
})

