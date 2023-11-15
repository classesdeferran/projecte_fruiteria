let totalCompra = 0
let mensajeCompra = ""

function comprar( fruta, precio, unidad) {
    
    // pedimos al cliente qué cantidad desea
    let cantidad = prompt(`¿Que cantidad de ${fruta} quiere? `)

    let parcialCompra = precio * cantidad
    // redondear a dos decimales
    parcialCompra = parcialCompra.toFixed(2)
    // alert(typeof parcialCompra)
    // alert(`${precio} x ${cantidad} = ${parcialCompra}`)

    totalCompra = totalCompra + Number(parcialCompra)
    // alert(typeof totalCompra)
    // alert(totalCompra)

    document.getElementById("pendiente").innerText = "Está comprando lo siguiente:"
    document.getElementById("carrito").innerHTML += "<p>Compra</p>"
}

// comprar()