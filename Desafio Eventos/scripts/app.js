
// Evento saludar entrenador
const botonNombre = document.getElementById("enviarNombre")

botonNombre.addEventListener("click", saludarEntrenador)


function saludarEntrenador(){
    const entrenador = document.getElementById("nombreEntrenador").value
    const seccionEntrenador = document.getElementById("eventoEntrenador")
    seccionEntrenador.innerHTML = ""
    const mensajeBienvenida = document.createElement("div");
    mensajeBienvenida.innerHTML = `<h2>Bienvenido! joven <strong>${entrenador}</strong>, el camino para llegar a ser un maestro pokemón se logra a partir de mucha practica y esfuerzo. Nosotros en este simulador queremos que entrenes tu capacidad de captura para que nunca más se escape un pokemón de tus manos. Mucha suerte y que te diviertas!</h2>`
    seccionEntrenador.appendChild(mensajeBienvenida)
    mensajeBienvenida.className = "colorNombre"
}




// Evento Lanzar pokebola
class PokeballConstructor {
    constructor (nombre, tipo, cantidad, descripcion, eficaciaObjeto, imagen){
        this.nombre = nombre
        this.tipo = tipo
        this.cantidad = cantidad
        this.descripcion = descripcion
        this.eficaciaObjeto = eficaciaObjeto
        this.imagen = imagen
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

const pokebolasDisponibles = [
    Pokeball = new PokeballConstructor ("Pokeball", "Normal", 3, "La más simple de todas, buena para pokemones iniciales", 1, "./img/pokeball.webp"),
    Superball = new PokeballConstructor ("Superball", "Especial", 3, "Version mejorada de la pokebola, mayor indice de eficacia pero más costosa", 2, "./img/superball.webp"),
    Ultraball = new PokeballConstructor ("Ultraball", "Épica", 2, "Posee un gran indice de captura que viene acompañado de su alto precio, necesario para pokemones de alta rareza.", 3, "./img/ultraball.webp"),
    Masterball = new PokeballConstructor ("Masterball", "Única", 1, "La forma perfeccionada de la pokebola, atrapa cualquier cosa sin importar su dificultad", 100, "./img/masterball.webp")
]

const pintarPokebolas = ()=>{
    // Escribe los datos de cada pokebola en el html
    const eventoPokebolas = document.getElementById("eventoPokebola")
    pokebolasDisponibles.forEach((pokebola)=> {
        let datosPokeball = document.createElement("h2")
        datosPokeball.innerHTML = `
        <img src="${pokebola.imagen}" alt="" class="imagenPokebola">
        <p>${pokebola.nombre}</p>
        <p>Tipo: ${pokebola.tipo}</p>
        <p>${pokebola.descripcion}</p>
        <p>Cantidad: ${pokebola.cantidad}</p>
        <button>Lanzar ${pokebola.nombre}</button>`
    eventoPokebolas.appendChild(datosPokeball)
    })
}

pintarPokebolas()













