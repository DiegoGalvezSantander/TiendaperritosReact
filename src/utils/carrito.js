export function agregarAlCarrito(carrito, producto) {
    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
        return carrito.map(p =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
    }
    return [...carrito, { ...producto, cantidad: 1 }];
}

export function cambiarCantidadEnCarrito(carrito, id, delta) {
    return carrito
        .map(p => p.id === id ? { ...p, cantidad: p.cantidad + delta } : p)
        .filter(p => p.cantidad > 0);
}

export function eliminarDelCarrito(carrito, id) {
    return carrito.filter(p => p.id !== id);
}