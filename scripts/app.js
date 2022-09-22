// ==================== FUNCIÓN MATH RANDOM ====================

function obtenerEnteroAleatorio (min, max){
// Esta función genera un número aleatorio que se encuentre entre los minimos y máximos establecidos    
    return Math.floor(Math.random() * (max - min) + min)
}



// ==================== CONSTRUCTOR DE POKEMONES ====================

    class PokemonConstructor {
        constructor (id, nombre, imagen, tipo, rareza){
            this.id = id
            this.nombre = nombre
            this.imagen = imagen
            this.tipo = tipo 
            this.rareza = rareza
        }
		capturado = false
        // calcularProbabilidadCaptura = () =>{
        //     switch (this.rareza){
        //         case 1: 
        //             return obtenerEnteroAleatorio(1, 13)
        //         case 2:
        //             return obtenerEnteroAleatorio(9, 22)
        //         case 3: 
        //             return obtenerEnteroAleatorio(18, 31)
        //         case 4: 
        //             return obtenerEnteroAleatorio(28, 40)
        //         case 5: 
        //             return obtenerEnteroAleatorio(36, 50)
        //     } 
		// }
	}
    // ==================== LISTA DE POKEMONES ====================
    const pokemonesDisponibles = [
		new PokemonConstructor(1, "Quagsire", "./img/Quagsire.webp", "Agua" + " - " + "Tierra", obtenerEnteroAleatorio(9, 22)),
        new PokemonConstructor(2, "Charmander", "./img/Charmander.png", "Fuego", obtenerEnteroAleatorio(1, 13)),
        new PokemonConstructor(3, "Magneton", "./img/Magneton.png", "Electrico - Acero", obtenerEnteroAleatorio(18, 31)),
        new PokemonConstructor(4, "Tyranitar", "./img/Tyranitar.webp", "Tierra - Siniestro", obtenerEnteroAleatorio(28, 40)),
		new PokemonConstructor(9, "Mew", "./img/Mew.png", "Psiquico", obtenerEnteroAleatorio(36, 50))
    ]
	
	const indexPKM = ()=> {
		// Función para calcular el indice de un pokemon al azar que se va a usar para declarar la variable de pokemonSalvaje. 
		return obtenerEnteroAleatorio(0, pokemonesDisponibles.length)
	}	
	
    let pokemonSalvaje = pokemonesDisponibles[indexPKM()]
	
    let POKEDEX = []


    // ==================== LISTA DE POKEBOLAS ====================
    const pokebolasDisponibles = [
        {
            id: 1,
            nombre: "Pokeball",
            imagen:"./img/pokeball.webp", 
            tipo: "Normal",
            descripcion: "La más simple de todas, buena para pokemones iniciales",
            cantidad: 5,
            eficaciaObjeto: obtenerEnteroAleatorio(1, 20),
        },
        {
            id: 2,
            nombre: "Superball",
            imagen: "./img/superball.webp",
            tipo: "Especial",
            descripcion: "Version mejorada de la pokebola, mayor indice de eficacia pero más costosa",
            cantidad: 3,
            eficaciaObjeto: obtenerEnteroAleatorio(15, 35)
        },
        {
            id: 3,
            nombre: "Ultraball",
            imagen: "./img/ultraball.webp",
            tipo: "Épica",
            descripcion: "Posee un gran indice de captura que viene acompañado de su alto precio, necesario para pokemones de alta rareza",
            cantidad: 2,
            eficaciaObjeto: obtenerEnteroAleatorio(30, 55)
        },
        {
            id: 4,
            nombre: "Masterball",
            imagen: "./img/masterball.webp",
            tipo: "Épica",
            descripcion: "La forma perfeccionada de la pokebola, nada puede escapar por más raro que sea",
            cantidad: 1,
            eficaciaObjeto: 100
        }
    ]

    let pokebolasContador = pokebolasDisponibles[0].cantidad + pokebolasDisponibles[1].cantidad + pokebolasDisponibles[2].cantidad + pokebolasDisponibles[3].cantidad




    // ======================================== FUNCIONES DEL JUEGO ========================================

		// ================================================ COSAS DE DOM ================================================
		


    // PRIMER PANTALLA -- FORMULARIO CON VALIDACIÓN DE NOMBRE
        const formularioNombre = document.getElementById("formularioEntrenador")
        const regexNombre = /^[a-zA-Z0-9_ ]{2,}[a-zA-Z]+[0-9]*$/;

        let nombreEntrenador =

        formularioNombre.addEventListener("submit", escribirBienvenidaEntrenador)
        
        function escribirBienvenidaEntrenador(e){
        // A partir del valor ingresado en el formulario escribe en el HTML un mensaje de bienvenida si el nombre cumple con el regex y sino le solicita que ingrese un nombre valido.
            const formDataValidacion = new FormData(e.target)
            nombreEntrenador = formDataValidacion.get("nombreEntrenador")

            const seccionFormularioEntrenador = document.getElementById("seccionFormularioEntrenador")
            const mensajeBienvenida = document.createElement("div");     

            let advertenciaNombre = ""
            const mensajeAdvertenciaNombre = document.getElementById("advertenciaSiInvalido");

            if (regexNombre.test(nombreEntrenador)){
                seccionFormularioEntrenador.innerHTML = ""
                mensajeBienvenida.innerHTML = 
                `<p>Bienvenido! joven <strong>${nombreEntrenador}</strong>, el camino para llegar a ser un maestro pokemón se logra a partir de mucha practica y esfuerzo. Nosotros en este simulador queremos que entrenes tu capacidad de captura para que nunca más se escape un pokemón de tus manos. Mucha suerte y que te diviertas!</p> 
                <button onClick="iniciarSeccionDeCaptura()"> Comenzar a Jugar</button>`
                seccionFormularioEntrenador.appendChild(mensajeBienvenida)
            } else {
                e.preventDefault()
                advertenciaNombre += `Nombre Invalido! <br> El nombre solo puede contener letras de la A-Z, números, espacios y guiones bajos (_)`
                mensajeAdvertenciaNombre.innerHTML = advertenciaNombre
            }
        }
    

        // EVENTO -- INICIA EL JUEGO Y APARECE EL POKEMON
        const iniciarSeccionDeCaptura = ()=> {
            const seccionFormularioEntrenador = document.getElementById("seccionFormularioEntrenador")
            seccionFormularioEntrenador.innerHTML = ""
            invocarPokemonSalvaje()
            pintarPokebolas()
            
        }

// GRAFICA EL POKEMON EN EL HTML
        function invocarPokemonSalvaje() {
            // Se prepara una nueva instancia de juego al generar un pokemon salvaje y alertar de su presencia.
            pokemonSalvaje = pokemonesDisponibles[indexPKM()]
            alert(`¡Un ${pokemonSalvaje.nombre} salvaje ha aparecido!`)
            const seccionPokemon = document.getElementById("seccionPokebola")
            let datosPokemon = document.createElement("figure")
            datosPokemon.innerHTML =`
            <img src="${pokemonSalvaje.imagen}" alt="" class="imagenPokebola">
            <figcaption>
            <p>${pokemonSalvaje.nombre}</p>
            <p>Tipo: ${pokemonSalvaje.tipo}</p>
            <p>Rareza: ${pokemonSalvaje.rareza}</p>
            </figcaption>`
            seccionPokemon.appendChild(datosPokemon)
        }



        // GRAFICA LAS POKEBOLAS EN EL HTML
		const pintarPokebolas = ()=>{
			// Escribe los datos de cada pokebola en el html
			const eventoPokebolas = document.getElementById("seccionPokebola")
            let headingPokebolas = document.createElement("h3")
            headingPokebolas.innerHTML = `¿Que deseas hacer ${nombreEntrenador}?`
            eventoPokebolas.appendChild(headingPokebolas)

			pokebolasDisponibles.forEach((pokebola, id)=> {
				let datosPokeball = document.createElement("article")
				datosPokeball.innerHTML = `
				<img src="${pokebola.imagen}" alt="" class="imagenPokebola">
				<p>${pokebola.nombre}</p>
				<p>Tipo: ${pokebola.tipo}</p>
				<p>${pokebola.descripcion}</p>
				<p>Cantidad: ${pokebola.cantidad}</p>
				<button onClick = validarCantidadYCapturar(${id})>Lanzar ${pokebola.nombre}</button>`
			eventoPokebolas.appendChild(datosPokeball)
			})
		}
        

		// ================================================ TERMINAN COSAS DE DOM ================================================



        this.validarCantidadYCapturar = (indice) => {
            // Con este algoritmo se busca analizar si hay pokebolas del tipo seleccionado, en caso de que no haya más se devuelve al menu de selección. 
            if(pokebolasDisponibles[indice].cantidad <= 0){
                let advertenciaInsuficiente = ""
                const mensajeAdvertenciaInsuficiente = document.getElementById("advertenciaSiInsuficiente");
                e.preventDefault()
                advertenciaInsuficiente += `¡No te quedan mas pokebolas de ese tipo!`
                mensajeAdvertenciaInsuficiente.innerHTML = advertenciaInsuficiente
            }else{
                capturarPokemonSi(indice)
            }
        }

        this.capturarPokemonSi = (entrada) => {
            // Este algoritmo calcula si el pokemon es capturado o no, en caso positivo traslada al pokemón desde la lista de pokemonSalvaje hacia POKEDEX, en caso negativo devuelve al pokemón a la lista de pokemonesDisponibles
            if (pokemonSalvaje.rareza <= pokebolasDisponibles[entrada].eficaciaObjeto) {
                alert(`Felicidades, has capturado a ${pokemonSalvaje.nombre}`), console.log(`La rareza de este pokemon era de ${pokemonSalvaje.rareza} y La eficacia de la pokebola era de ${pokebolasDisponibles[entrada].eficaciaObjeto}`)
                this.trasladarPokemonAPokedex()
            } else {
                alert((`Mala suerte, ${pokemonSalvaje.nombre} escapó`), console.log(`La dificultad de este pokemon era de ${pokemonSalvaje.rareza} y La eficacia de la pokebola era de ${pokebolasDisponibles[entrada].eficaciaObjeto}`))
            }
        }

        this.trasladarPokemonAPokedex = () => {
            // Se mueve al pokemón que se encontraba en la lista pokemonSalvaje hacia la pokedex, se elimina de la lista de disponibles al mismo.
            POKEDEX.push(pokemonSalvaje)
            this.eliminarPokemonDeLista_(pokemonesDisponibles, pokemonSalvaje)
        }

        this.eliminarPokemonDeLista_ = (arrayPrevioPokemon, arrayActualPokemon) => {
            // Se elimina de la lista de **arrayPrevioPokemon** al elemento que fue pusheado al array de **arrayActualPokemon**. 
            arrayPrevioPokemon.splice((arrayPrevioPokemon.indexOf(arrayActualPokemon)), 1)
        }

/*
        function actualizarEstadoJuego() {
            // Actualiza la cantidad de pokebolas que hay 
            pokebolasContador = pokebolasDisponibles[0].cantidad + pokebolasDisponibles[1].cantidad + pokebolasDisponibles[2].cantidad + pokebolasDisponibles[3].cantidad
            return (pokebolasContador === 0) || (pokemonesDisponibles.length === 0)
        }

        function alertarEstadoFinalJuego() {
            // Una vez terminado el simulador, declara las variables con los nombres de los pokemones capturados y los que faltaban. Alerta un mensaje ya sea por haber ganado o por haber perdido.
            let pokedexNombres = POKEDEX.map(a => a.nombre)
            let pokemonesSalvajesNombres = pokemonesDisponibles.map(a => a.nombre)
            if (pokemonesDisponibles == 0) {
                alert(`¡Felicidades! Has capturado a todos los pokemon de este simulador. Esta es la pokedex que completaste: ${pokedexNombres.join("\n")}`)
            } else {
                alert(`No has podido completar el simulador :(. Estos son los pokemon que capturaste: ${pokedexNombres.join("\n")} y estos son los que faltaron ${pokemonesSalvajesNombres.join("\n")}`)
            }
        }
*/

























































