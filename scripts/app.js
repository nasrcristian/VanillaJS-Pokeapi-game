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
        calcularProbabilidadCaptura = () =>{
            switch (this.rareza){
                case 1: 
                    return obtenerEnteroAleatorio(1, 20)
                case 2:
                    return obtenerEnteroAleatorio(15, 35)
                case 3: 
                    return obtenerEnteroAleatorio(30, 50)
                case 4: 
                    return obtenerEnteroAleatorio(45, 65)
                case 5: 
                    return obtenerEnteroAleatorio(60, 80)
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
        calcularEficaciaCaptura(){
            switch (this.eficaciaObjeto){
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
        // Quagsire = new PokemonConstructor ("Quagsire", "Agua" + " - " + "Tierra", 2),
        // Charmander = new PokemonConstructor("Charmander", "Fuego", 1),
        // Mew = new PokemonConstructor("Mew", "Psiquico", 5),
        // Tyranitar = new PokemonConstructor("Tyranitar", "Tierra" + " - " + "Sieniestro", 4),
        Magneton = new PokemonConstructor("Magneton", "Electrico" + " - " + "Acero", 3)
    ]

    let pokemonSalvaje = pokemonesDisponibles[indexPKM()]
    let POKEDEX = []

    // ==================== LISTA DE POKEBOLAS ====================

    const pokebolasDisponibles = [
        Pokeball = new PokeballConstructor ("Pokeball", "Normal", 1, "La más simple de todas, buena para pokemones iniciales", 1),
        Superball = new PokeballConstructor ("Superball", "Especial", 0, "Version mejorada de la pokebola, mayor indice de eficacia pero más costosa", 2),
        Ultraball = new PokeballConstructor ("Ultraball", "Épica", 1, "Posee un gran indice de captura que viene acompañado de su alto precio, necesario para pokemones de alta rareza.", 3),
        Masterball = new PokeballConstructor ("Masterball", "Única", 6, "La forma perfeccionada de la pokebola, atrapa cualquier cosa sin importar su dificultad", 100)
    ]

    let pokebolasContador = pokebolasDisponibles[0].cantidad + pokebolasDisponibles[1].cantidad + pokebolasDisponibles[2].cantidad + pokebolasDisponibles[3].cantidad
    // ==================== FUNCIONES ====================



// ==================== INICIO DEL JUEGO ====================
    this.IniciarJuego = () => {
        // La función que invoca a las demás para que el simulador pueda funcionar correctamente.
        do{
            prepararInstanciaDeCaptura()
            this.utilizarPokebolaTipo()
            actualizarEstadoJuego()
            console.log(POKEDEX)
        }while (!actualizarEstadoJuego())
        this.alertarEstadoFinalJuego()
    } 
// ======================================== FUNCIONES DEL JUEGO ========================================
    
    function indexPKM() {
        // Función para calcular el indice de un pokemon al azar que se va a usar para declarar la variable de pokemonSalvaje. 
        return obtenerEnteroAleatorio(0, pokemonesDisponibles.length) 
    }

    this.saludoEntrenador = () => { 
        // Este algoritmo le solicita un nombre al usuario y le da una explicación de cual es el propósito del simulador.
        let nombreEntrenador = prompt("Ingrese su nombre entrenador/a")
        while ((!nombreEntrenador) || (nombreEntrenador === " ")){
            nombreEntrenador = prompt("Por favor ingrese un nombre!")
        }
        alert(`Bienvenido! joven ${nombreEntrenador}, el camino para llegar a ser un maestro pokemón se logra a partir de mucha practica y esfuerzo. Nosotros en este simulador queremos que entrenes tu capacidad de captura para que nunca más se escape un pokemón de tus manos. Mucha suerte y que te diviertas!`)
    }


    function prepararInstanciaDeCaptura () {
        // Se prepara una nueva instancia de juego al generar un pokemon salvaje y alertar de su presencia.
        pokemonSalvaje = pokemonesDisponibles[indexPKM()]
        alert(`Un ${pokemonSalvaje.nombre} salvaje ha aparecido!!`)
    }


    this.utilizarPokebolaTipo = ()=> {
        // Este algoritmo permite al usuario elegir entre las pokebolas disponibles para capturar al pokemon. Al utilizar una de las opciones se va a disparar una función que chequee si efectivamente es utilizable esa pokebola. Si se ingresa una opcion invalida se va a solicitar nuevamente un número hasta que cumpla con las condiciones 
        loop:
        while(true){
            let entrada = Number(prompt(`Ingrese que tipo de pokebola quiere utilizar \n 0) Pokeball -- cantidad: ${pokebolasDisponibles[0].cantidad} \n 1) Superball -- cantidad: ${pokebolasDisponibles[1].cantidad} \n 2) Ultraball -- cantidad: ${pokebolasDisponibles[2].cantidad} \n 3) Masterball -- cantidad: ${pokebolasDisponibles[3].cantidad}`))
        switch (entrada) {
            case 0:
                this.chequearCantidadYCapturar(pokebolasDisponibles[0].cantidad, entrada)
            break loop;
            case 1: 
                this.chequearCantidadYCapturar(pokebolasDisponibles[1].cantidad, entrada)
            break loop;
            case 2:
                this.chequearCantidadYCapturar(pokebolasDisponibles[2].cantidad, entrada)
            break loop;
            case 3:
                this.chequearCantidadYCapturar(pokebolasDisponibles[3].cantidad, entrada)
            break loop;
            default: alert(`Ingrese una opción valida \n 0) Pokeball -- cantidad: ${pokebolasDisponibles[0].cantidad} \n 1) Superball -- cantidad: ${pokebolasDisponibles[1].cantidad} \n 2) Ultraball -- cantidad: ${pokebolasDisponibles[2].cantidad} \n 3) Masterball -- cantidad: ${pokebolasDisponibles[3].cantidad}`);
        }
    }
    }

    this.chequearCantidadYCapturar = (cantidad, entrada) =>{
        // Con este algoritmo se busca analizar si hay pokebolas del tipo seleccionado, en caso de que no haya más se devuelve al menu de selección. 
        if (cantidad > 0) {
            this.capturarPokemonSi(entrada)
            pokebolasDisponibles[entrada].cantidad--
        } else {
            alert(`Error!! No tienes más pokeball de ese tipo en tu mochila!`)
            this.utilizarPokebolaTipo()
        }
    }

    this.capturarPokemonSi = (entrada) => {
        // Este algoritmo calcula si el pokemon es capturado o no, en caso positivo traslada al pokemón desde la lista de pokemonSalvaje hacia POKEDEX, en caso negativo devuelve al pokemón a la lista de pokemonesDisponibles
        if (pokemonSalvaje.calcularProbabilidadCaptura() <= pokebolasDisponibles[entrada].calcularEficaciaCaptura()){
            alert(`Felicidades, has capturado a ${pokemonSalvaje.nombre}`), console.log(`La rareza de este pokemon era de ${pokemonSalvaje.rareza} y La eficacia de la pokebola era de ${pokebolasDisponibles[entrada].eficaciaObjeto}`)
            this.trasladarPokemonAPokedex()
        } else {
            alert((`Mala suerte, ${pokemonSalvaje.nombre} escapó`), console.log(`La dificultad de este pokemon era de ${pokemonSalvaje.rareza} y La eficacia de la pokebola era de ${pokebolasDisponibles[entrada].eficaciaObjeto}`))
        }
    }

    this.trasladarPokemonAPokedex = ()=>{
        // Se mueve al pokemón que se encontraba en la lista pokemonSalvaje hacia la pokedex, se elimina de la lista de disponibles al mismo.
        POKEDEX.push(pokemonSalvaje)
        this.eliminarPokemonDeLista_(pokemonesDisponibles, pokemonSalvaje)
    }

    this.eliminarPokemonDeLista_ = (arrayPrevioPokemon, arrayActualPokemon) =>{
        // Se elimina de la lista de **arrayPrevioPokemon** al elemento que fue pusheado al array de **arrayActualPokemon**. 
        arrayPrevioPokemon.splice((arrayPrevioPokemon.indexOf(arrayActualPokemon)), 1)
    }

    function actualizarEstadoJuego() {
        // Actualiza la cantidad de pokebolas que hay 
        pokebolasContador = pokebolasDisponibles[0].cantidad + pokebolasDisponibles[1].cantidad + pokebolasDisponibles[2].cantidad + pokebolasDisponibles[3].cantidad
        return (pokebolasContador === 0) || (pokemonesDisponibles.length === 0)
        }

    this.alertarEstadoFinalJuego = ()=>{
        if (pokemonesDisponibles == 0){
            alert(`¡Felicidades! Has capturado a todos los pokemon de este simulador. Esta es la pokedex que completaste: ${POKEDEX.nombre}`)
        } else {
            alert(`No has podido completar el simulador :(. Estos son los pokemon que capturaste: ${POKEDEX.nombre} y estos son los que faltaron ${pokemonesDisponibles.nombre}`)
        }
    }
}

function simulador(){
let SimuladorInicio = new PokemonGame();
SimuladorInicio.IniciarJuego()
}

























































