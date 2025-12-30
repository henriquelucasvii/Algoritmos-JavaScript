const form = document.querySelector("form")
const resposta = document.querySelector("pre")

function retonarTracos(nome) {
    let tracos = ""

    for(const caractere of nome){
        if (caractere.includes(" ")){
            tracos += " "
        } else {
            tracos += "-"
        }
        
    }
    return tracos
}

function categorizarAluno(idade) {
    if (idade <= 12){
        return "Infantil"
    } else if (idade >= 13 && idade < 18){
        return "Juvenil"
    } else {
        return "Adulto"
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const idade = Number(form.inIdade.value)

    const nomeSublinhado = retonarTracos(nome)
    const categoria = categorizarAluno(idade)

    resposta.innerText = `${nome} \n${nomeSublinhado} \nCategoria: ${categoria}`


})
