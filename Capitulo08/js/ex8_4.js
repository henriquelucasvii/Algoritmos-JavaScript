const form = document.querySelector("form")
const resposta = document.querySelector("pre")

const itens = []

form.rbPizza.addEventListener("click", () => {  // quando radio button é clicado
    form.inBebida.className = "oculta"  // oculta select das bebidas
    form.inPizza.className = "exibe"    // exibe select das pizzas
})

form.rbBebida.addEventListener("click", () => {     // quando rabio button é clicado
    form.inPizza.className = "oculta"   // oculta select das bebidas
    form.inBebida.className = "exibe"   // exibe select das pizzas
})

form.inDetalhes.addEventListener("focus", () => {   // quando o campo recebe o foco
    if (form.rbPizza.checked){  // se radioButton rbPizza estiver marcado
        const pizza = form.inPizza.value

        // uso do operador ternário, para indicar o numero de sabores
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3: 4

        // atributo placeholder exibe uma dica de preenchimento do campo
        form.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

form.inDetalhes.addEventListener("blur", () => {    // quando o campo perde o foco
    form.inDetalhes.placeholder = ""    // limpa a dica de preenchimento
})

form.addEventListener("submit", (e) => {
    e.preventDefault()  // evita envio do form
    let produto

    if (form.rbPizza.checked){
        const num = form.inPizza.selectedIndex  // obtem nº do item selecionado
        produto = form.inPizza.options[num].text    // texto do item selecionado
    } else {
        const num = form.inBebida.selectedIndex
        produto = form.inBebida.options[num].text
    }

    const detalhes = form.inDetalhes.value   // conteudo do inDetalhes
    itens.push(`${produto} (${detalhes})`)         // adiciona ao vetor
    resposta.innerText = itens.join("\n")           // exibe os itens do pedido

    form.reset()    // limpa o form
    form.rbPizza.dispatchEvent(new Event("click"))  // dispara click em rbPizza  
})