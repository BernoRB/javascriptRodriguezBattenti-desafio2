let inputEspejo = document.getElementById("espejo")
let outputEspejo = document.getElementById("parrafoEspejo")
let botonEnviar = document.getElementById("botonEnviar")
let parrafoMultiplicado = document.getElementById("parrafoMultiplicado")

inputEspejo.addEventListener('input', hacerEspejo)
botonEnviar.addEventListener('click', enviarFinal)

function hacerEspejo() {
    outputEspejo.innerHTML = inputEspejo.value
}

function enviarFinal() {
    for (let i = 0; i < 50; i++) {
        parrafoMultiplicado.innerHTML += ' ' + inputEspejo.value
    }
}