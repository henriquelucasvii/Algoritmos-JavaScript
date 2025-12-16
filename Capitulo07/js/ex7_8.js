const form = document.querySelector("form")
const resp = document.querySelector("h3")

const TAXA_MULTA = 2 / 100  // multa por atraso
const TAXA_JUROS = 0.33 / 100   // juros por dia de atraso

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const dataVenc = form.inDataVenc.value
    const valor = Number(form.inValor.value)
    const hoje = new Date()     // cria variaveis (instancia objetos)
    const vencimento = new Date()   // do tipo Date()

    const partes = dataVenc.split("-")      // data vem no formato aaaa-mm-dd
    vencimento.setDate(Number(partes[2]))
    vencimento.setMonth(Number(partes[1]) - 1)
    vencimento.setFullYear(Number(partes[0]))

    const atraso = hoje - vencimento    // calcula a diferençã dos dias entre datas
    let multa = 0, juros = 0

    if (atraso > 0){    // se conta estiver em atraso
        // converte ms do atraso em dias 
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA
        juros = valor * TAXA_JUROS * dias
    }

    const total = valor + multa + juros     // calcula o total

    form.outMulta.value = multa.toFixed(2)
    form.outJuros.value = juros.toFixed(2)
    form.outTotal.value = total.toFixed(2)
})