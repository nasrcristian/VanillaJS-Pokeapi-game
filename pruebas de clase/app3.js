/*
let food = prompt("Que queres cenar?");

switch ((food.toLowerCase())) {
    case "hamburguesa": 
        console.log(`Pedido: ${food}, valor de $1200`)
    break;
    case "pizza": 
        console.log(`Pedido ${food.toLowerCase()}, valor de $900`)
    break;
    case "lomo":
        console.log(`Pedido ${food}, valor de $800`)
    break;
    default: 
        console.log("Te ahorras unos pesos si no pedis")
    break;
}

let option = prompt(`Elija una opcion:
1: Garra
2: Batman
3: SpiderHead
4: MoonFall
`);

switch (option){
    case "1": 
        console.log("Garra")
    break;
    case "2":
        console.log("Batman")
    break;
    case "3":
        console.log("SpiderHead")
    break;
    case "4":
        console.log("MoonFall")
    break;
    default:
        console.log("No has ingresado una opcion valida")
    break;
}


let x = 0

while (x <= 10){
    console.log(`El valor de X=${x}`);
    x++
}


let entrada = prompt("Ingrese un texto o ESC para interrumpir");

let texto = " ";

while (entrada != "ESC" && entrada != "esc") {
    texto += entrada + " "
    entrada = prompt("Ingrese un texto o ESC para interrumpir")
}

alert(texto)


let y = 0

do{
    console.log(`El valor de Y es ${y}`)
    y++
} while(y<=10);
*/

// let x = 25

// do {
//     console.log(x);
//     x++
// } while (x<30);

//========================== FIZZBUZZ
/*
let x = 1

do {
    if (x%15==0) {
        console.log("fizzbuzz")
    } else if (x%3==0) {
        console.log("fizz")
    } else if (x%5==0) {
        console.log("buzz")
    } else {
        console.log(x)
    }
    x++
} while (x<100)
*/

// for (desde, hasta, actualización)
/*
for (let i = 0; i <10; i++ ) {
    alert(`El valor de I es igual a ${i}`)
}*/


// Tablas de multiplicacion
/*
let numero = Number(prompt("Ingrese un numero"))

for (let i = 1; i <= 10; i++){
    let resultado = numero * i
    alert(`La multiplicación de ${numero} x ${i} es igual a ${resultado}`)
}


for (let i = 1; i<=10; i++){
    if (i%2 == 0) {
        continue;
    }
    alert(`El valor de I es igual a ${i}`)
}
*/

// =========================== Ejercicios booklet

/*
let repeticiones = Number(prompt("Ingrese el numero de ciclos"))
let textoRepeticiones = prompt("Ingrese el texto")
let x = 1

for (x; x<=repeticiones; x++){
    console.log(textoRepeticiones + x)
}


let repeticiones = Number(prompt("Ingrese el numero de ciclos"))
const LADO = "lado"

for (let i = 1; i<=repeticiones; i++){
    alert(LADO);
    if (i==4){
        break
    }
}


let alumnosConteo = prompt("Ingrese el nombre de un alumno")
let listadoAlumnos = ""

for (let i = 1; i<=10; i++){
    listadoAlumnos += alumnosConteo + "     "
    alumnosConteo = prompt("Ingrese el nombre de un alumno")
}

alert(listadoAlumnos)


let nombres = prompt("Ingrese un nombre")
const INNOMBRABLE = "Voldemort"
let listadoNombres = " "

do {
    listadoNombres += nombres + " "
    nombres = prompt("Ingrese un nombre")
} while (nombres !== INNOMBRABLE)

alert(listadoNombres)

*/

let opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
let listadoProductos = ""
let conteo = 0

while (opciones != 0){
    switch (opciones){
        case 1:
            conteo++
            listadoProductos += `${conteo}) Tomate` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
        case 2:
            conteo++
            listadoProductos += `${conteo}) Papa` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
        case 3:
            conteo++
            listadoProductos += `${conteo}) Carne` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
        case 4:
            conteo++
            listadoProductos += `${conteo}) Pollo` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
        case 5:
            conteo++
            listadoProductos += `${conteo}) Pescado` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
        case 6:
            conteo++
            listadoProductos += `${conteo}) Cebolla` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
        case 7:
            conteo++
            listadoProductos += `${conteo}) Morrón` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
        case 8:
            conteo++
            listadoProductos += `${conteo}) Cerdo` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
        case 9:
            conteo++
            listadoProductos += `${conteo}) Pan` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
        default: 
            conteo++
            listadoProductos += `${conteo}) ERROR!!` + `
`
            opciones = Number(prompt("Ingrese un numero del 1-9 o el 0 cuando desee concluir"))
        break;
    }
} 

alert(`Esta es su lista de productos: 
${listadoProductos}`)



