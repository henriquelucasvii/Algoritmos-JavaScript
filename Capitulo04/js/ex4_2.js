// cria referencia ao form e elento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()  // evita envio do form

    const nome = frm.inNome.value
    const masc = frm.inMasculino.checked 
    const alt = parseFloat(frm.inAltura.value)

    let peso = 0
    if (masc){
        peso = 22 * Math.pow(alt,2)
    } else {
        peso = 21 * Math.pow(alt, 2)
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg`

})

frm.addEventListener("reset", (e) =>{
    resp.innerText = "" // limpa o contéudo
})