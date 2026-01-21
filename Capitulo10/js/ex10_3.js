const form = document.querySelector("form")
const tabelaFilmes = document.querySelector("table")

// insere filmes na tabela
const inserirLinha = (titulo, genero) => {
    const linha = tabelaFilmes.insertRow()

    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo     // joga conteudo em cada célula
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"
}

// grava dados em localStorage
const gravarFilme = (titulo, genero) => {
    if (localStorage.getItem("filmeTitulo")){
        const filmeTitulo= localStorage.getItem("filmeTitulo") + ";" + titulo
        const filmeGenero= localStorage.getItem("filmeGenero") + ";" + genero
        localStorage.setItem("filmeTitulo", filmeTitulo)
        localStorage.setItem("filmeGenero", filmeGenero)
    } else {
        localStorage.setItem("filmeTitulo", titulo)
        localStorage.setItem("filmeGenero", genero)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const titulo = form.inTitulo.value
    const genero = form.inGenero.value

    inserirLinha(titulo, genero)
    gravarFilme(titulo, genero)
})

tabelaFilmes.addEventListener("click", (e) => {
    // se a classe do elemento alvo clicado contém exclui
    if (e.target.classList.contains("exclui")){
        // acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText

        if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)){
            // remove a linha da tabela, correspondente ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove()

            // exclui filmes salvos em localStorage
            localStorage.removeItem("filmeTitulo")
            localStorage.removeItem("filmeGenero")

            // salva novamente (se existir), acessando o conteúdo da tabela
            for(let i = 1; i < tabelaFilmes.rows.length; i++){
                // obtém o conteúdo da tabela (coluna 0: titulo; coluna 1: genero)
                const auxTitulo = tabelaFilmes.rows[i].cells[0].innerText
                const auxGenero = tabelaFilmes.rows[i].cells[1].innerText
                gravarFilme(auxTitulo, auxGenero)
            }
        }
    }
})

window.addEventListener("load", () => {
    if (localStorage.getItem("filmeTitulo")){
        // obtém conteúdo e converte em elementos de vetor
        const titulos = localStorage.getItem("filmeTitulo").split(";")
        const generos = localStorage.getItem("filmeGenero").split(";")

        // percorre os elementos do vetor e os insere na tabela
        for(let i = 0; i < titulos.length; i++){
            inserirLinha(titulos[i], generos[i])
        }
    }
})