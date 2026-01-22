const form = document.querySelector("form")
const divIdade = document.getElementById("divIdade")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const idade = form.inIdade.value.toString()

    for(const num of idade){
        const img = document.createElement("img")
        img.src = `/Capitulo10/img/${num}.jpg`
        divIdade.appendChild(img)
    }
})

form.addEventListener("reset", () => {
    location.reload()
})