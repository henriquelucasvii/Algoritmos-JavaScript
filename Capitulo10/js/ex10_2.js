const form = document.querySelector("form")
const divMoedas = document.querySelector("#divMoedas")

// gera números aleatorios, entre 1 e 5, para cada moedas
function geraNumeros(){
    return {
        NUM1_00: Math.ceil(Math.random() * 5),
        NUM0_50: Math.ceil(Math.random() * 5),
        NUM0_25: Math.ceil(Math.random() * 5),
        NUM0_10: Math.ceil(Math.random() * 5)
    }
}
    

// define texto alternativo das imagens (acessibilidade)
function textoAlternativoMoedas(){
    return {
        ALT1_00: "Moedas de um real",
        ALT0_50: "Moedas de Cinquenta Centavos",
        ALT0_25: "Moedas de Vinte e Cinco Centavos",
        ALT0_10: "Moedas de Dez Centavos"
    }
}

function criarMoedas(num, moeda, textoAlt, classe){
    // cria laço de repetição para inserir várias imagens de moedas na página
    for (let i = 1; i <= num; i++){
        const novaMoeda = document.createElement("img")
        novaMoeda.src = "img/" + moeda      // atributo src
        novaMoeda.alt = textoAlt        // texto alternativo
        novaMoeda.className = classe        // classe da moeda (css)
        divMoedas.appendChild(novaMoeda)    // hierarquia DOM
    }
    const br = document.createElement("br")     // cria uma quebra de linha
    divMoedas.appendChild(br)
}

window.addEventListener("load", () => {
    const numeros = geraNumeros()
    const textos = textoAlternativoMoedas()

    criarMoedas(numeros.NUM1_00, "1_00.jpg", textos.ALT1_00, "moeda1-00")
    criarMoedas(numeros.NUM0_50, "0_50.jpg", textos.ALT0_50, "moeda0-50")
    criarMoedas(numeros.NUM0_25, "0_25.jpg", textos.ALT0_25, "moeda0-25")
    criarMoedas(numeros.NUM0_10, "0_10.jpg", textos.ALT0_10, "moeda0-10")
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const soma = Number(form.inSoma.value)
    const moedas = divMoedas.querySelectorAll("img")
    let totalMoedas = 0

    // percorre as tags img (em moedas) e verifica propriedade className
    for (const moeda of moedas){
        if(moeda.className == "moeda1-00"){
            totalMoedas += 1
        } else if (moeda.className == "moeda0-50"){
            totalMoedas += 0.5
        } else if (moeda.className == "moeda0-25"){
            totalMoedas += 0.25
        } else {
            totalMoedas += 0.1
        }
    }

    const div = document.createElement("div")
    const h3 = document.createElement("h3")


    let mensagem
    // verifica se o valor informa é igual ao total de Moedas exibido
    if (soma == totalMoedas.toFixed(2)){
        div.className = "alert alert-success"   // define a classe da div
        mensagem = `Parabéns!! Você acertou`
    } else {
        div.className = "alert alert-danger"
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`
    }

    const texto = document.createTextNode(mensagem)     // cria elemento de texto
    h3.appendChild(texto)       // texto é filho de h3
    div.appendChild(h3)         // h3 é filho da div criada na function
    divMoedas.appendChild(div)  // e a div com alerta é filho de divMoedas

    form.inSoma.disabled = true  // desabilita botão (resposta já foi exibido)
})

form.addEventListener("reset", () => {
    window.location.reload()
})