const form = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const divTitulo = document.querySelector("#divTitulo")
const resp = document.querySelector("h3")

const trocarClube = () => {
    let clube   // variavel que vai receber o nome do clube

    if (form.radioButtonBrasil.checked){
        clube = "Brasil"
    } else if (form.radioButtonPelotas.checked){
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }

    // define as classes de divTitulo: row e cores do clube
    divTitulo.className = `row cores-${clube}`

    // modifica as classes de divTitulo: row e cores do clube
    imClube.src = `/Capitulo09/img/${clube.toLowerCase()}.png`
    imClube.className = "img-fluid"         // muda o estilo para exibir a imagem
    imClube.alt = `Simbolo do ${clube}`     // modifica atributo alt

    localStorage.setItem("clube", clube)    // salva no navegador a escolha do cliente
}

const contadorVisitas = () => {
    let contador = 0

    if(localStorage.getItem("visitas")) {
        contador = Number(localStorage.getItem("visitas"))
    }

    contador++

    if (contador == 1){
        resp.innerText = `Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site`
    } else {
        resp.innerText = `Que bom que você voltou! Esta é a sua visita de número ${contador} ao nosso site`
    }

    localStorage.setItem("visitas", contador)
}

// associa ao evento change de cada botão do form a função trocarClube
form.radioButtonBrasil.addEventListener("change", trocarClube)
form.radioButtonPelotas.addEventListener("change", trocarClube)
form.radioButtonFarroupilha.addEventListener("change", trocarClube)

const verificarClube = () => {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube")

        if (clube == "Brasil"){     // conforme o clube, marca checked
            form.radioButtonBrasil.checked = true
        } else if (clube == "Pelotas"){
            form.radioButtonPelotas.checked = true
        } else {
            form.radioButtonPelotas.checked = true
        }
        trocarClube()   // chama function que troca imagem e cores
    }
    contadorVisitas()
}


// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube())