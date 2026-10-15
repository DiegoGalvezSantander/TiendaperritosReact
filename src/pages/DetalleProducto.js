import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerProductos, rutaImagen } from '../utils/productos';
import { useCarrito } from '../context/CarritoContext';

export default function DetalleProducto() {
    const { id } = useParams();
    const producto = obtenerProductos().find(p => p.id === parseInt(id));
    const { agregar } = useCarrito();
    if (!producto) return <main className="container py-5"><div className="alert alert-danger">Producto no encontrado.</div></main>;

    const tieneDescuento = producto.enOferta && producto.precioOriginal > producto.precio;

    return (
        <main className="container py-5">
            <div className="row g-4 bg-white p-4 rounded-3 shadow-sm">
                <div className="col-md-6">
                    <img src={rutaImagen(producto.imagen)} alt={producto.nombre} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <span className="badge bg-success">{producto.categoria}</span>
                    {tieneDescuento && <span className="badge bg-danger ms-2">🔥 Oferta</span>}
                    <h1 className="mt-2">{producto.nombre}</h1>
                    {tieneDescuento && (
                        <p className="text-muted text-decoration-line-through mb-0">${producto.precioOriginal.toLocaleString()}</p>
                    )}
                    <p className="fs-3 fw-bold" style={{ color: '#334b36' }}>${producto.precio.toLocaleString()}</p>
                    <p className="text-muted">📦 Stock: {producto.stock} unidades</p>
                    <p>{producto.descripcion}</p>
                    <button className="btn btn-success btn-lg w-100 mt-3" onClick={() => agregar(producto)} aria-label={`Añadir ${producto.nombre} al carrito`}>🛒 Añadir al carrito</button>
                    <Link to="/productos" className="btn btn-outline-secondary w-100 mt-2">← Volver</Link>
                </div>
            </div>
        </main>
    );
}