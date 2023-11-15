// Variables para acumular las compras
let totalCompra = 0
let mensajeCompra = ""

function comprar( fruta, precio, unidad) {
    
    // pedimos al cliente qué cantidad desea
    let cantidad = prompt(`¿Que cantidad de ${fruta} quiere? `)


    // *** IMPORTANTE : falta la validación del dato que escribe el usuario
    // *** no deberíamos aceptar cantidades menores de cero ni texto

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

