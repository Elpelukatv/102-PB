// Definir funciones
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
    switch (jugada) {
        case 1:
            return "piedra";
        case 2:
            return "papel";
        case 3:
            return "tijera";
        default:
            return "elige un numero del 1-3";
    }
}

function jugarRonda() {
    const compu = random(1, 3);
    const jugador = pedirJugada();

    alert("La computadora elige: " + eleccion(compu));
    alert("Tú eliges: " + eleccion(jugador));

    if (compu === jugador) {
        alert("Empate");
        return "empate";
    } else if ((jugador === 1 && compu === 3) || 
               (jugador === 2 && compu === 1) || 
               (jugador === 3 && compu === 2)) {
        alert("Ganaste!");
        return "triunfo";
    } else {
        alert("Perdiste");
        return "perdida";
    }
}

function pedirJugada() {
    let jugada;
    do {
        jugada = parseInt(prompt("Elige: 1 para piedra, 2 para papel, o 3 para tijera"));
    } while (![1, 2, 3].includes(jugada));
    return jugada;
}

// Inicializar variables
let triunfos = 0;
let perdidas = 0;

// Jugar hasta que alguien llegue a tres triunfos
while (triunfos < 3 && perdidas < 3) {
    const resultado = jugarRonda();
    if (resultado === "triunfo") {
        triunfos++;
    } else if (resultado === "perdida") {
        perdidas++;
    }
}

// Mostrar resultado final
alert("Ganaste " + triunfos + " veces y perdiste " + perdidas + " veces.");