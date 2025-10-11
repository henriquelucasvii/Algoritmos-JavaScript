const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


// ouvinte de evento
frm.addEventListener("submit", (e) =>{
    
    e.preventDefault()

    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2   // calcula a média
    
    resp1.innerText = `A média do aluno ${nome} é ${media}`

    // cria as condições
    if (media >= 7){
        resp2.innerText = `APROVADO`
        resp2.style.color = "blue"

    } else if (media >= 4){
        resp2.innerText = "EXAME"
        resp2.style.color = "yellow"
    } else {
        resp2.innerText = `REPROVADO`
        resp2.style.color = "red"
    }

   
})