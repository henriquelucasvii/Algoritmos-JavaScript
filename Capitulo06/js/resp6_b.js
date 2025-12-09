const form = document.querySelector("form")
const resposta1 = document.querySelector("#output1")
const resposta2 = document.querySelector("#output2")

const numeros = []  // declara vetor

form.addEventListener("submit", (e) => {
    e.preventDefault()                           
    const num = Number(form.inNumero.value)   

    if (numeros.includes(num)) {        // verifica se num já está no vetor 
        alert(`Insira outro Número! Você já adicionou o ${num}`)
  
        form.reset()
        form.inNumero.focus()
        return
    }

    numeros.push(num) 

    resposta1.innerText = "Números: " + numeros.join(", ")

    // limpa mensagem (se já clicou em verificar...)
    resposta2.innerText = ""

    // limpa campo e posiciona cursor em inNum
    form.inNumero.value = ""
    form.inNumero.focus()
})

form.buttonVerificar.addEventListener("click", () => {
    if (!numeros.length){
        alert("Insira um número")
        inNumero.focus()
        return
    }

    let ordem = true

    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] > numeros[i + 1]){
            ordem = false
            break
        }
    }

    if (ordem){
        resposta2.innerText = `Números estão em ordem crescentes`
    } else {
        resposta2.innerText = `Números não estão em ordem crescentes`
    }

})