// ==================== FUNCIÓN MATH RANDOM ====================

function obtenerEnteroAleatorio (min, max){
// Esta función genera un número aleatorio que se encuentre entre los minimos y máximos establecidos    
    return Math.floor(Math.random() * (max - min) + min)
}



// ==================== CONSTRUCTOR DE POKEMONES ====================

    class PokemonConstructor {
        constructor (id, nombre, imagen, tipo, rareza, descripcion){
            this.id = id
            this.nombre = nombre
            this.imagen = imagen
            this.tipo = tipo 
            this.rareza = rareza
            this.descripcion = descripcion
        }
		capturado = false
	}


    // ============================================================ LISTA DE POKEMONES ============================================================
    let pokemonesDisponibles = [
		new PokemonConstructor(1, "Quagsire", "./img/Quagsire.webp", "Agua" + " - " + "Tierra", 2, "Quagsire caza dejando las fauces abiertas en el agua y esperando a que su presa entre sin darse cuenta. Como se queda quieto, no pasa mucha hambre."),
        new PokemonConstructor(2, "Charmander", "./img/Charmander.png", "Fuego", 1, "La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado."),
        new PokemonConstructor(3, "Magneton", "./img/Magneton.png", "Electrico - Acero", 3, "	Son tres Magnemite que se atraen entre sí. Genera ondas de radio de gran alcance que provocan que la temperatura suba 2 grados centígrados en un radio de 1 km."),
        new PokemonConstructor(4, "Tyranitar", "./img/Tyranitar.webp", "Tierra - Siniestro", 4, "Tiene una fuerza imponente. Puede derribar una montaña para hacer su nido. Suele merodear por zonas montañosas en busca de nuevos rivales contra los que luchar."),
		new PokemonConstructor(5, "Mew", "./img/Mew.png", "Psiquico", 5, "Dicen que posee el mapa genético de todos los Pokémon. Puede hacerse invisible a voluntad, así que logra pasar inadvertido aunque haya gente cerca.")
    ]
	
	const indexPKM = ()=> {
		// Función para calcular el indice de un pokemon al azar que se va a usar para declarar la variable de pokemonSalvaje. 
		return obtenerEnteroAleatorio(0, pokemonesDisponibles.length)
	}	
	
    let pokemonSalvaje = pokemonesDisponibles[indexPKM()]
	
    let POKEDEX = []


    // ============================================================ LISTA DE POKEBOLAS ============================================================
    let pokebolasDisponibles = [
        {
            id: 1,
            nombre: "Pokeball",
            imagen:"./img/pokeball.webp", 
            tipo: "Normal",
            descripcion: "La más simple de todas, buena para pokemones de rareza nivel bajo",
            cantidad: 3,
            eficaciaObjeto: obtenerEnteroAleatorio(1, 20),
        },
        {
            id: 2,
            nombre: "Superball",
            imagen: "./img/superball.webp",
            tipo: "Especial",
            descripcion: "Version mejorada de la pokebola, muy efectiva para pokemones de rareza intermedia",
            cantidad: 2,
            eficaciaObjeto: obtenerEnteroAleatorio(15, 40)
        },
        {
            id: 3,
            nombre: "Ultraball",
            imagen: "./img/ultraball.webp",
            tipo: "Épica",
            descripcion: "Posee un gran indice de captura necesario para pokemones de alta rareza",
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


		// =============================== VARIABLES DE SECCION ==============================
		const seccionPrincipal = document.getElementById("seccionPrincipal")
        const seccionPostCaptura = document.getElementById("seccionPostCaptura")
        const seccionPokemon = document.getElementById("seccionPokemon")
        const seccionFormularioEntrenador = document.getElementById("seccionFormularioEntrenador")
        const eventoPokebolas = document.getElementById("seccionPokebola")
        const seccionPokedex = document.getElementById("seccionPokedex")
        const continuarJuego = document.getElementById("continuarJuego")


        // PRIMER PANTALLA -- FORMULARIO CON VALIDACIÓN DE NOMBRE
        const formularioNombre = document.getElementById("formularioEntrenador")
        const regexNombre = /^[a-zA-Z0-9_ ø]{1,}[a-zA-Zø]+[0-9]*$/;
        let nombreEntrenador
        
        formularioNombre.addEventListener("submit", seccionBienvenidaEntrenador)
        
        function seccionBienvenidaEntrenador(e){
        // A partir del valor ingresado en el formulario escribe en el HTML un mensaje de bienvenida si el nombre cumple con el regex y sino le solicita que ingrese un nombre valido.
            const formDataValidacion = new FormData(e.target)
            nombreEntrenador = formDataValidacion.get("nombreEntrenador")
            const mensajeBienvenida = document.createElement("div");     
            let advertenciaNombre = ""
            const mensajeAdvertenciaNombre = document.getElementById("advertenciaSiInvalido");
            if (regexNombre.test(nombreEntrenador)){
                seccionFormularioEntrenador.innerHTML = ""
                mensajeBienvenida.innerHTML = 
                `<p>Bienvenido! joven <strong>${nombreEntrenador}</strong>, el camino para llegar a ser un maestro pokemón se logra a partir de mucha practica y esfuerzo. Con este simulador se busca que entrenes tu capacidad de captura para que nunca más se escape un pokemón de tus manos. Mucha suerte y que te diviertas!</p> 
                <button onClick="iniciarInstanciaDeCaptura()"> Comenzar a Jugar</button>`
                seccionFormularioEntrenador.appendChild(mensajeBienvenida)
            } else {
                e.preventDefault()
                advertenciaNombre += `Nombre Invalido! <br> El nombre debe tener al menos 2 caracteres y solo puede contener letras de la A-Z, números, espacios y guiones bajos (_)`
                mensajeAdvertenciaNombre.innerHTML = advertenciaNombre
            }
        }
    

        // INSTANCIAS DEL JUEGO
        const iniciarInstanciaDeCaptura = ()=> {
            // Estado del juego inicial, aparece un pokemon y las pokebolas para capturar al mismo.
            if(!actualizarEstadoJuego()){
            seccionPostCaptura.innerHTML = ""
            seccionFormularioEntrenador.innerHTML = ""
            invocarPokemonSalvaje()
            pintarPokebolas()
            pintarPokedex()
            }else{
            iniciarInstanciaFinal()
            }  
        }
        const iniciarInstanciaPostCaptura = ()=>{
            // Parte del juego en la que el jugador decide si quiere continuar (volviendo a la instancia de captura) o finalizarlo (pasando a la instancia final)
            eliminarDatosDelPrincipalHijos()
            if(!actualizarEstadoJuego()){
            seccionPostCaptura.innerHTML = 
            `<h2 class="mb-3">¿Que deseas hacer ${nombreEntrenador}?</h2>
            <button onClick = iniciarInstanciaDeCaptura()>Siguiente pokemon</button> 
            <button onClick = iniciarInstanciaFinal()>Terminar juego</button>`
            }else{
            iniciarInstanciaFinal()
            }  
        }
        const iniciarInstanciaFinal =()=> {
            // Una vez terminado el simulador, declara las variables con los nombres de los pokemones capturados y los que faltaban. Alerta un mensaje ya sea por haber ganado o por haber perdido.
            if (pokemonesDisponibles.length === 0) {
                eliminarDatosDelPrincipalHijos()
                alert(`¡Felicidades ${nombreEntrenador}! Has capturado a todos los pokemon de este simulador. Esta es tu pokedex`)
                pintarPokedex()
            } else {
                eliminarDatosDelPrincipalHijos()
                alert(`No has podido completar el simulador ${nombreEntrenador}. Estos son los pokemon que capturaste en esta oportunidad.`)
                pintarPokedex()
            }
        }

        continuarJuego.addEventListener("click", continuarPartidaGuardada)
        function continuarPartidaGuardada(){
            recuperarDatosPartida()
            iniciarInstanciaDeCaptura()
        }

        const guardarListasEnLocal = ()=>{
        // Actualiza las listas de pokemones disponibles, pokedex y pokebolas del local storage
            let nombreEntrenadorSave = JSON.stringify(nombreEntrenador)
            localStorage.setItem("Nombre", nombreEntrenadorSave)
            let pokemonesDisponiblesSave = JSON.stringify(pokemonesDisponibles)
            localStorage.setItem("pokemonesDisponibles", pokemonesDisponiblesSave)
            let pokedexSave = JSON.stringify(POKEDEX)
            localStorage.setItem("POKEDEX", pokedexSave)
            let pokebolasSave = JSON.stringify(pokebolasDisponibles)
            localStorage.setItem("pokebolasDisponibles", pokebolasSave)
}
        function recuperarDatosPartida (){
        // Recupera los datos guardados en el local storage 
            pokemonesDisponibles = localStorage.getItem("pokemonesDisponibles")
            pokemonesDisponibles = JSON.parse(pokemonesDisponibles)
            POKEDEX = localStorage.getItem("POKEDEX")
            POKEDEX = JSON.parse(POKEDEX)
            nombreEntrenador = localStorage.getItem("Nombre")
            nombreEntrenador = JSON.parse(nombreEntrenador)
            pokebolasDisponibles = localStorage.getItem("pokebolasDisponibles")
            pokebolasDisponibles = JSON.parse(pokebolasDisponibles)
        }

// DATOS ESCRITOS EN DOM 
        const pintarPokemon = ()=>{
            // Escribe los datos del pokemon a capturar
            let datosPokemonSalvaje = document.createElement("article")
            datosPokemonSalvaje.innerHTML =`
                <div class="profile-card-4 text-center">
                <img src="${pokemonSalvaje.imagen}" class="img img-responsive">
                    <div class="profile-content">
                        <div class="profile-name">
                            <h4>${pokemonSalvaje.nombre}</h4>
                        </div>
                        <div class="row">
                            <div class="col-xs-4">
                                <div class="profile-overview">
                                    <p>Tipo</p>
                                    <h5>${pokemonSalvaje.tipo}</h5></div>
                            </div>
                            <div class="col-xs-4">
                                <div class="profile-overview">
                                    <p>Rareza</p>
                                    <h5>${pokemonSalvaje.rareza}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
            seccionPokemon.appendChild(datosPokemonSalvaje)
        }

		function pintarPokebolas  (){
			// Escribe los datos de cada pokebola en el html
            let headingPokebolas = document.createElement("h3")
            headingPokebolas.innerHTML = `¿Que deseas hacer ${nombreEntrenador}?`
            eventoPokebolas.appendChild(headingPokebolas)
			pokebolasDisponibles.forEach((pokebola, id)=> {
				let datosPokeball = document.createElement("article")
                datosPokeball.classList.add("col-2", "datosPokebola")
                datosPokeball.innerHTML = crearPlantillaPokebolaHabilitadaODeshabilitada(pokebola, id)
                eventoPokebolas.appendChild(datosPokeball)
			})
        }
        function crearPlantillaPokebolaHabilitadaODeshabilitada (pokebola, index){
            // Grafica en el HTML una pokebola con las funciones activadas o desactivadas dependiendo de la cantidad de pokebolas que hayan disponibles.
            if(pokebola.cantidad > 0){
                return `
                    <img src="${pokebola.imagen}" alt="" class="imagenPokebola">
                    <p>${pokebola.nombre}</p>
                    <p>Tipo: ${pokebola.tipo}</p>
                    <p>${pokebola.descripcion}</p>
                    <p>Cantidad: ${pokebola.cantidad}</p>
                    <button onClick = prepararInstanciaPostCaptura(${index})>Lanzar ${pokebola.nombre}</button>
                `
            } else {
                return `<img src="${pokebola.imagen}" alt="" class="imagenPokebola">
                <p>${pokebola.nombre}</p>
                <p>Tipo: ${pokebola.tipo}</p>
                <p>${pokebola.descripcion}</p>
                <p>Cantidad: ${pokebola.cantidad}</p>
                <button disabled>Lanzar ${pokebola.nombre}</button>
                <p>NO TIENE MAS POKEBOLAS DE ESTE TIPO!</p>`
            }
        }
        const pintarPokedex = ()=>{
            seccionPokedex.innerHTML = `<h2 class="m-5">POKEMONES CAPTURADOS</h2>`
            POKEDEX.forEach((pokemon)=>{
            let datosPokedex = document.createElement("article")
            datosPokedex.classList.add("col-4", "datosPokedex")
            datosPokedex.innerHTML =`
            <div class="profile-card-4 text-center">
                <img src="${pokemon.imagen}" class="img img-responsive">
                    <div class="profile-content">
                        <div class="profile-name">
                            <h4>${pokemon.nombre}</h4>
                        </div>
                        <div class="row">
                            <div class="col-xs-4">
                                <div class="profile-overview">
                                    <p>Tipo</p>
                                    <h5>${pokemon.tipo}</h5></div>
                            </div>
                            <div class="col-xs-4">
                                <div class="profile-overview">
                                    <p>Rareza</p>
                                    <h5>${pokemon.rareza}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="profile-description">
                        <p>${pokemon.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>`
            seccionPokedex.appendChild(datosPokedex)
        })
        }
        const eliminarDatosDelPrincipalHijos = ()=>{
            const seccionPrincipalHijos = Array.from(seccionPrincipal.children)
            seccionPrincipalHijos.forEach((hijo) => {
                hijo.innerHTML = `` 
                seccionPrincipal.appendChild(hijo)
            })
        }

        // ============================= LOGICA DEL JUEGO ====================================

        function invocarPokemonSalvaje() {
            // Se prepara una nueva instancia de juego al generar un pokemon salvaje y alertar de su presencia y graficarlo en el html.
            pokemonSalvaje = pokemonesDisponibles[indexPKM()]
            alert(`¡Un ${pokemonSalvaje.nombre} salvaje ha aparecido!`)
            pintarPokemon()
        }
    

        const prepararInstanciaPostCaptura = (entrada) => {
            // En base a la elección de pokebola, invoca la función de captura y luego prepara el juego para la instancia de post captura.
            capturarPokemonSi(entrada)
            actualizarEstadoJuego()
            iniciarInstanciaPostCaptura()
        }

        const capturarPokemonSi =(entrada)=>{
            // Este algoritmo calcula si el pokemon es capturado o no, en caso positivo traslada al pokemón desde la lista de pokemonSalvaje hacia POKEDEX, en caso negativo solo dispara un alert.
            pokebolasDisponibles[entrada].cantidad--
            if (pokemonDificultadCaptura() <= pokebolasDisponibles[entrada].eficaciaObjeto) {
                alert(`Buen trabajo! capturaste a ${pokemonSalvaje.nombre}. Un pokemon de rareza ${pokemonSalvaje.rareza} utilizando tu pokebola de tipo ${pokebolasDisponibles[entrada].tipo}`)
                trasladarPokemonAPokedex()
            } else {
                alert((`Mala suerte, ${pokemonSalvaje.nombre} escapó. Era un pokemon de rareza ${pokemonSalvaje.rareza}. La pokebola que utilizaste era de tipo ${pokebolasDisponibles[entrada].tipo}, la próxima vez deberías utilizar una de calidad más alta.`))
            }
        }

        const pokemonDificultadCaptura = () =>{
        // Devuelve un número al azar de dificultad dependiendo de la rareza del pokemon salvaje
            switch (pokemonSalvaje.rareza){
                case 1: 
                    return obtenerEnteroAleatorio(1, 13)
                case 2:
                    return obtenerEnteroAleatorio(9, 22)
                case 3: 
                    return obtenerEnteroAleatorio(18, 31)
                case 4: 
                    return obtenerEnteroAleatorio(32, 50)
                case 5: 
                    return obtenerEnteroAleatorio(45, 60)
            } 
		}

        const trasladarPokemonAPokedex = () => {
            // Se mueve al pokemón que se encontraba en la lista pokemonSalvaje hacia la pokedex, se actualiza su estado de capturado a verdadero, se elimina de la lista de disponibles al mismo y se grafica en el html como uno de los pokemones de la pokedex.
            pokemonSalvaje.capturado = true
            POKEDEX.push(pokemonSalvaje)
            eliminarPokemonDeLista_(pokemonesDisponibles, pokemonSalvaje)
        }

        const eliminarPokemonDeLista_ = (arrayPrevioPokemon, arrayActualPokemon) => {
            // Se elimina de la lista de **arrayPrevioPokemon** al elemento que fue pusheado al array de **arrayActualPokemon**. 
            arrayPrevioPokemon.splice((arrayPrevioPokemon.indexOf(arrayActualPokemon)), 1)
        }

        function actualizarEstadoJuego() {
            // Actualiza la cantidad de pokebolas que hay y los datos del localstorage. Chequea que el juego no haya terminado basandose en la cantidad de pokemones y pokebolas que quedan.
            pokebolasContador = pokebolasDisponibles[0].cantidad + pokebolasDisponibles[1].cantidad + pokebolasDisponibles[2].cantidad + pokebolasDisponibles[3].cantidad
            guardarListasEnLocal()
            return (pokebolasContador === 0) || (pokemonesDisponibles.length === 0)
        }


























































