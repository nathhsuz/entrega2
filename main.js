const productos = [
    { nombre: "Patines 1", precio: 320 },
    { nombre: "Patines 2", precio: 580 },
    { nombre: "Patines 3", precio: 630 },
    { nombre: "Patines 4", precio: 710 },
    { nombre: "Patines 5", precio: 900 },
]

let carrito = []

let selection = prompt("Hola, ¿Deseas comprar algún producto?")

while (selection != "si" && selection != "no") {
    alert("Por favor ingresa si o no")
    selection = prompt("Hola! ¿Deseas comprar algo? si o no")
}

if (selection == "si") {
    alert("A continuación encontrarás nuestra Lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "))
}

while (selection != "no") {
    let producto = prompt("¡Por favor agrega un producto a tu carrito!")
    let precio = 0

    if (producto == "Patines 1" || producto == "Patines 2" || producto == "Patines 3" || producto == "Patines 4" || producto == "Patines 5") {
        switch (producto) {
            case "Patines 1":
                precio = 320;
                break;
            case "Patines 2":
                precio = 580;
                break;
            case "Patines 3":
                precio = 630
                break;
            case "Patines 4":
                precio = 710
                break;
            case "Patines 5":
                precio = 900
                break;
            default:
                break;

        }
        let unidades = parseInt(prompt("¿Cuantas unidades quiere agregar a tu carrito?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)

    } else {
        alert(" ¡Lo sentimos, este producto esta agotado :(!")
    }

    selection = prompt("¿Desea seguir comprando?")

    while (selection === "no"){     
     alert("¡Gracias por tu compra! Hasta pronto :)")
    carrito.forEach((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto}, unidades: ${carrito.unidades}, Total por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
break;
}      
}    

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por tu compra es: ${total}`)