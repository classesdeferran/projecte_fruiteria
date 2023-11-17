// Variables para acumular las compras
let totalCompra = 0
let mensajeCompra = ""

// Usuarios de prueba
let usuarios = [
    {"nombre": "Pepe", "password": 1234},
    {"nombre": "Anna", "password": "Java_2023"}
]

// Validar los usuarios
function login() {
    let nombre = document.getElementById("nombre").value
    let password = document.getElementById("password").value
    // 
    document.getElementById("nombre").value = ""
    document.getElementById("password").value = ""

    let mensaje = "Error en los datos"
    for (let i = 0; i < usuarios.length; i++) {
        if ((usuarios[i].nombre == nombre) && (usuarios[i].password == password)) {
            mensaje = `Todo OK`
            break
        } 
    }

    document.getElementById("error").innerText = mensaje

}



// Proceso de compra
function comprar( fruta, precio, unidad) {
    
    // pedimos al cliente qué cantidad desea
    let cantidad = prompt(`¿Que cantidad de ${fruta} quiere? `)

    // *** IMPORTANTE : falta la validación del dato que escribe el usuario
    // *** no deberíamos aceptar cantidades menores de cero ni texto
    if (cantidad == null){
        return
    }
    if (isNaN(cantidad) || cantidad <= 0) {
        alert(`"${cantidad}" no es una cantidad válida`)
        return
    }

    let parcialCompra = precio * cantidad
    cantidad = parseFloat(cantidad).toFixed(2)
    // redondear a dos decimales
    parcialCompra = parcialCompra.toFixed(2)

    // Acumulamos cada compra
    totalCompra = totalCompra + Number(parcialCompra)

    // Mostrar la información en el HTML
    document.getElementById("pendiente").innerText = "Está comprando lo siguiente:"
    document.getElementById("carrito").innerHTML += `<p class="parcialCompra">${fruta} : 
    ${cantidad} ${unidad} x ${precio} €/${unidad}= ${parcialCompra} €</p>`

    document.getElementById("totalCompra").innerHTML = `<p id="finalCompra">Total : ${totalCompra.toFixed(2)} €</p>`
}

