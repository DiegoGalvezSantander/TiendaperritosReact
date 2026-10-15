import React from 'react';
import { obtenerProductos } from '../utils/productos';
import ProductoCard from '../components/ProductoCard';

export default function Ofertas() {
    const productos = obtenerProductos();
    const ofertas = productos.filter(p => p.enOferta === true);
    return (
        <main className="container py-5">
            <h2 className="text-center mb-2" style={{ color: '#334b36' }}>🎁 Ofertas</h2>
            <p className="text-center text-muted mb-4">Productos con precios rebajados</p>
            {ofertas.length === 0 ? (
                <div className="alert alert-info text-center">No hay ofertas disponibles.</div>
            ) : (
                <div className="row g-4">
                    {ofertas.map(p => (
                        <div key={p.id} className="col-md-6 col-lg-3"><ProductoCard producto={p} /></div>
                    ))}
                </div>
            )}
        </main>
    );
}