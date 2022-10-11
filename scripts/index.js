    // =============================== VARIABLES DE SECCION ==============================
    const seccionPrincipal = document.getElementById("seccionPrincipal")
    const seccionIntermedia = document.getElementById("seccionIntermedia")
    const seccionPokemon = document.getElementById("seccionPokemon")
    const seccionFormularioEntrenador = document.getElementById("seccionFormularioEntrenador")
    const seccionPokebolas = document.getElementById("seccionPokebola")
    const seccionPokedex = document.getElementById("seccionPokedex")
    const continuarJuego = document.getElementById("continuarJuego")
    const formularioNombre = document.getElementById("formularioEntrenador")



    // =============================== FETCH DE POKEBOLAS ===============================
        let pokebolasDisponibles

        fetch ("./scripts/pokebolas.json")
        .then((res)=> res.json())
        .then((data)=> pokebolasDisponibles = data)

        const otorgarEficaciaAPokebolas = ()=>{
            pokebolasDisponibles.forEach((pokebola)=>{
            pokebola.eficaciaObjeto = eficaciaDe_EquivalenteACalidad(pokebola)
        })

        function eficaciaDe_EquivalenteACalidad(objeto){
            switch (objeto.calidad){
                case "Normal":
                    return obtenerEnteroRandomEntre_Y_(35, 180);
                case "Especial":
                    return obtenerEnteroRandomEntre_Y_(90, 250);
                case "Épica":
                    return obtenerEnteroRandomEntre_Y_(220, 400)
                case "Única":
                    return 1000
            }
        }
    }



    // =============================== FETCH DE POKEMONES ===============================
    let pokemonesDisponibles = []
    let pokemonSalvaje
    let Pokedex = []

    const indexPKM = ()=> {
		/*
            Devuelve el valor de un indice perteneciente a uno de los pokemones que se encuentran en el array de pokemonesDisponibles.
        */
		return obtenerEnteroRandomEntre_Y_(0, pokemonesDisponibles.length)
	}

    let pushearPokemonADisponibles = ()=>{
        /*
            Consume los datos de la api, trayendo un pokemon al azar y pusheandolo al array de pokemonesDisponibles.
            Fetch limitado a pokemones entre el id 1 y 386 (I, II y III generación de pokemon)
        */
        fetch (`https://pokeapi.co/api/v2/pokemon/${obtenerEnteroRandomEntre_Y_(1, 387)}`)
            .then(res => res.json())
            .then(data => {
                const indicePokemon = pokemonesDisponibles.findIndex((pokemon)=>{
                    return pokemon.id === data.id
                })
                indicePokemon === -1? pokemonesDisponibles.push(data) : pushearPokemonADisponibles() // Dentro del fetch se realiza una validación para evitar pokemones repetidos a la hora de pushear al array
            })
            .catch(()=>{
                seccionPrincipal.innerHTML = `No se pudieron recuperar los datos.`
            })

    }

    let pushear_PokemonesADisponibles =(numero)=>{
        /*
            Pushea al array de pokemonesDisponibles una cantidad igual al numero que se pase por parámetro.
            A la hora de pushear se evitan pokemones repetidos, por lo que si en el parametro se pone un numero que exceda la cantidad de objetos especificados en el fetch se va a pushear el máximo que posea la api.
        */
        for (let i = 0; i < numero; i++){
            pushearPokemonADisponibles()
        }
    }

    pushear_PokemonesADisponibles(15) // Decidí dejarlo en 15 para no hacer tan largo el juego.






    // =============================== INSTANCIAS DEL JUEGO ===============================
const renderizarInstanciaDeCaptura = ()=> {
    /*
        Elimina todo el contenido del html y renderiza al pokemón a capturar, junto a las pokebolas y los pokemones ya capturados.
        Debe haber al menos un pokemon a capturar declarado en la variable y al menos una pokebola.
    */
    seccionIntermedia.innerHTML = ""
    seccionFormularioEntrenador.innerHTML = ""
    otorgarEficaciaAPokebolas()
    invocarPokemonSalvaje()
    pintarPokebolas()
    pintarPokedex()
}

const renderizarInstanciaIntermedia = ()=>{
    /*
        Elimina el contenido del html y renderiza las opciones de continuar el juego o terminarlo en caso de que todavia queden pokebolas o pokemones en la lista. Sino directamente pasa al estado final.
    */
    eliminarDatosDelPrincipalHijos()
    if(!actualizarEstadoJuego()){
        seccionIntermedia.innerHTML =
        `<h2 class="mb-3">¿Que deseas hacer ${nombreEntrenador}?</h2>
        <div>
        <button onClick = renderizarInstanciaDeCaptura()>Siguiente pokemon</button>
        <button onClick = renderizarInstanciaFinal()>Terminar juego</button>
        </div> `
    }else{
        renderizarInstanciaFinal()
    }
}

const renderizarInstanciaFinal =()=> {
    /*
        Elimina el contenido del html y notifica al jugador si ganó o perdió dependiendo de si todavia quedan pokemones sin capturar. Renderiza en el html las cards de la Pokedex.
    */
    if (pokemonesDisponibles.length === 0) {
        eliminarDatosDelPrincipalHijos()
        Toastify({
            text: `¡Felicidades ${nombreEntrenador}! Has capturado a todos los pokemon de este simulador. Esta es tu Pokedex`,
            duration: 6000,
            newWindow: false,
            close: true,
            gravity: "top",
            offset:{
                y: "3em"
            },
            position: "center",
            stopOnFocus: true,
            style: {
                width: "70vw",
                background: "linear-gradient(90deg, rgba(217,207,53,1) 0%, rgba(131,214,1,1) 100%, rgba(68,255,0,1) 100%)",
            },
        }).showToast();
        pintarPokedex()
    } else {
        eliminarDatosDelPrincipalHijos()
        Toastify({
            text: `No has podido completar el simulador ${nombreEntrenador}. Estos son los pokemon que capturaste en esta oportunidad.`,
            duration: 6000,
            newWindow: false,
            close: true,
            gravity: "top",
            offset:{
                y: "3em"
            },
            position: "center",
            stopOnFocus: true,
            style: {
            width: "70vw",
            background: "linear-gradient(90deg, rgba(147,8,8,1) 0%, rgba(187,5,5,1) 49%, rgba(251,28,28,1) 96%, rgba(255,0,0,1) 100%)",
            },
        }).showToast();
        pintarPokedex()
    }
}



    // =============================== PRIMER PANTALLA -- FORMULARIO CON VALIDACIÓN DE NOMBRE Y CONTINUAR PARTIDA ===============================
const regexNombre = /^[a-zA-Z0-9_ ø]{1,}[a-zA-Zø]+[0-9]*$/;
let nombreEntrenador

formularioNombre.addEventListener("submit", seccionBienvenidaEntrenador)
function seccionBienvenidaEntrenador(e){
    /*
        Valida si el nombre ingresado en el input concuerda con el regex, y escribe un mensaje de bienvenida junto a un botón para poder comenzar con el juego.
    */
    const formDataValidacion = new FormData(e.target)
    nombreEntrenador = formDataValidacion.get("nombreEntrenador")
    const mensajeBienvenida = document.createElement("div");
    let advertenciaNombre = ""
    const mensajeAdvertenciaNombre = document.getElementById("advertenciaSiInvalido");
    if (regexNombre.test(nombreEntrenador)){
        seccionFormularioEntrenador.innerHTML = ""
        mensajeBienvenida.innerHTML =
        `<p>Bienvenido! joven <strong>${nombreEntrenador}</strong>, el camino para llegar a ser un maestro pokemón se logra a partir de mucha practica y esfuerzo. Con este simulador se busca que entrenes tu capacidad de captura para que nunca más se escape un pokemón de tus manos. Mucha suerte y que te diviertas!</p>
        <button onClick="renderizarInstanciaDeCaptura()"> Comenzar a Jugar</button>`
        seccionFormularioEntrenador.appendChild(mensajeBienvenida)
    } else {
        e.preventDefault()
        advertenciaNombre += `Nombre Invalido! <br> El nombre debe tener al menos 2 caracteres y solo puede contener letras de la A-Z, números, espacios y guiones bajos (_)`
        mensajeAdvertenciaNombre.innerHTML = advertenciaNombre
    }
}

continuarJuego.addEventListener("click", continuarPartidaGuardada)
function continuarPartidaGuardada(){
    /*
        Actualiza los datos usando las variables guardadas en el local storage y procede a iniciar automaticamente la etapa de captura, retomando el juego desde donde se lo dejó.
        No se debería usar esta función si no hay datos guardados en el local storage ya que las variables pasarian a estar indefinidas.
    */
    recuperarDatosPartida()
    renderizarInstanciaDeCaptura()
}








// =============================== DATOS RENDERIZADOS EN EL DOM ===============================
function invocarPokemonSalvaje() {
    /*
        Se redeclara al pokemón salvaje utilizando un pokemon al azar del array de disponibles, se lo notifica a través de un toast y luego es renderizado en el html como una card.
    */
    pokemonSalvaje = pokemonesDisponibles[indexPKM()]
    Toastify({
        text: `¡Un ${pokemonSalvaje.name.toUpperCase()} salvaje ha aparecido!`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        offset:{
            y: "2em"
        },
        position: "center",
        stopOnFocus: false,
        style: {
        width: "70vw",
        background:"linear-gradient(90deg, rgba(255,72,0,1) 0%, rgba(251,196,28,1) 100%, rgba(255,235,0,1) 100%)",
        },
    }).showToast();
    pintarPokemon()
}

const pintarPokemon = ()=>{
    /*
        Renderiza al pokemon en forma de una card.
    */
    let datosPokemonSalvaje = document.createElement("article")
    datosPokemonSalvaje.innerHTML =`
        <div class="profile-card-4 text-center">
        <img src="${pokemonSalvaje.sprites.front_default}" class="img img-responsive">
            <div class="profile-content">
                <div class="profile-name">
                    <h4>${pokemonSalvaje.name.toUpperCase()}</h4>
                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <div class="profile-overview">
                            <p>Tipo</p>
                            ${devolverCadaTipoExistente(pokemonSalvaje)}
                            </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="profile-overview">
                            <p>Indice de captura</p>
                            <h5>${parseInt(pokemonSalvaje.base_experience / 5)} </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    seccionPokemon.appendChild(datosPokemonSalvaje)
}


function pintarPokebolas() {
    /*
        Renderiza las pokebolas capturadas a través del fetch, asegurandose en cada caso si debe estar activada o desactivada.
    */
    let headingPokebolas = document.createElement("h3")
    headingPokebolas.innerHTML = `¿Que deseas hacer ${nombreEntrenador}?`
    seccionPokebolas.appendChild(headingPokebolas)
    pokebolasDisponibles.forEach((pokebola, id) => {
        let datosPokeball = document.createElement("article")
        datosPokeball.classList.add("col-2", "datosPokebola")
        datosPokeball.innerHTML = crearPlantillaPokebolaHabilitadaODeshabilitada(pokebola, id)
        seccionPokebolas.appendChild(datosPokeball)
    })
}

function crearPlantillaPokebolaHabilitadaODeshabilitada (pokebola, index){
    /*
        Verifica si hay mas de una pokebola de ese tipo y la grafica con funciones, en caso contrario la grafica desactivada.
    */
    if(pokebola.cantidad > 0){
        return `
            <img src="${pokebola.imagen}" alt="" class="imagenPokebola">
            <p>${pokebola.nombre}</p>
            <p>Tipo: ${pokebola.calidad}</p>
            <p>${pokebola.descripcion}</p>
            <p>Cantidad: ${pokebola.cantidad}</p>
            <button onClick = avanzarInstanciaSegunPokebola_(${index})>Lanzar ${pokebola.nombre}</button>
        `
    } else {
        return `<img src="${pokebola.imagen}" alt="" class="imagenPokebola">
        <p>${pokebola.nombre}</p>
        <p>Tipo: ${pokebola.calidad}</p>
        <p>${pokebola.descripcion}</p>
        <p>Cantidad: ${pokebola.cantidad}</p>
        <button disabled>Lanzar ${pokebola.nombre}</button>
        <p>NO TIENE MAS POKEBOLAS DE ESTE TIPO!</p>`
    }
}
const pintarPokedex = ()=>{
    /*
        Renderiza los pokemones que ya hayan sido capturados y se encuentren en la lista de Pokedex.
    */
    seccionPokedex.innerHTML = `<h2 class="m-5">POKEMONES CAPTURADOS</h2>`
    Pokedex.forEach((pokemon)=>{
    let datosPokedex = document.createElement("article")
    datosPokedex.classList.add("col-4", "datosPokedex")
    datosPokedex.innerHTML =`
    <div class="profile-card-4 text-center">
        <h3>N°${pokemon.id}</h3>
        <img src="${pokemon.sprites.front_default}" class="img img-responsive">
            <div class="profile-content">
                <div class="profile-name">
                    <h4>${pokemon.name.toUpperCase()}</h4>
                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <div class="profile-overview">
                            <p>Tipo</p>
                            ${devolverCadaTipoExistente(pokemon)}
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <div class="profile-overview">
                            <p>Nivel</p>
                            <h5>${parseInt(pokemon.base_experience / 5)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    seccionPokedex.appendChild(datosPokedex)
})
}

const devolverCadaTipoExistente =(pokemon)=>{
    /*
        Devuelve un heading por cada tipo que posea el pokemon, nombrando el tipo y teniendo una clase correspondiente al mismo.
    */
    if(pokemon.types[1]){
        return `
        <h5 class="pkm-type ${pokemon.types[0].type.name}"><span>${pokemon.types[0].type.name.toUpperCase()}</span></h5>
        <h5 class="pkm-type ${pokemon.types[1].type.name}"><span>${pokemon.types[1].type.name.toUpperCase()}</span></h5>`
    } else{
        return `
        <h5 class="pkm-type ${pokemon.types[0].type.name}"><span>${pokemon.types[0].type.name.toUpperCase()}</span></h5>`
    }
}

const eliminarDatosDelPrincipalHijos = ()=>{
    /*
        Borra los datos internos de las pokebolas y pokemones, para limpiar el html pero sin borrar las secciones en caso de deber reutilizarlas.
    */
    const seccionPrincipalHijos = Array.from(seccionPrincipal.children)
    seccionPrincipalHijos.forEach((hijo) => {
        hijo.innerHTML = ``
        seccionPrincipal.appendChild(hijo)
    })
}


// =============================== FUNCIONES PARA CAPTURAR UN POKEMON ===============================

const avanzarInstanciaSegunPokebola_ = (entrada) => {
    // En base a la elección de pokebola, invoca la función de captura y luego prepara el juego para la instancia de post captura.
    calcularCapturaSegunPokebola_(entrada)
    actualizarEstadoJuego()
    renderizarInstanciaIntermedia()
}

const calcularCapturaSegunPokebola_ =(entrada)=>{
    /*
        Se le reduce 1 a la cantidad total de las pokebolas disponibles y luego se calcula si el pokemon es capturado o no comparando el nivel del pokemon con la eficacia de la pokebola. En caso de ser capturado se lo traslada al array de Pokedex y es notificado, sino solo se notifica que escapó
    */
    pokebolasDisponibles[entrada].cantidad--
    if (pokemonSalvaje.base_experience <= pokebolasDisponibles[entrada].eficaciaObjeto) {
        Toastify({
            text: `Buen trabajo! capturaste a ${pokemonSalvaje.name.toUpperCase()}. Un pokemon de nivel ${pokemonSalvaje.base_experience / 5} utilizando tu pokebola de tipo ${pokebolasDisponibles[entrada].calidad}`,
            duration: 1500,
            newWindow: false,
            close: true,
            gravity: "bottom",
            offset:{
                y: "60vh"
            },
            position: "center",
            stopOnFocus: false,
            style: {
            width: "70vw",
            background:"linear-gradient(90deg, rgba(8,224,161,1) 0%, rgba(0,176,242,1) 79%, rgba(0,116,255,1) 96%, rgba(0,99,255,1) 100%)",
            }
        }).showToast();
        trasladarPokemonAPokedex()
    } else {
        Toastify({
            text: `Mala suerte, ${pokemonSalvaje.name.toUpperCase()} escapó. Era un pokemon de nivel ${pokemonSalvaje.base_experience / 5}. La pokebola que utilizaste era de tipo ${pokebolasDisponibles[entrada].calidad}, la próxima vez deberías utilizar una de calidad más alta.`,
            duration: 1500,
            newWindow: false,
            close: true,
            gravity: "bottom",
            offset:{
                y: "60vh"
            },
            position: "center",
            stopOnFocus: false,
            style: {
            width: "70vw",
            background:"linear-gradient(90deg, rgba(73,0,142,1) 0%, rgba(84,1,135,1) 41%, rgba(138,1,118,1) 80%, rgba(147,5,113,1) 96%, rgba(144,0,58,1) 100%)",
            }
        }).showToast();
    }
}


const trasladarPokemonAPokedex = () => {
    /*
        Se mueve al pokemón que se encontraba en la lista pokemonSalvaje hacia la Pokedex y se lo elimina del array de pokemonesDisponibles.
    */
    Pokedex.push(pokemonSalvaje)
    eliminarPokemonDeLista_ConReferenciaDe_(pokemonesDisponibles, pokemonSalvaje)
}

const eliminarPokemonDeLista_ConReferenciaDe_ = (arrayPrevioPokemon, arrayActualPokemon) => {
    /*
        Se elimina de la lista de **arrayPrevioPokemon** al elemento que fue pusheado al array de **arrayActualPokemon**.
    */
        arrayPrevioPokemon.splice((arrayPrevioPokemon.indexOf(arrayActualPokemon)), 1)
}

function actualizarEstadoJuego() {
    /*
        Actualiza la cantidad de pokebolas que hay y los datos del localstorage. Chequea que el juego no haya terminado basandose en la cantidad de pokemones y pokebolas que quedan.
    */
    pokebolasContador = pokebolasDisponibles[0].cantidad + pokebolasDisponibles[1].cantidad + pokebolasDisponibles[2].cantidad + pokebolasDisponibles[3].cantidad
    guardarListasEnLocal()
    return (pokebolasContador === 0) || (pokemonesDisponibles.length === 0)
}




// =============================== LOCAL STORAGE ===============================
const guardarListasEnLocal = ()=>{
    /*
        Guarda en el local storage los datos de nombre, pokemones, Pokedex y pokebolas para poder ser recuperados más tarde.e
    */
        let nombreEntrenadorSave = JSON.stringify(nombreEntrenador)
        let pokemonesDisponiblesSave = JSON.stringify(pokemonesDisponibles)
        let PokedexSave = JSON.stringify(Pokedex)
        let pokebolasSave = JSON.stringify(pokebolasDisponibles)
        localStorage.setItem("Nombre", nombreEntrenadorSave)
        localStorage.setItem("pokemonesDisponibles", pokemonesDisponiblesSave)
        localStorage.setItem("Pokedex", PokedexSave)
        localStorage.setItem("pokebolasDisponibles", pokebolasSave)
}

function recuperarDatosPartida (){
        /*
            Recupera los datos guardados en el local storage y actualiza las variables de pokemones, Pokedex, pokebolas y nombre utilizando esos datos.
        */
        nombreEntrenador = localStorage.getItem("Nombre")
        pokemonesDisponibles = localStorage.getItem("pokemonesDisponibles")
        pokebolasDisponibles = localStorage.getItem("pokebolasDisponibles")
        Pokedex = localStorage.getItem("Pokedex")
        nombreEntrenador = JSON.parse(nombreEntrenador)
        pokemonesDisponibles = JSON.parse(pokemonesDisponibles)
        pokebolasDisponibles = JSON.parse(pokebolasDisponibles)
        Pokedex = JSON.parse(Pokedex)
    }




// ==================== FUNCIÓN MATH RANDOM ====================

function obtenerEnteroRandomEntre_Y_ (min, max){
    // Esta función genera un número al azar que se encuentre entre los minimos y máximos(sin incluir el máximo) establecidos
        return Math.floor(Math.random() * (max - min) + min)
    }
