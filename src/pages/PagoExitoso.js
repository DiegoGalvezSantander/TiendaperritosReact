import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerOrdenes } from '../utils/productos';

export default function PagoExitoso() {
    const { id } = useParams();
    const orden = obtenerOrdenes().find(o => o.id === parseInt(id));
    if (!orden) return <main className="container py-5"><div className="alert alert-danger">Orden no encontrada.</div></main>;
    return (
        <main className="container py-5">
            <div className="card p-4 mx-auto shadow-sm" style={{ maxWidth: '700px' }}>
                <div className="alert alert-success"><h2 className="mb-0">✅ Compra realizada</h2></div>
                <p><strong>Orden #:</strong> {orden.id}</p>
                <p><strong>Fecha:</strong> {orden.fecha}</p>
                <p><strong>Cliente:</strong> {orden.cliente}</p>
                <p><strong>Email:</strong> {orden.email}</p>
                <p><strong>Dirección:</strong> {orden.direccion}</p>
                <h5 className="mt-3">Productos:</h5>
                {orden.productos.map(p => (
                    <p key={p.id}>• {p.nombre} × {p.cantidad} = ${(p.precio * p.cantidad).toLocaleString()}</p>
                ))}
                <h4 className="mt-3">Total: ${orden.total.toLocaleString()}</h4>
                <Link to="/" className="btn btn-success mt-3">Volver al inicio</Link>
            </div>
        </main>
    );
}