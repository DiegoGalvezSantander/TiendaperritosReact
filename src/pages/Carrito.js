import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { rutaImagen } from '../utils/productos';

export default function Carrito() {
    const { carrito, eliminar, cambiarCantidad, vaciar, total } = useCarrito();
    const navigate = useNavigate();
    if (carrito.length === 0) {
        return (
            <main className="container py-5 text-center">
                <p style={{ fontSize: '64px' }}>🛒</p>
                <h3>Tu carrito está vacío</h3>
                <Link to="/productos" className="btn btn-success mt-3">Ir a comprar →</Link>
            </main>
        );
    }
    return (
        <main className="container py-5">
            <h2 className="text-center mb-4" style={{ color: '#334b36' }}>🛒 Mi Carrito</h2>
            {carrito.map(item => (
                <div key={item.id} className="card mb-3 p-3">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex align-items-center gap-3">
                            <img src={rutaImagen(item.imagen)} alt={item.nombre} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                            <div><h5 className="mb-0">{item.nombre}</h5><small>${item.precio.toLocaleString()} c/u</small></div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-md-end align-items-center gap-3 mt-3 mt-md-0">
                            <div className="btn-group">
                                <button className="btn btn-outline-secondary btn-sm" onClick={() => cambiarCantidad(item.id, -1)} aria-label={`Disminuir cantidad de ${item.nombre}`}>−</button>
                                <span className="btn btn-outline-secondary btn-sm">{item.cantidad}</span>
                                <button className="btn btn-outline-secondary btn-sm" onClick={() => cambiarCantidad(item.id, 1)} aria-label={`Aumentar cantidad de ${item.nombre}`}>+</button>
                            </div>
                            <span className="fw-bold">${(item.precio * item.cantidad).toLocaleString()}</span>
                            <button className="btn btn-outline-danger btn-sm" onClick={() => eliminar(item.id)} aria-label={`Eliminar ${item.nombre}`}>✕</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="card p-4 text-end">
                <h3>Total: ${total.toLocaleString()}</h3>
                <div className="d-flex gap-3 justify-content-end mt-3">
                    <button className="btn btn-outline-secondary" onClick={vaciar}>Vaciar</button>
                    <button className="btn btn-success" onClick={() => navigate('/checkout')}>Continuar compra →</button>
                </div>
            </div>
        </main>
    );
}