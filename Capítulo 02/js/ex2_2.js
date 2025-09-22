// Cria referência ao form e aos elemtnos h3 e h4 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// Cria um "ouvinte" do evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value       // Obtém contéudo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60)  // Arredonda para baixo resultado
    const minutos = duracao % 60            // Obtém o resto da divisão

    resp1.innerText = titulo                // Exibe as respostas
    resp2.innerText = `${horas} horas(s) e ${minutos} minuto(s)`

    e.preventDefault()
})