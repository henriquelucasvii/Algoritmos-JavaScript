const form = document.querySelector("form")
const resposta = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = form.inSenha.value
    const erros = []    // vetor com erros

    // verifica se o tamanho da senha é invalido
    if (senha.length < 8 || senha.length > 15){
        erros.push("A senha deve possuir entre 8 e 15 caracteres")
    }

    // verifica se não possui numeros
    if (!senha.match(/[0-9]/g)){
        erros.push("A senha deve possuir no minimo um número")
    }

    // verifica se não possui letras maiusculas
    if (!senha.match(/[a-z]/g)){
        erros.push("A senha deve possuir letras minusculas")
    }

    // verifica se não possui letras maisculas ou se possuir apenas 1
    if (!senha.match(/[A-Z]/g) || (senha.match(/[A-Z]/g).length == 1)){
        erros.push("A senha deve possuir no mínimo 2 letras maiusculas")
    }

    // verifica se não possui simbolos ou "_"
    if(!senha.match(/[\W|_]/g)){
        erros.push("A senha deve possuir no mínimo um simbolo")
    }

    // se o vetor está vazui (significa que não foram encontrados erros)
    if(erros.length == 0){
        resposta.innerText = `OK! Senha Válida`
    } else {
        resposta.innerText = `Erro... A senha deve ter ${erros.join(", \n")}`
    }
})
