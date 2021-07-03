let segundos = 0
let milessegundos = 0
let intervalo

function Contagem() {
    milessegundos++
    document.getElementsByTagName('h2')[0].innerHTML = `${segundos}.${milessegundos}`

    if (milessegundos == 99) {
        milessegundos = 0
        segundos++
    }
}

function Iniciar() {
    clearInterval(intervalo)
    intervalo = setInterval(Contagem,10)
}

function Parar() {
    clearInterval(intervalo)
}

function Zerar() {
    clearInterval(intervalo)
    segundos = 0
    milessegundos = 0
    document.getElementsByTagName('h2')[0].innerHTML = `${segundos}.${milessegundos}`
}

