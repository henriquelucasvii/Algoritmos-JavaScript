const form = document.querySelector("form")
const resposta = document.querySelector("h3")

const validarNome = nome => {
    if (nome.includes(" ")){
        return true
    }
    return false
}

const obterSobrenome = nome => {
    const ultimoEspaco = nome.lastIndexOf(" ")
    return nome.substr(ultimoEspaco + 1).toLowerCase()

}

const contarVogais = nome => {
    const vogais = "AEIOU"
    let num = 0

    for(const letra of nome){
        const letraMaiuscula = letra.toUpperCase()
        if (letraMaiuscula == "A" || letraMaiuscula == "E" || letraMaiuscula == "I" || letraMaiuscula == "O" || letraMaiuscula == "U"){
            num++
        }
    }

    return num < 10 ? "0" + num : num
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const nome = form.inAluno.value 

    if (!validarNome(nome)){
        alert("Digite o nome completo")
        form.inAluno.focus()
        return
    }

    const sobrenome = obterSobrenome(nome)
    const numVogais = contarVogais(nome)
    const senhaFinal = sobrenome + numVogais


    resposta.innerText = `Senha Inicial: ${senhaFinal}`
})

