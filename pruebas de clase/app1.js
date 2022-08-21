// Variables 


/*
let nombreAlumno = "Cristian"; // string
let edad = 18; // numero
let estudiante = true; // booleano

const apellido = "Nasr" // constante

console.log(nombreAlumno) // arroja resultado en la consola de las devtools
console.log(nombre, apellido, edad, estudiante) // se puede escribir como clg directamente 
*/


// Diferencia entre LET y CONST


// LET
// Pueden inicializarse vacias, se nombran vacias y cuando quiera le doy valor.
// Se pueden redeclarar
// let nombre;
// nombre = "coder"
// nombre = 37
// nombre = "house"
// console.log(nombre)


// CONST 
// Deben ser declaradas con valor
// No pueden redeclararse
// Buena practica declarar variables con mayuscula

// const DIRECCION = "Laprida";

// console.log(DIRECCION)


// Concatenar 

// let nombre1 = "Juan"
// let nombre2 = "Cruz"

// let nombreCompleto = nombre1 + " " + nombre2;

// // console.log(nombreCompleto)

// let numero1 = 250
// let numero2 = 1230

// // + - * /

// let resultado = numero1 * numero2

// console.log(resultado)


// Prompt

// let palabra = prompt("Resultado ganaste un iphone")

// console.log(palabra)




// ejercicio

// let nombre = prompt("Ingrese su nombre")
// let añoNacimiento = prompt("Ingrese el año en que nacio")

// const AÑOACTUAL = 2022

// let resultado = "Buenas noches" + " " + nombre + "," + " " + "usted tiene" + " " + (AÑOACTUAL - parseInt(añoNacimiento)) + " " + "años"

// alert(resultado)


// parseInt convierte de string a numero


// Booklet 1

// ej 1 

// let nombreSimpson = "Homero Jay"
// let apellidoSimpson = "Simpson"
// let edadSimpson = 39

// console.log(nombreSimpson + " " + apellidoSimpson + " " + edadSimpson)

// // ej 2

// const CIUDAD1 = "Okhlahoma"
// const CIUDAD2  = "Quilmes"
// const CIUDAD3 = "Tokyo"
// const CIUDAD4 = "Avellaneda"
// const CIUDAD5 = "Constitución"

// console.log(CIUDAD1 + " " + CIUDAD2 + " " + CIUDAD3 + " " + CIUDAD4 + " " +  + " " + CIUDAD5)

// // ej 3
// const TITULOLICENCIA = "Licencia de Conducir"
// let ciudadLicencia = "Quilmes"
// let numeroMatricula = "YFGP8029"
// let nombreLicencia = "Cristian Nasr"
// let direccionLicencia = "Laprida 2945"
// let ciudadOrigenLicencia = "Buenos Aires, Argentina"
// let nacimientoLicencia = "18 - 02 - 2004"
// const ESPACIOBLANCO = "                                                                                                               "

// console.log(ciudadLicencia + ESPACIOBLANCO + TITULOLICENCIA + ESPACIOBLANCO + numeroMatricula + ESPACIOBLANCO + nombreLicencia + ESPACIOBLANCO + direccionLicencia + ESPACIOBLANCO + ciudadOrigenLicencia + ESPACIOBLANCO + nacimientoLicencia )

// // ej 4 
// let primerNombre = prompt("Ingrese un nombre")
// let segundoNombre = prompt("Ingrese un nombre")
// let tercerNombre = prompt("Ingrese un nombre")
// let cuartoNombre = prompt("Ingrese un nombre")
// let quintoNombre = prompt("Ingrese un nombre")

// alert(primerNombre + " " + segundoNombre + " " + tercerNombre + " " + cuartoNombre + " " + quintoNombre)

// ej 5 
let precio1 = parseFloat (prompt(("Ingrese un numero")))
let descuento30 = 0.3
let precio2 = prompt(("Ingrese un numero"))

let descuentoPrecio = precio1 - (precio2 * descuento30)

alert(descuentoPrecio)

