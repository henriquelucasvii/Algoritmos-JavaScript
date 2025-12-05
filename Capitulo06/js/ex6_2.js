const form = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []    // vetor do escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1    // num aleatorio entre 1 e 100
const CHANCES = 6   // constante com o número máximo de chances

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(form.inNumero.value)  // obtem número digitado
    
    if (numero == sorteado){    // se acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        form.buttonSubmit.disable = true    // troca status dos botões
        form.buttonNovo.className = "exibe"
    } else {
        if (erros.includes(numero)){    // se número existe no vetor erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero)  // adiciona número ao vetor
            const numErros = erros.length   // obtém tamanho do vetor
            const numChances = CHANCES - numErros     // calcula numero de chances
            
            // exibe nº de erros, conteúdo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0){
                alert("Suas chances acabaram...")
                form.buttonSubmit.disable = true
                form.buttonNovo.className = "exibe"
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
            } else {
                // usar operador ternário para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    form.inNumero.value = ""    // limpa campo de entrada
    form.inNumero.focus()   // posiciona cursor neste campo
})

form.buttonNovo.addEventListener("click", () => {
    location.reload()   // recarrega a pagina
})