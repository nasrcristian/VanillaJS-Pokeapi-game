// ==================== FUNCIÓN MATH RANDOM ====================

function obtenerEnteroAleatorio (min, max){
// Esta función genera un número aleatorio que se encuentre entre los minimos y máximos establecidos    
    return Math.floor(Math.random() * (max - min) + min)
}


// ======================================== OBJETO POKEMON GAME ======================================== 
function PokemonGame(){


// ==================== CONSTRUCTORES DE OBJETOS ====================

class PokemonConstructor {
    constructor (nombre, tipo, rareza){
        this.nombre = nombre
        this.tipo = tipo 
        this.rareza = rareza
    }
    capturado = false
    probabilidadCaptura(){
        switch (this.rareza){
            case 1: 
                obtenerEnteroAleatorio(1, 20)
                break;
            case 2:
                obtenerEnteroAleatorio(15, 35)
                break;
            case 3: 
                obtenerEnteroAleatorio(30, 50)
                break;
            case 4: 
                obtenerEnteroAleatorio(45, 65)
                break;
            case 5: 
                obtenerEnteroAleatorio(60, 80)
                break;
            default: 
                alert(`ERROR! La rareza debe ser un número entre 1 y 5`)
                break;
        }
    }
}

class PokeballConstructor {
    constructor (nombre, tipo, cantidad, descripcion, eficaciaObjeto){
        this.nombre = nombre
        this.tipo = tipo
        this.cantidad = cantidad
        this.descripcion = descripcion
        this.eficaciaObjeto = eficaciaObjeto
    }
    eficaciaCaptura(){
        switch (this.dificultad){
            case 1: 
                return obtenerEnteroAleatorio(1, 25)
            case 2:
                return obtenerEnteroAleatorio(19, 65)
            case 3: 
                return obtenerEnteroAleatorio(44, 82)
            case 100:
                return 100;
            default: 
                alert(`ERROR! El argumento ingresado no es una opción valida.`)
                break;
            }
    }
}


// ==================== LISTA DE POKEMONES ====================

const pokemonesDisponibles = [
    Quagsire = new PokemonConstructor ("Quagsire", "Agua" + " - " + "Tierra", 2),
    Charmander = new PokemonConstructor("Charmander", "Fuego", 1),
    Mew = new PokemonConstructor("Mew", "Psiquico", 5),
    Tyranitar = new PokemonConstructor("Tyranitar", "Tierra" + " - " + "Sieniestro", 4),
    Magneton = new PokemonConstructor("Magneton", "Electrico" + " - " + "Acero", 3)
]


let pokemonSalvaje = []
let POKEDEX = []


// ==================== LISTA DE POKEBOLAS ====================

const pokebolasDisponibles = [
    Pokeball = new PokeballConstructor ("Pokeball", "Normal", 3, "La más simple de todas, buena para pokemones iniciales", 1),
    Superball = new PokeballConstructor ("Superball", "Especial", 2, "Version mejorada de la pokebola, mayor indice de eficacia pero más costosa", 2),
    Ultraball = new PokeballConstructor ("Ultraball", "Épica", 1, "Posee un gran indice de captura que viene acompañado de su alto precio, necesario para pokemones de alta rareza.", 3),
    Masterball = new PokeballConstructor ("Masterball", "Única", 1, "La forma perfeccionada de la pokebola, atrapa cualquier cosa sin importar su dificultad", 100)
]

// ==================== FUNCIONES ====================


this.saludoEntrenador = () => { 
    // Este algoritmo le solicita un nombre al usuario y le da una explicación de cual es el propósito del simulador.
    let nombreEntrenador = prompt("Ingrese su nombre entrenador/a")
    while (!nombreEntrenador || nombreEntrenador === " "){
        nombreEntrenador = prompt("Por favor ingrese un nombre!")
    }
    alert(`Bienvenido! joven ${nombreEntrenador}, el camino para llegar a ser un maestro pokemón se logra a partir de mucha practica y esfuerzo. Nosotros en este simulador queremos que entrenes tu capacidad de captura para que nunca más se escape un pokemón de tus manos. Mucha suerte y que te diviertas!`)
}

this.IniciarJuego = () => {
    // La función que invoca a las demás para que el simulador pueda funcionar correctamente.
    this.saludoEntrenador()
    while (!this.chequearEstadoJuego()){
        this.prepararInstanciaDeCaptura()
        this.utilizarPokebolaTipo()
        this.chequearEstadoJuego()
    }
}


this.utilizarPokebolaTipo = ()=> {
    // Este algoritmo permite al usuario elegir entre las pokebolas disponibles para capturar al pokemon.
    let entrada = Number(prompt(`Ingrese que tipo de pokebola quiere utilizar \n 1) Pokeball -- cantidad: ${pokebolasDisponibles[0].cantidad} \n 2) Superball -- cantidad: ${pokebolasDisponibles[1].cantidad} \n 3) Ultraball -- cantidad: ${pokebolasDisponibles[2].cantidad} \n 4) Masterball -- cantidad: ${pokebolasDisponibles[3].cantidad}`))
    switch (entrada){
        case 1:
            chequearCantidadYCapturar(pokebolasDisponibles[0].cantidad, entrada)
        break;
        case 2: 
        chequearCantidadYCapturar(pokebolasDisponibles[1].cantidad, entrada)
        break;
        case 3:
            chequearCantidadYCapturar(pokebolasDisponibles[2].cantidad, entrada)
        break;
        case 4:
            chequearCantidadYCapturar(pokebolasDisponibles[3].cantidad, entrada)
        default:
        while(!entrada){
            entrada = Number(prompt(`Esa no es una opción valida!! Ingrese que tipo de pokebola quiere utilizar \n 1) Pokeball \n 2) Superball \n 3) Ultraball \n 4) Masterball`))
        }
    }
}

this.chequearCantidadYCapturar = (cantidad, entrada) =>{
    // Con este algoritmo se busca analizar si hay pokebolas del tipo seleccionado, en caso de que no haya más se devuelve al menu de selección. 
    if (cantidad > 0) {
        capturarPokemonSi(entrada)
        pokebolasDisponibles[entrada].cantidad--
    } else {
        alert(`Error!! No tienes más pokeball de ese tipo en tu mochila!`)
        this.utilizarPokebolaTipo()
    }
}


this.capturarPokemonSi = (entrada) => {
    // Este algoritmo calcula si el pokemon es capturado o no, en caso positivo traslada al pokemón desde la lista de pokemonSalvaje hacia POKEDEX, en caso negativo devuelve al pokemón a la lista de pokemonesDisponibles
    if (pokemonSalvaje[0].probabilidadCaptura <= pokebolasDisponibles[entrada].eficaciaCaptura ){
        trasladarPokemonA_(POKEDEX)
        return alert(`Felicidades, has capturado a ${pokemonSalvaje[0].nombre}`), console.log(`La rareza de este pokemon era de ${pokemonSalvaje[0].rareza} y La eficacia de la pokebola era de ${pokebolasDisponibles[entrada].eficaciaCaptura}`)
    } else {
        trasladarPokemonA_(pokemonesDisponibles)
        return alert(`Mala suerte, ${pokemonSalvaje[0].nombre} escapó`), console.log(`La dificultad de este pokemon era de ${pokemonSalvaje[0].rareza} y La eficacia de la pokebola era de ${pokebolasDisponibles[entrada].eficaciaCaptura}`)
    }
}
this.chequearEstadoJuego = () => {
    if((pokemonesDisponibles.length = 0)){
        alert(`¡Felicidades! Has capturado a todos los pokemon de este simulador. Esta es la pokedex que completaste: ${POKEDEX.nombre.join("\n")}`)
        return true
    } else if ((pokebolasDisponibles[0].cantidad) = 0 && (pokebolasDisponibles[1].cantidad = 0) && (pokebolasDisponibles[2].cantidad = 0) &&  (pokebolasDisponibles[3].cantidad = 0)){
        alert(`No has podido completar el simulador :(. Estos son los pokemon que capturaste: ${POKEDEX.nombre.join("\n")}`)
        return true
    }
}

this.prepararInstanciaDeCaptura = () => {
    // Se prepara una nueva instancia de juego al generar un pokemon salvaje y alertar de su presencia.
    this.generarPokemonSalvaje()
    this.eliminarPokemonDeLista_(pokemonesDisponibles, pokemonSalvaje)
    alert(`Un ${pokemonSalvaje[0].nombre} salvaje ha aparecido!!`)
}

this.generarPokemonSalvaje = () => {
    // Con esta función se selecciona de forma aleatoria el index de uno de los pokemones disponibles que luego es agregado al array de pokemonSalvaje.
    pokemonSalvaje.push(pokemonesDisponibles[obtenerEnteroAleatorio(0, pokemonesDisponibles.length)]) 
}


this.trasladarPokemonA_ =(arrayNuevoPokemon) =>{
    // Se mueve al pokemón que se encontraba en la lista pokemonSalvaje hacia el **arrayNuevoPokemon** que deberia recibir como valor la lista "POKEDEX" o "pokemonesDisponibles"
    arrayNuevoPokemon.push(pokemonSalvaje[0])
    eliminarPokemonDeInstancia(pokemonSalvaje, arrayNuevoPokemon)
}

this.eliminarPokemonDeLista_ = (arrayPrevioPokemon, arrayActualPokemon) =>{
    // Se elimina de la lista de **arrayPrevioPokemon** al elemento que fue pusheado al array de **arrayActualPokemon** para que no pueda volver a ser elegido con la otra función. Para que este programa cumpla con su proposito se debe recibir como argumento una de las "Listas de pokemones".
    arrayPrevioPokemon.splice((arrayPrevioPokemon.indexOf(arrayActualPokemon[0])), 1)
}
}


function simulador(){
let SimuladorInicio = new PokemonGame();
SimuladorInicio.IniciarJuego()
}

























































