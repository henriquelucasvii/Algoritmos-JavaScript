const form = document.querySelector("form")
const resp = document.querySelector("pre")

// function que limpa produtos
const listarProdutos = () => {
    if (!localStorage.getItem("produtos")) {
        resp.innerText = ""
        return
    }

    const produtos = localStorage.getItem("produtos").split(";")

    resp.innerText = `Produtos Adicionados\n-----------------------\n${produtos.join("\n")}`
}

// function limpar lista
const limparLista = () => {
    if(!localStorage.getItem("produto")){
        alert("A lista está vazia, não é possível limpá-la")
        return
    }

    localStorage.removeItem("produtos")
    listarProdutos()
}

const verificaProdutos = (produto) => {
    if (localStorage.getItem("produtos")){
        const produtos = localStorage.getItem("produtos").split(";")
        
        produtos.push(produto)

        // ordena
        produtos.sort()

        localStorage.setItem("produtos", produtos.join(";"))
    } else {
        // senão (é a primeira inclusão), salva apenas o produto
        localStorage.setItem("produtos", produto)
    }
}

const limpaForms = () => {
    form.reset()
    form.inProduto.focus()
}

const verificaProduto = () => {
    if(!form.inProduto.value){
        alert("Digite um produto para adicionar")
        return
    }
}
// evento do form
form.addEventListener("submit", (e) => {
    e.preventDefault()

    verificaProduto()
    const produto = form.inProduto.value
    verificaProdutos(produto)
    limpaForms()
    listarProdutos()
})

window.addEventListener("load", listarProdutos)
form.buttonLimpar.addEventListener("click", limparLista)