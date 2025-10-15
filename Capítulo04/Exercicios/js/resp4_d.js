const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    
    let ladoA = Number(document.querySelector("#inLadoA").value)
    let ladoB = Number(document.querySelector("#inLadoB").value)
    let ladoC = Number(document.querySelector("#inLadoC").value)
    
    
    if ((ladoA + ladoB) > ladoC || (ladoA + ladoC) > ladoB || (ladoB + ladoC) > ladoA){
        resp1.innerText = "Pode formar um triangulo"
    } else {
        resp1.innerText = "Não pode formar um triangulo"
    }
    if (ladoA == ladoB && ladoB == ladoC){
        resp2.innerText = "Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        resp2.innerText = "Isósceles"
    } else {
        resp2.innerText = "Escaleno"
    }
    
    e.preventDefault()
})





