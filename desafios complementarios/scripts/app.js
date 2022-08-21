// Un algoritmo en el cual se le va a solicitar constantemente un numero del 1 al 9 y dependiendo del que se elija se va a sumar un producto a la lista. Para concluir con el listado y ver los productos se selecciona el numero 0.
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


// Este algoritmo cuenta todos los numeros entre el 0 y el tope; separando en una lista par y una impar

let i = 0
let topeNumerico = Number(prompt("Ingrese el tope del conteo"))
let listaImpar = " "
let listaPar = " "
for (i;i<=topeNumerico ;i++) {
    if (i%2 != 0) {
        listaImpar += i + " - "
    } else {
        listaPar += i + " - "
    }
}

console.log(`Esta es la lista de numeros impar = ${listaImpar}`)
console.log(`Esta es la lista de numeros par = ${listaPar}`)


// 




