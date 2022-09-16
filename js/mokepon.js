//Variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//
function iniciarJuego() {
    //Oculto la segunda parte del Juego (Seleccionar Ataque)
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    let sectionMensajes = document.getElementById("mensajes")
    let sectionResultado = document.getElementById("resultado")
    let sectionReiniciar = document.getElementById("reiniciar")

    sectionSeleccionarAtaque.style.display = 'none'
    sectionMensajes.style.display = 'none'
    sectionResultado.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    //Se define el botón de Selección de Mascota 
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    //Se definen los botones de ataque de la mascota
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    //Reiniciar el juego
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
// Esta función selecciona la mascota y la escribe en el span del HTML además selecciona la mascota del enemigo
function seleccionarMascotaJugador() {
    //muestro la sección siguiente "Sellecionar Ataque"
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'block'

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = 'none'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

//Esta función selecciona la mascota enemigo con un número aleatorio de 1 a 3
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

//Estas 3 funciones definen los ataques del jugador y el Enemigo
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

//Asigna un número aleatorio a las variable ataqueEnemigo (asigna FUEGO, AGUA o TIERRA)
function ataqueAleatorioEnemigo() {
    //Muestro la siguiente sección Mensajes y Resultado
    let sectionMensajes = document.getElementById("mensajes")
    sectionMensajes.style.display = 'block'
    let sectionResultado = document.getElementById("resultado")
    sectionResultado.style.display = 'block'
    
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()

}

//función cíclica para desarrollar el combate
function combate(){
        let spanVidasJugador = document.getElementById('vidas-jugador')
        let spanVidasEnemigo = document.getElementById('vidas-enemigo')

        if(ataqueJugador == ataqueEnemigo){
        resultadoCombate = "EMPATE " + "😒"
        crearMensaje(resultadoCombate)
        }
        else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
            resultadoCombate = "GANASTE " + "🤘"
            crearMensaje(resultadoCombate)
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }
        else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
            resultadoCombate = "GANASTE " + "🤘"
            crearMensaje(resultadoCombate)
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }
        else{
            resultadoCombate = "PERDISTE " + "💩"
            crearMensaje(resultadoCombate)  
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
        //Revisar las vidas
        revisarVidas()
    }

//Función que revisa la cantidad de vidas de las mascotas

function revisarVidas(){
    if(vidasJugador == 0){
    crearMensajeFinal('LO SIENTO... PERDISTE ' + '💀')
    }
    else if(vidasEnemigo == 0){
    crearMensajeFinal('FELICITACIONES GANASTE ' + '👑')
    }
}

//Función para escribir el mensaje de GANASTE o PERDITE el Juego
function crearMensajeFinal(resultadoFinal) {
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensaje.appendChild(parrafo)

    let sectionResultado = document.getElementById('resultado')
    let parrafo2 = document.createElement('p')
    parrafo2.innerHTML = resultadoFinal
    sectionResultado.appendChild(parrafo2)

    //deshabilitar botones
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    //mostrar botón Reiniciar
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}


//función que retorna un número aleatorio entero entre los rangos min y max 
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Función para crear elementos en HTML (mensajes)
function crearMensaje(resultadoCombate) {
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo
    sectionMensaje.appendChild(parrafo)

    let sectionResultado = document.getElementById('resultado')
    let parrafo2 = document.createElement('p')
    parrafo2.innerHTML = '🏆 Resultado Combate : ' + resultadoCombate
    sectionResultado.appendChild(parrafo2)

}


//permite cargar todo el HTML antes de cargar la función iniciarJuego
window.addEventListener('load', iniciarJuego)
