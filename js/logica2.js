function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion (jugada) {
let resultado = ""
    if (jugada == 1) {
    resultado = "piedra"
    } else if (jugada == 2) {
    resultado ="papel"
    } else if (jugada == 3) {
    resultado ="tijera"
    } else {
    resultado ="elige un numero del 1-3"
    }
    return resultado
}
let jugador = 0
let compu = 0
let triunfos =0
let perdidas = 0

while ( triunfos < 3 && perdidas < 3) {
    compu = random(1, 3)
    jugador = prompt("elige: 1 PARA piedra, 2 para papel, 3 tijera")

    alert("pc elije: " + eleccion(compu))
    alert("tu elije: " + eleccion(jugador))
    
    if (compu == jugador) {
        alert("empate")
    } else if (jugador == 1 && compu == 3) {
        alert("GANASTE")
    triunfos = triunfos + 1
    } else if (jugador == 2 && compu == 1) {
        alert("GANASTE")
    triunfos = triunfos + 1
    } else if (jugador == 3 && compu == 2) {
        alert("GANASTE")
    triunfos = triunfos + 1 
    } else {
        alert("perdiste")
    perdidas = perdidas + 1
    }
} 
alert ( "ganaste " + triunfos + " veces /  perdiste " + perdidas + " veces." )