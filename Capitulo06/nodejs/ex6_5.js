const prompt = require("prompt-sync")()

console.log("Informe os alunos. Após, digite 'Fim' no nome para sair")
const alunos = []

do {
    const nome = prompt("Nome: ")
    
    if(nome == 'Fim'){
        break
    }

    const nota = Number(prompt("Nota: "))
    alunos.push({nome, nota})   // adiciona ao vetor de objetos
    console.log("Ok! Aluno(a) cadastrado")

} while (true)

console.log("-".repeat(40))

const maior = alunos.reduce((a,b) => Math.max(a, b.nota), 0)    // obtém a maior nota
console.log(`Maior Nota: ${maior}`)

if (maior >= 7){
    const destaques = alunos.filter(aluno => aluno.nota == maior)   // filtro
    for (const destaque of destaques){
        console.log(`- ${destaque.nome}`)
    }
} else {
    console.log("Não há alunos em destaque na turma!")
}