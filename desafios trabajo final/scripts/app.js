const Pokemon = {
    nombre: "Quagsire",
    tipo: "Agua" + " - " + "Tierra",
    capturado: false,
    dificultad: obtenerEnteroAleatorio(4, 15)
}

const Pokeball = {
    nombre: "Pokeball",
    tipo: "Normal",
    cantidadPokeball: 3,
    descripcion: `La más simple de todas, buena para pokemones iniciales`,
    eficaciaCaptura: obtenerEnteroAleatorio(1, 15)
}

const Superball = {
    nombre: "Superball",
    tipo: "Especial",
    cantidadSuperball: 2,
    descripcion: `Versión mejorada de la pokebola, mayor indice de eficacia pero más costosa`,
    eficaciaCaptura: obtenerEnteroAleatorio(9, 25)
}

const Masterball = {
    nombre: "Masterball",
    tipo: "Única",
    cantidadMasterball: 1,
    descripcion: `La forma perfeccionada de la pokebola, atrapa cualquier cosa sin importar su dificultad`,
    eficaciaCaptura: 100
}

let pokebolasTotales = Superball.cantidadSuperball + Pokeball.cantidadPokeball + Masterball.cantidadMasterball

function obtenerEnteroAleatorio (min, max){
// Esta función genera un número aleatorio que se encuentre entre los minimos y máximos establecidos (incluidos)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function saludoEntrenador() {
    // Este algoritmo le solicita un nombre al usuario y le da una explicación de cual es el propósito del simulador.
    let nombreEntrenador = prompt("Ingrese su nombre entrenador/a")
    alert(`Bienvenido! joven ${nombreEntrenador}, el camino para llegar a ser un maestro pokemón se logra a partir de mucha practica y esfuerzo. Nosotros en este simulador queremos que entrenes tu capacidad de captura para que nunca más se escape un pokemón de tus manos. Mucha suerte y que te diviertas!`)
}

function capturarPokemonSi(pokebolaTipo){
    // Este algoritmo calcula si el pokemon es capturado o no, siendo positivo en el caso de que la eficacia de captura supere la dificultad del pokemon.
    if (Pokemon.dificultad <= pokebolaTipo.eficaciaCaptura){
        return alert(`Felicidades, has capturado a ${Pokemon.nombre}`), console.log(`La dificultad de este pokemon era de ${Pokemon.dificultad} y La eficacia de la pokebola era de ${pokebolaTipo.eficaciaCaptura}`)
    } else {
        return alert(`Mala suerte, ${Pokemon.nombre} escapó`), console.log(`La dificultad de este pokemon era de ${Pokemon.dificultad} y La eficacia de la pokebola era de ${pokebolaTipo.eficaciaCaptura}`)
    }
}

function chequearCantidadYCapturar(cantidad, pokebolaTipo){
    // Con este algoritmo se busca 
    if (cantidad > 0) {
        capturarPokemonSi(pokebolaTipo)
    } else {
        alert(`Error!! No tienes más pokeball de ese tipo en tu mochila!`)
        pokebolasTotales++
    }
}

function utilizarPokebolaTipo() {
    // Este algoritmo permite al usuario elegir entre las pokebolas disponibles para capturar al pokemon.
    alert(`Un ${Pokemon.nombre} salvaje ha aparecido!!`)
    let opcionPokebola = Number(prompt(`Ingrese que tipo de pokebola quiere utilizar \n 1) Pokeball -- cantidad: ${Pokeball.cantidadPokeball} \n 2) Superball -- cantidad: ${Superball.cantidadSuperball} \n 3) Masterball -- cantidad: ${Masterball.cantidadMasterball}`))
    switch (opcionPokebola){
        case 1:
            chequearCantidadYCapturar(Pokeball.cantidadPokeball, Pokeball)
            Pokeball.cantidadPokeball--
        break;
        case 2: 
        chequearCantidadYCapturar(Superball.cantidadSuperball, Superball)
            Superball.cantidadSuperball--
        break;
        case 3:
            chequearCantidadYCapturar(Masterball.cantidadMasterball, Masterball)
            Masterball.cantidadMasterball--
        break;
        default:
            opcionPokebola = Number(prompt(`Esa no es una opción valida!! Ingrese que tipo de pokebola quiere utilizar \n 1) Pokeball \n 2) Superball \n 3) Masterball`))
    }
}

for (pokebolasTotales; pokebolasTotales>0; pokebolasTotales--){
    utilizarPokebolaTipo()
}
