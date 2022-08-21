/*
    if (condicion) {
        //bloque verdadero
    } else {
        //bloque falso
    }
*/

/*
const PUNTAJE = 1000.0;

if (PUNTAJE === 1000) {
    console.log("perfecto")
} else {
    console.log("mal")
}
 */


// Operadores Lógicos

/*

=== Estrictamente igual
!== No es estrictamente igual
> Mayor que
>= Mayor o igual
< Menor que
<= Menor o igual
&& AND Conjunción
|| OR Disyunción
! NOT Negación

*/

/*
const DINERO = 300;
const TARJETA = true
const TOTALAPAGAR = 500;

if (DINERO > TOTALAPAGAR) {
    console.log("Podemos pagar")
} else if (TARJETA && (DINERO == 300)) {
    console.log("Puedo pagar con tarjeta")
} else {
    console.log("Fondos insuficientes")
}
*/

// SWITCH 

/*
const METODOPAGO = "Cheque";

switch (METODOPAGO) {
    case "Efectivo":
        console.log("Pagaste en efectivo");
    break;
    case "Cheque":
        console.log("Pagaste con un cheque");
    break;
    case "Tarjeta":
        console.log("Pagaste con tarjeta");
    break;
    default: 
        console.log("Metodo de pago no aceptado")
    break;
}

*/

// 

// const USUARIO = false;
// const PUEDEPAGAR = false;

// if (USUARIO && PUEDEPAGAR) {
//     console.log("Puede comprar")
// } else if (!USUARIO && !PUEDEPAGAR) {
//     console.log("No puede comprar")
// }

/*
const efectivo = 400;
const credito = 200;
const saldoDisponible = efectivo + credito;
const totalAPagar = 600;

if (efectivo > totalAPagar || credito > totalAPagar || saldoDisponible >= totalAPagar) {
    console.log("Podemos comprar")
} else {
    console.log("Fondos insuficientes")
}



let nombreAlumno = prompt("Ingrese el nombre")
let apellidoAlumno = prompt("Ingrese el apellido")

if (nombreAlumno !== "" && apellidoAlumno !== "") {
    alert("Datos recibidos. Bienvenido " + nombreAlumno + " " + apellidoAlumno)
} else {
    alert("Faltan datos!")
}
*/

// ============================ EJERCICIOS =============================
/*
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese un numero"));
let operacionMatematica = (prompt("Ingrese el tipo de operación"));

switch (operacionMatematica.toLowerCase()) {
    case("suma"): 
        let resultadoSuma = numero1 + numero2;
        alert("La suma entre " + numero1 + " " + "y" + " " + numero2 + " " + "es igual a" + " " + resultadoSuma)
    break;
    case("resta"): 
        let resultadoResta = numero1 - numero2;
        alert("La resta entre " + numero1 + " " + "y" + " " + numero2 + " " + "es igual a" + " " + resultadoResta)
    break;
    case("multiplicacion"):
    case("multiplo"): 
    let resultadoMultiplicacion = numero1 * numero2;
    alert("La multiplicacion entre " + numero1 + " " + "y" + " " + numero2  + " "  + "es igual a" + " " + resultadoMultiplicacion)
    break;
    case("division"):
    case("div"): 
    let resultadoDivision = numero1 / numero2;
    alert("La division entre " + numero1 + " " + "y" + " " + numero2 + " " + "es igual a" + " " + resultadoDivision)
    break;
    default: 
    alert("OPERACION INVALIDA. INTENTE NUEVAMENTE")
    break;
}

const nombre = "Juan";
const nombre2 = "Jose";
const nombre3 = "Pepe";
let incognito = prompt("nombre")
if ((incognito == nombre) || (incognito == nombre2) || (incognito == nombre3)) {
    alert("Fui yo")
} else {
    alert("Yo no fui")
}

let letra = prompt("ingrese una letra")

if (letra === "Y" || letra === "y") {
    alert("Correcto")
} else {
    alert("Error")
}


let valorNumerico = Number(prompt("Ingrese un numero"))

if ( 1 <= valorNumerico && valorNumerico <= 4 ) {
    switch (valorNumerico) {
        case(1): 
        alert("Elegiste a Homero")
        break;
        case(2):
        alert("Elegiste a Marge")
        break;
        case(3):
        alert("Elegiste a Bart")
        break;
        case(4):
        alert("Elegiste a Lisa")
        break;
        default: 
        alert("ERROR")
    }
} else {
    alert("Ingrese un número valido")
}


let presupuesto = Number(prompt("Ingrese un numero"))

if (presupuesto <= 1000) {
    alert(`El presupuesto de $${presupuesto} se considera bajo`)
} else if (presupuesto > 1000 && presupuesto <=3000) {
    alert(`El presupuesto de $${presupuesto} se considera medio`)
} else if (presupuesto > 3000) {
    alert(`El presupuesto de $${presupuesto} se considera alto`)
}


let producto1 = prompt("Ingrese un producto")
let producto2 = prompt("Ingrese un producto")
let producto3 = prompt("Ingrese un producto")
let producto4 = prompt("Ingrese un producto")

if (producto1 != "" && producto2 != "" && producto3 != "" && producto4 != "") {
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
        alert(heladera)
} else {
    alert("Error necesita cargar todos los productos")
}*/


