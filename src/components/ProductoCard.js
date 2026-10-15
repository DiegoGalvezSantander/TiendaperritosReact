import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { rutaImagen } from '../utils/productos';

export default function ProductoCard({ producto }) {
    const { agregar } = useCarrito();
    const handleAgregar = (e) => {
        e.preventDefault();
        e.stopPropagation();
        agregar(producto);
    };

    
    const precioOriginal = producto.precioOriginal ?? producto.precio;
    const tieneDescuento = producto.enOferta && precioOriginal > producto.precio;

    return (
        <div className="card h-100 shadow-sm">
            <Link to={`/producto/${producto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                    src={rutaImagen(producto.imagen)}
                    className="card-img-top"
                    alt={producto.nombre}
                    style={{ height: '180px', objectFit: 'cover' }}
                />
            </Link>
            <div className="card-body d-flex flex-column text-center">
                {tieneDescuento && <span className="badge bg-danger mb-2">🔥 Oferta</span>}
                <Link to={`/producto/${producto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h5 className="card-title" style={{ color: '#334b36' }}>{producto.nombre}</h5>
                </Link>
                {tieneDescuento && (
                    <small className="text-muted text-decoration-line-through">
                        ${precioOriginal.toLocaleString()}
                    </small>
                )}
                <p className="card-text fw-bold fs-5" style={{ color: '#334b36' }}>
                    ${producto.precio.toLocaleString()}
                </p>
                <button
                    className="btn btn-success w-100 mt-auto"
                    onClick={handleAgregar}
                    aria-label={`Añadir ${producto.nombre} al carrito`}
                >
                    🛒 Añadir al carrito
                </button>
            </div>
        </div>
    );
}