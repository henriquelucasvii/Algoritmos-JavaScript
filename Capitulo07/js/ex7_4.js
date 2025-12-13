const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // obtem o nome informado e retira espaços em branco do inicio e final da string
    const nome = form.inNome.value.trim()

    if(!nome.includes(" ")){    // se o nome NAO (!) possuir espaço
        alert("Inform o nome completo...")
        return
    }

    const priEspaco = nome.indexOf(" ")     // posicao do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" ") // posicao do ultimo espaço
    // copia o nome e sobrenome usando os parâmetros do substr()
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    resp.innerText = `Crachá: ${cracha}`
})